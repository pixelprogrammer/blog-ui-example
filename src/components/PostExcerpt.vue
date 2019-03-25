<template>
	<div v-bind:class="[classPost]">
		<h3 v-bind:class="[classTitle]">{{post.title}}</h3>
		<div v-bind:class="[classContent]">{{this.getExcerpt(post, "...")}}</div>
		<div class="post__button-container">
			<router-link :to="{name: 'post-single', params: {id: post.id}}" class="btn btn--primary">View Post</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostExcerpt",
	props: {
		"post": {
			type: Object
		},
		"classPost": {
			default: "post"
		}, 
		"classTitle": {
			default: "post__title"
		}, 
		"classContent": {
			default: "post__excerpt"
		}
	},
	methods: {
		getExcerpt(post, trail) {
			const wordCount = 20
			const words = post.body.split(" ")

			if( words.length <= 20 ) {
				return post.body
			}

			return [...words.slice(0,wordCount)].join(" ") + " " + trail
		}
	}
}

</script>

<style scoped>
		
</style>