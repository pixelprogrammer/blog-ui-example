<template>
	<div>
		<form @submit="addPost">
			<div class="form-group">
				<input type="text" v-model="title" name="title" placeholder="Title">
			</div>
			<div class="form-group">
				<input type="submit" value="Add Post" class="btn">
			</div>
		</form>
	</div>
</template>

<script>
import uuid from 'uuid';

export default {
	name: "PostAdd",
	data() {
		return {
			title: ''
		}
	},
	methods: {
		addPost(e) {
			e.preventDefault();

			const newPost = {
				id: uuid.v4(),
				title: this.title
			}

			this.$emit('add-post', newPost);
			this.clearForm()
		},
		clearForm() {
			this.title = '';
		}
	}
}
</script>

<style>
	form {
		display: flex;
	}

	input[type="text"] {
		flex: 10;
		padding: 8px 12px;
	}

	.btn {
		border-radius: 0;
		border: #555;
		color: #555;
		padding: 8px 12px;
	}
</style>

