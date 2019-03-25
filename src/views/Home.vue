<template>
  <div class="content-body">
    <div class="container">
      <div class="inside-body">
        Dashboard content here
      </div>
    </div>
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
