<template>
	<div id="contact">
        <div id="contact-container">
            <div class="contact-item">
                <a href="https://www.linkedin.com/in/marc-binder-8b0979292/"><font-awesome-icon :icon="['fab', 'linkedin']" size="5x" /></a>
                <p>You can contact me via <a href="https://www.linkedin.com/in/marc-binder-8b0979292/">LinkedIn</a> if you want to do some business stuff with me (bonus points if your are a BWL-Justus or BWL-Marie)</p>
            </div>
            <div class="contact-item">
                <a href="https://github.com/bgfxc4"><font-awesome-icon :icon="['fab', 'github']" size="5x" /></a>
                <p><a href="https://github.com/bgfxc4">Here</a> you can find most of my current projects and create some issues or pullrequests if you do not like my code :(</p>
            </div>
            <div class="contact-item">
                <a href="mailto:marc@mail.bgfxc4.de"><font-awesome-icon :icon="['fas', 'envelope']" size="5x" /></a>
                <p>You can also be old fashioned and contact me <a href="mailto:marc@mail.bgfxc4.de">via email</a></p>
            </div>
        </div>
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

<style scoped>
#contact {
    height: 100vh;
    width: 100vw;
}

#contact-container {
    border-radius: 20px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 700px;
    background-color: grey;
    position: absolute;
    left: 50%;
    top: 30%;
    translate: -50% 0;
}

.contact-item {
    text-align: center;
}

.contact-item a {
    color: black;
}

.contact-item a:hover {
    color: initial;
}

.contact-item p {
    margin-left: 10px;
    margin-right: 10px;
}
</style>
