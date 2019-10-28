/*
* @Author: Chris
* @Date:   2019-10-28 14:37:03
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-28 17:53:39
*/
//目标 导出一个对象 对象的属性是方法名,对象的值是方法
import axios from 'axios'

import { removeUsername } from 'util'
import { SERVER,API_CONFIG } from './config.js'

const getApiObj = (apiConfig)=>{
	const apiobj = {}
	for(let key in apiConfig){
		apiObj[key] = (data)=>{
			//处理请求参数
			let url = apiConfig[key][0] || ''
			url = SERVER + url
			let method = apiConfig[key][1] || 'get'
			return request(url,method,data)
		}
	}
	return objObj
}
const request(url,method,data)=>{
	return new Promise((resolve,reject)=>{
        const options = {
            method:method,
            url:url,
            withCredentials:true,
        }
        switch(options.method.toUpperCase()){
            case 'GET':
            case 'DELETE':
                options.params = data
                break
            default:
                options.data = data
        }
		 axios(options)
        .then(result=>{
            const data = result.data
            if(data.code == 10){
            	removeUsername()
            	window.location.href = '/login'
            	reject('用户没有权限')
            }
            resolve(data)
        })
        .catch(err=>{
            reject(err)
		})
    })
}

export default getApiObj(API_CONFIG)