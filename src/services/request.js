// 封装网络请求
import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

// axios实例化
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 请求前做预处理
instance.interceptors.request.use(config => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作

    return config;
}, err => {

});

// 相应后预处理
instance.interceptors.response.use(res => {
    return res.data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return err;
});

export default instance;