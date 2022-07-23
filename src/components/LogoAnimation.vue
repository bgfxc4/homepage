<template>
	<div id="LogoAnimation">
		<div id="logo-container">
			<h1>bgfxc4</h1>
			<img @load="logoLoaded = true; generateAntPaths()" src="/logo.svg" id="logo">
		</div>

		<svg id="paths">
		</svg>

		<div id="github-container" style="position: absolute; top: 5%; right: 5%">
			<toggle-switch :labelEnableText="'🌕'" :labelDisableText="'☀️'" @clicked="setDarkMode" :defaultState="$store.state.darkMode" style="margin-top: 2.5%; vertical-align: top; margin-right: 15px"/>
			<a href="https://github.com/bgfxc4/homepage"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
		</div>

		<navigation-manager :linkBottom="'/projects'" :arrowLeft="false" :arrowRight="false" :arrowTop="false" />
	</div>
</template>

<script>
import NavigationManager from "./NavigationManager.vue"
import ToggleSwitch from "./ToggleSwitch.vue"

export default {
	name: "LogoAnimation",
	components: {
		NavigationManager,
		ToggleSwitch
	},
	data () {
		return {
			logoLoaded: false
		}
	},
	methods: {
		generateAntPaths () {
			if (!this.logoLoaded) return
			console.log("\n\n\n\nasdasd")
			if (this.$route.name != "Home") return

			$(".path").remove()
			for (var i = 0; i < 1; i++) {
				var el = this.generatePath(`ant-${i}`)
				$("#paths")[0].innerHTML += el
			}

			$(".path").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", () => console.log("finished anim"))
		},
		generatePath (id) {
			var w = $("#paths").width()
			var h = $("#paths").height()

			var lW = $("#logo").width()
			var lH = $("#logo").height()
			var lOl = $("#logo").offset().left
			var lOt = $("#logo").offset().top

			var goVertical = Math.random() > .5
			var startLeftOrTop = Math.random() > .5

			var d = []

			let currentPos = {
				x: null,
				y: null
			}

			if (goVertical) {
				currentPos.x = Math.floor(Math.random() * w)
				currentPos.y = (startLeftOrTop ? 0 : h)
				d = `M${currentPos.x} ${currentPos.y} `
			} else {
				currentPos.x = (startLeftOrTop ? 0 : h)
				currentPos.y = Math.floor(Math.random() * h)
				d = `M${currentPos.x} ${currentPos.y} `
			}
			debugger;
			while (Math.random() > .15) {
				if (goVertical) {
					let move = null
					if (currentPos.x > lOl && currentPos.x < (lOl + lW)) { // currentPos is above or beneath logo
						console.log("asda")
						if (currentPos.y < lOt) { // currentPos is above logo
							move = Math.floor(Math.random() * lOt)
						} else { // currentPos is beneath logo
							move = Math.floor(lOt + Math.random() * ((h - lOt) - lH))
						}
					} else {
						move = Math.floor(Math.random() * h)
					}
					d += `V${move} `
					currentPos.y = move
				} else {
					let move = null
					if (currentPos.y > lOt && currentPos.y < (lOt + lH)) { // currentPos is at height of logo
						console.log("asd")
						if (currentPos.x < lOl) { // currentPos is left of logo
							move = Math.floor(Math.random() * lOl)
						} else { // currentPos is right of logo
							move = Math.floor(lOl + Math.random() * ((w - lOl) - lW))
						}
					} else {
						move = Math.floor(Math.random() * h)
					}
					d += `H${move} `
					currentPos.x = move
				}
				goVertical = !goVertical
			}
			d += goVertical ? `V${(Math.random() > .5) ? h : 0}` : `H${(Math.random() > .5) ? w : 0}`
			console.log(d)
			var p = `<path id="${id}" d="${d}" class="path" style="animation-delay: ${Math.floor(Math.random() * 5)}s; --animation-time: ${8 + Math.floor(Math.random() * 15)}s"/>`
			return p
		},
		setDarkMode (bool) {
			this.$store.commit("setDarkMode", bool)
		}
	},
	created () {
		document.addEventListener("DOMContentLoaded", this.generateAntPaths)
		window.addEventListener("resize", this.generateAntPaths)
	},
	mounted () {
		this.generateAntPaths()

		if (this.$store.state.darkMode) $("*").addClass("darkMode")
		else $("*").removeClass("darkMode")
	}
}
</script>

<style>
	h1 {
		font-weight: 500;
		font-size: 5vw;
	}

	h1.darkMode {
		color: white
	}

	#logo-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	#logo {
		max-height: 50vh;
		width: 30vw;
		height: auto;
	}

	#logo.darkMode {
		filter: invert(95%);
		transform: rotate(360deg);
		animation-name: rotate-logo;
		animation-duration: 1s;
	}

	#app, html {
		margin: 0;
		padding: 0;
		height: 100% !important;
		width: 100vw !important;
		overflow: hidden
	}

	#LogoAnimation, #paths {
		height: 100%;
		width: 100vw;
	}

	#paths.darkMode {
		filter: invert(95%)
	}

	:root {
		--animation-time: 12s;
	}

	a:visited, a {
		color: black;
	}

	a.darkMode:visited, a.darkMode {
		color: white;
	}

	.path {
		fill: none;
		/*stroke: #0000;*/
		stroke: black;
		/*stroke-dasharray: 6% 500%;*/
		stroke-width: 0.6%;
		/*stroke-dashoffset: 0%;*/
		stroke-linecap: round;
		stroke-linejoin: round;
		/*animation: stroke-offset var(--animation-time) linear infinite*/
	}

	@keyframes stroke-offset {
		0% {stroke: #0000}
		1% {stroke: black}
		100% {stroke-dashoffset: -506%; stroke: black}
	}

	@keyframes rotate-logo {
		from {transform: rotate(0deg)}
		to {transform: rotate(360deg)}
	}
</style>