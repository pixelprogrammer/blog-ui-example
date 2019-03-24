<template>
	<header class="header">
		<div class="container">
			<h1 class="header__title">{{pageTitle}}</h1>
		</div>
	</header>
</template>

<script>
export default {
	name: "Banner",
	props: ["pageTitle"]
}
</script>
