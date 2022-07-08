<template>
	<div id="LogoAnimation">
		<div id="logo-container">
			<h1>bgfxc4</h1>
			<img src="/logo.svg" id="logo">
		</div>

		<svg id="paths">
		</svg>

		<div id="github-container" style="position: absolute; top: 5%; right: 5%">
			<a href="https://github.com/bgfxc4/homepage"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
		</div>

		<link-arrow :direction="'down'" router-link="/projects"/>
	</div>
</template>

<script>
import LinkArrow from "./LinkArrow.vue"

export default {
	name: "LogoAnimation",
	components: {
		LinkArrow
	},
	methods: {
		generateAntPaths () {
			if (this.$route.name != "Home") return

			$(".path").remove()
			for (var i = 0; i < 6; i++) {
				var el = this.generatePath(`ant-${i}`)
				$("#paths")[0].innerHTML += el
			}
			$(".path").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", () => console.log("finished anim"))
		},
		generatePath (id) {
			var w = window.innerWidth
			var h = window.innerHeight

			var goVertical = Math.random() > .5
			var startLeftOrTop = Math.random() > .5

			var d = ""

			if (goVertical) {
				d = `M${Math.floor(Math.random() * w)} ${startLeftOrTop ? 0 : h} `
			} else {
				d = `M${startLeftOrTop ? 0 : w} ${Math.floor(Math.random() * h)} `
			}

			while (Math.random() > .15) {
				if (goVertical) {
					d += `V${Math.floor(Math.random() * h)} `
				} else {
					d += `H${Math.floor(Math.random() * w)} `
				}
				goVertical = !goVertical
			}
			d += goVertical ? `V${(Math.random() > .5) ? h : 0}` : `H${(Math.random() > .5) ? w : 0}`

			var p = `<path id="${id}" d="${d}" class="path" style="animation-delay: ${Math.floor(Math.random() * 5)}s; --animation-time: ${8 + Math.floor(Math.random() * 15)}s"/>`
			return p
		}
	},
	created () {
		document.addEventListener("DOMContentLoaded", this.generateAntPaths)
		window.addEventListener("resize", this.generateAntPaths)
	},
	mounted () {
		this.generateAntPaths()
	}
}
</script>

<style>
	h1 {
		font-weight: 500;
		font-size: 5vw;
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

	#app, html {
		margin: 0;
		padding: 0;
		height: 100vh !important;
		width: 100vw !important;
		overflow: hidden
	}

	#paths {
		height: 100vh;
		width: 100vw;
	}

	:root {
		--animation-time: 12s;
	}

	a:visited {
		color: black;
	}

	.path {
		fill: none;
		stroke: #0000;
		stroke-dasharray: 6% 500%;
		stroke-width: 0.6%;
		stroke-dashoffset: 0%;
		stroke-linecap: round;
		stroke-linejoin: round;
		animation: stroke-offset var(--animation-time) linear infinite
	}

	@keyframes stroke-offset{
		0% {stroke: #0000}
		1% {stroke: black}
		100% {stroke-dashoffset: -506%; stroke: black}
	}
</style>