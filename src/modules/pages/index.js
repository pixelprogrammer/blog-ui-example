const state = {
	pageTitle: "Dashboard"
}
const mutations = {
	setPageTitle: (state, title) => (state.pageTitle = title)
}
const actions = {
	updatePageTitle({commit}, title) {
		console.log("Updating page title: ", title)
		commit('setPageTitle', title)
	}
}
const getters = {
	getPageTitle: state => state.pageTitle,

}
export default {
	state,
	actions,
	mutations,
	getters
}