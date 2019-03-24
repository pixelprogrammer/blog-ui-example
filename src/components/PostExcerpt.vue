<template>
	<div v-bind:class="[classPost]">
		<h3 v-bind:class="[classTitle]">{{post.title}}</h3>
		<div v-bind:class="[classContent]">{{this.getExcerpt(post, "...")}}</div>
	</div>
</template>

<script>
export default {
	name: "Post",
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
			default: "post__content"
		}
	},
	methods: {
		getExcerpt(post, trail) {
			const wordCount = 20
			const words = post.content.split(" ")

			if( words.length <= 20 ) {
				return post.content
			}

			return [...words.slice(0,wordCount)].join(" ") + " " + trail
		}
	}
}

</script>

<style scoped>
		
</style>