import config from "./config.js";
let baseUrl = '';

// 获取项目运行平台
const {platform} = uni.getSystemInfoSync();
const deviceType = {
	"android": () => {
		baseUrl = config.h5Host;
	},
	"ios": () => {
		baseUrl = config.h5Host;
	},
	"devtools": () => {
		baseUrl = config.mpHost;
	}
}

// 根据运行平台设置对应请求baseUrl
deviceType[platform]();

export default function (url, data={},method="GET") {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			success(res){
				resolve(res.data)
			}
		});
	})
}