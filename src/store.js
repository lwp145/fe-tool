import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 状态对象
const state = {
	count:11,
	// contenHeight:$("#header").outerHeight()
	// contHeight
}

// 触发状体  这个单词不能随便起
const mutations = {
	minus(state){
		state.count --;
	},
	add(state,n){
		state.count += n.a;
	}
}

// 计算属性
const getters = {
	count:function(state){
		return state.count += 1000;
	}
}

const actions = {
	jiaplus(content){
		content.commit('add',{a:10});
	},
	jianplus({commit}){
		commit('minus');
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})










































