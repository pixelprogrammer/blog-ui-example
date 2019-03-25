<template>
	<div v-if="post">
		<div v-bind:class="[classActions]">
			<router-link :to="{name: 'post-edit', params: {id: post.id}}" class="btn btn--action">Edit Post</router-link>
		</div>
		<h2 v-bind:class="[classTitle]">{{post.title}}</h2>
		<div v-bind:class="[classContent]">{{post.body}}</div>
	</div>
</template>

<script>


export default {
	name: "PostSingle",
	props: {
		post: {
			type: Object
		},
		classTitle: {
			default: "post__title"
		}, 
		classContent: {
			default: "post__content"
		},
		classActions: {
			default: "post__actions"
		}
	}
}
</script>
