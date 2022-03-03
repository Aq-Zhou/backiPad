index.js:1 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()....

函数组件传不了ref的，必须使用forwardRef。这样子组件可以拿到ref，并且绑定起来，是的父组件可以使用ref获取表单数据。


+ 操作文档

yarn add json-server -g

yarn install

json-server --watch ./db.json --port 8000

yarn start
