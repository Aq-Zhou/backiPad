index.js:1 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()....

函数组件传不了ref的，必须使用forwardRef。这样子组件可以拿到ref，并且绑定起来，是的父组件可以使用ref获取表单数据。


+ 操作文档

yarn add json-server -g

yarn install

json-server --watch ./db.json --port 8000

yarn start


console.log('JSON.parse(localStorage.getItem("token"))', JSON.parse(localStorage.getItem("token")))
存放在localStorage里的东西，应该是这样的{'key': 'value'}才能用，不然就报错了

localStorage取不到数据，则为null，如果有数据，为undefined，这个undefined是字符串