const ENDPOINT_POSTS = "https://jsonplaceholder.typicode.com/posts"
const updateOptions = {
	method: "PUT",
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
}
import store from  '../../store'

export function fetchPost(id) {
	const index = store.state.posts.posts.findIndex(post => post.id === id)
	if( index !== -1 ) {
		console.log("Found a cached version of this post")
		return new Promise(function(res, rej) {
			res(store.state.posts.posts[index])
		})
	}

	return fetch(ENDPOINT_POSTS + "/" + id)
		.then(res => {
			if(res.ok) {
				return res.json()
			}
		})
		.catch(err => console.error(err))
}

export function updatePost(post) {
	return fetch(ENDPOINT_POSTS + "/" + post.id, {
		...updateOptions,
		body: JSON.stringify(post)
	})
		.then(res => {
			if( res.ok) {
				return res.json()
			}

			console.error("response did not send ok. Update post failed")
		})
}