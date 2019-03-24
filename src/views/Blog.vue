<template>
	<div class="flex--xs flex--row">
		<div v-bind:key="post.id" v-for="post in allPosts" class="flex-col flex-col--sm-4">
			<PostExcerpt v-bind:post="post" />
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
		...mapActions(["updatePageTitle"])
	},
	computed: mapGetters(['allPosts']),
	beforeRouteUpdate(to, from, next) {
		this.updatePageTitle("Blog")
	},
	created() {
		this.updatePageTitle('Blog')
	}
}
</script>