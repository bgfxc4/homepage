<template>
	<div id="projects">
		these are projects

		<link-arrow :direction="'up'" router-link="/"/>
	</div>
</template>

<script>
import LinkArrow from "./LinkArrow.vue"
export default {
	name: "Projects",
	components: {
		LinkArrow
	}
}
</script>

<style>
#projects {
	height: 100vh;
	width: 100%;
}
</style>