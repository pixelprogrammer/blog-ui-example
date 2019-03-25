<template>
	<div id="page-single-post" class="content-body">
		<div class="container">
			<div class="inside-body">
				<PostSingle v-bind:post="post"></PostSingle>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostSingle from '../components/PostSingle'
import {fetchPost} from '../modules/posts/helpers'

export default {
	name: "Post",
	props: ["id"],
	components: {
		PostSingle
	},
	computed: mapGetters(["getPost"]),
	methods: {
		...mapActions(["updatePageTitle"]),
		fetchPost
	},
	data() {
		return {
			post: null
		}
	},
	onBeforeRouteUpdate(to, from, next) {
		this.updatePageTitle('Blog')
	},
	created() {
		this.updatePageTitle("Blog")
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
