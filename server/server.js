const Koa = require('koa');
const KoaRouter = require('koa-router');

// 创建服务器应用实例
const app = new Koa();

const router = new KoaRouter();
	
app.use(router.routes());

// 应用
app.listen(9527,(error) => {
	if(error){
		console.log('服务器启动失败!!')
	}else{
		console.log('服务器启动成功,启动于http://localhost:9527')
	}
})