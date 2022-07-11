// 封装axios

import axios from 'axios'
import {Toast} from 'vant';

const http = axios.create({
    baseURL:'https://m.maizuo.com',
    timeout: 5000,
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1657253402555678573789185","bc":"110100"}'
    }
})

// 请求拦截器
http.interceptors.request.use((config)=>{
    // 启动和显示 loading
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        overlay: true,
        loadingType: 'spinner',
        duration: 0
    })
    // config 配置对象，对象中有一个重要属性 headers 请求头

    return config;
},(error) => {
    return Promise.reject(error)
})

// 响应拦截器

http.interceptors.response.use((res)=>{
    // 清除loading
    Toast.clear()
    // 请求成功回调，服务器响应数据回来后，响应拦截器检测到，可做一些事情
    return res
},(error)=>{
    // 请求失败回调
    return Promise.reject(error)
})

// 暴露
export { http }
