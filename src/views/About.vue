<template>
	<div class="about">
		
	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: "about",
	computed: mapGetters(['getPageTitle']),
	methods: {
		...mapActions(["updatePageTitle"])
	},
	created() {
		this.updatePageTitle('About Us')
	}
}
</script>
