<template>
	<div class="content-body relative">
		<Editor v-if="post != null" v-bind:post="post" v-on:editor-updated="handleUpdate" v-on:editor-delete="handleDelete" />
		<div v-else>Loading...</div>
	</div>
</template>

<script>

import Editor from '../components/Editor'
import { mapActions, mapGetters } from 'vuex'
import {fetchPost, updatePost} from '../modules/posts/helpers'

export default {
	name: "PostEdit",
	props: ["id"],
	components: {
		Editor,
	},
	// computed: mapGetters(["getPost"]),
	methods: {
		...mapActions(["updatePost", "deletePost"]),
		fetchPost,
		handleUpdate(post) {
			if(typeof post === 'object') {
				this.updatePost(post)
				this.$toast.success({
					title: "Updated post successfully",
					message: "Post with ID of " + post.id + " was updated"
				})
			} else {
				console.error("Wrong type")
			}
		},
		handleDelete(postID) {
			console.log(postID)
			const result = confirm("Are you sure you wish to delete?")
			if( result ) {
				this.deletePost(postID)
				this.$toast.success({
					title: "Post was deleted successfully",
					message: "",
				})
				this.$router.push({path: "/blog"})
			}
		}
	},
	data() {
		return {
			post: null
		}
	},
	created() {
		let data = this.fetchPost(this.$route.params.id)
		data.then(data => {
			console.log(this.post)
			this.post = data
			console.log(this.post)
		})
		.catch(err => {
			console.error(err)
		})
	}
}
</script>

<style>

</style>
