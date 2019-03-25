<template>
	<div class="editor">
		<form method="POST" class="editor__form" @submit="handleSubmit">
			<div v-bind:class="[classTitleContainer]">
				<input v-bind:class="[classTitle]" type="text" v-model="editorTitle">
			</div>
			<div v-bind:class="[classEditorContainer]">
				<div v-bind:class="[classEditorWrapper]">
					<div class="editor__banner editor__banner--markdown">Markdown</div>
					<textarea v-bind:class="[classEditor]" v-model="editorContent"></textarea>
				</div>
				<div v-bind:class="[classPreviewWrapper]">
					<div class="editor__banner editor__banner--preview">Preview</div>
					<div id="editor-preview" v-bind:class="[classPreview]" v-html="previewContent"></div>
				</div>
			</div>
		</form>
		<div class="editor__actions-bar">
			<button class="editor__action btn btn--primary" v-on:click="handleUpdate">Update</button>
			<button class="editor__action btn btn--error" v-on:click="handleDelete">Delete</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "Editor",
	props: {
		post: {
			type: Object
		},
		classTitle: {
			default: "editor__title"
		},
		classTitleContainer: {
			default: "editor__title-container"
		},
		classEditorContainer: {
			default: "editor__container"
		},
		classEditorWrapper: {
			default: "editor__textarea-wrapper"
		},
		classEditor: {
			default: "editor__textarea"
		},
		classPreviewWrapper: {
			default: "editor__preview-wrapper"
		},
		classPreview: {
			default: "editor__preview"
		}
	},
	data() {
		return {
			previewContent: "",
			editorContent: "",
			editorTitle: "",
			updatedPost: {}
		}
	},
	created() {
		if(this.post) {
			this.init()
		}

	},
	updated() {
		this.updatePreview()
	},
	methods: {
		init() {
			this.editorContent = this.post.body
			this.editorTitle = this.post.title
			this.updatedPost = this.post
			this.updatePreview()
		},
		updatePreview() {
			this.previewContent = this.marked(this.editorContent, {sanitize: true})
			
		},
		handleSubmit(e) {
			e.preventDefault()
		},
		handleUpdate() {
			this.updatedPost.title = this.editorTitle
			this.updatedPost.body = this.editorContent

			console.log(this.updatedPost)

			this.$emit('editor-updated', this.updatedPost)
		},
		handleDelete() {
			this.$emit('editor-delete', this.updatedPost.id)
		},
		marked: require('marked')
	}
}
</script>
