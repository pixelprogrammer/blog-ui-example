<template>
	<div id="nav" class="nav" v-bind:style="{'--header-color':headerColor}">
		<div class="container nav__container">
			<div class="nav__row">
				<div>
					<router-link to="/" class="btn btn--nav">Home</router-link>
					<router-link to="/blog" class="btn btn--nav">Blog</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		headerColor: {
			default: "#45454c"
		}
	}
}
</script>

<style scoped lang="scss">
	
</style>