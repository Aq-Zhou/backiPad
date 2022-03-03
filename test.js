let func = function() {
    return new Promise((resolve, reject) => {
        resolve("返回值")
    })
}

let cb = function() {
    return '新的值';
}


// 执行后返回一个Promise { '返回值' }对象
// func()

// 通过.then相当于继续执行Promise的意思，就能继续拿到往下的return，有点像 yield
// func().then(res => {
//     console.log('res', res)
// })

func().then(function() {
    return cb() // '新的值'
}).then(res => {
    console.log('res', res)
    console.log('1 =========<');
})

func().then(function () {
    cb();
}).then(resp => {
    // 因为没有cb()直接被执行了。
    console.log(resp);
    console.log('2 =========<');
});