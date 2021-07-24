import req from '../../utils/req.js'

const state = {
	indexData: {}
}

const actions = {
	async getIndexDate({commit}){
		// 获取首页所有数据(发送请求)
		const data = await req('/getIndexData');
		commit('SET_INDEX_DATA', data)
		return data;
	}
}

const mutations = {
	SET_INDEX_DATA:(state, data)=>{
		state.indexData = data
	}
}

const getters = {}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}