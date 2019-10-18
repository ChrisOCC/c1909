/*
* @Author: Chris
* @Date:   2019-10-17 10:56:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 13:22:00
*/
const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true,"姓名必须输入"],
		minlength:[3,"用户名最小长度为3个字符"],
		maxlength:[10,"用户名最大长度为10个字符"]
	},
	password:{
		type:String,
		required:[true,"密码必须输入"]
	},
	isAdmin:{
		type:Boolean,
		default:false
	}
	
})

const UserModel = mongoose.model('User',UserSchema)


module.exports = UserModel
