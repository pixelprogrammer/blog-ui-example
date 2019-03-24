<template>
  <div id="home">
    <div class="container">This is the homepage</div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      pageTitle: "Dashboard",
    }
  },
  methods: {
		...mapActions(["updatePageTitle"])
	},
	computed: mapGetters(['allPosts']),
	beforeRouteUpdate(to, from, next) {
		this.updatePageTitle("Dashboard")
	},
	created() {
		this.updatePageTitle('Dashboard')
	}
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
