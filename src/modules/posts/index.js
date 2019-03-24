const state = {
	posts: [
		{
			id: 1,
			title: "This is a test post",
			content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vitae provident? Commodi officiis atque adipisci doloremque a sint ad inventore possimus provident, veniam libero cumque ducimus temporibus quod nobis consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vitae provident? Commodi officiis atque adipisci doloremque a sint ad inventore possimus provident, veniam libero cumque ducimus temporibus quod nobis consectetur!"
		},
		{
			id: 2,
			title: "This is post number 2",
			content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vitae provident? Commodi officiis atque adipisci doloremque a sint ad inventore possimus provident, veniam libero cumque ducimus temporibus quod nobis consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vitae provident? Commodi officiis atque adipisci doloremque a sint ad inventore possimus provident, veniam libero cumque ducimus temporibus quod nobis consectetur!"
		},
		{
			id: 3,
			title: "This is the third post",
			content: "Lorem ipsum dolor sit, amet"
		},
	]
}

const getters = {
	allPosts: state => state.posts
}

const actions = {}

const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}