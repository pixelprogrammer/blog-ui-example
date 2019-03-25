<template>
	<div class="content-body">
		<div class="container">
			<div class="inside-body">
				<div class="flex--xs flex--row flex--wrap">
					<div v-bind:key="post.id" v-for="post in allPosts" class="flex-col flex-col--sm-4">
						<PostExcerpt v-bind:post="post" />
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script>

import PostExcerpt from '../components/PostExcerpt'
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'Blog',
	components: {
		PostExcerpt,
	},
	methods: {
		...mapActions(["updatePageTitle", "fetchAllPosts"])
	},
	computed: mapGetters(['allPosts']),
	beforeRouteUpdate(to, from, next) {
		this.updatePageTitle("Blog")
	},
	created() {
		this.updatePageTitle('Blog')
		let posts = this.allPosts
		// We don't want to load it again when we visit this view after editing a post, we just want to work with what we updated since a fresh load
		// This is just a demo after all
		if( posts.length == 0 ) {
			console.log("fetching...")
			this.fetchAllPosts()
		}

	}
}
</script>