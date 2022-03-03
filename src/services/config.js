// 定义请求接口
const devBaseURL = "http://localhost:8000";
const proBaseURL = "上线接口";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
