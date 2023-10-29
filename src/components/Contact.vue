<template>
	<div id="contact">
        Here will soon be my contact information!
		<navigation-manager :arrowTop="false" :arrowLeft="false" :arrowRight="false" :linkBottom="'/'"/>
	</div>
</template>

<script>
import NavigationManager from "./NavigationManager.vue"

export default {
	name: "Contact",
	components: {
		NavigationManager,
	},
	data () {
        return {}
	},
	methods: {
	},
	mounted () {
		if (this.$store.state.darkMode) $("*").addClass("darkMode")
		else $("*").removeClass("darkMode")
	}
}

</script>

<style>
#contact {
    height: 100vh;
    width: 100vw;
}
</style>
