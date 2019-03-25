<template>
	<div id="app" class="full-page">
		<Header v-bind:headerColor="'#3f3d46'" />
		<Banner v-bind:pageTitle="getPageTitle"/>
		<router-view/>
		<!-- <footer class="footer">
			<div class="container">
				Blog Example - Joseph McMurray
			</div>
		</footer> -->
	</div>
</template>

<script>
import Header from './views/partials/Header'
import Banner from './views/partials/Banner'
import {mapGetters} from 'vuex'

export default {
	name: "app",
	components: {
		Header,
		Banner
	},
	computed: mapGetters(["getPageTitle"])
}
</script>
<style lang="scss">
@import "styles/main";
</style>
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>

