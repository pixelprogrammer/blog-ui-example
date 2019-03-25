// endpoints
const ENDPOINT_POSTS = "https://jsonplaceholder.typicode.com/posts"

const state = {
	posts: [
	],
	currentPost: {}
}

const getters = {
	allPosts: state => state.posts,
	getPost: state => state.currentPost
}

const actions = {
	fetchPost: ({commit}, id) => {
		

		fetch(ENDPOINT_POSTS + "/" + id)
			.then(res => {
				if(res.ok) {
					return res.json()
				}
			})
			.then(data => {
				commit("setCurrentPost", data)
			})
			.catch(err => console.error(err))
	},
	fetchAllPosts: ({commit}) => {
		fetch(ENDPOINT_POSTS)
			.then(res => {
				if(res.ok) {
					return res.json()
				}
			})
			.then(data => {
				commit("setPosts", data)
			})
			.catch(err => console.error(err))
	},
	updatePost: ({commit}, post) => {
		commit("updatePost", post)
	},
	addPost: ({commit}, post) => {
		commit("addPost", post)
	},
	deletePost: ({commit}, postID) => {
		commit("deletePost", postID)
	}
}

const mutations = {
	setCurrentPost: (state, post) => (state.currentPost = post),
	setPosts: (state, posts) => (state.posts = posts),
	updatePost: (state, updatePost) => {
		console.log("The updated post: ", updatePost)
		const postIndex = state.posts.findIndex(post => post.id === updatePost.id )
		if( postIndex !== -1) {
			state.posts.splice(postIndex, 1, updatePost)
		}
	},
	addPost: (state, post) => (state.posts.unshift(post)),
	deletePost: (state, postID) => (state.posts = state.posts.filter(post => post.id !== postID))
}

export default {
	state,
	getters,
	actions,
	mutations
}