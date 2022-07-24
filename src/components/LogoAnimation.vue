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
			logoLoaded: false,
			debug: false
		}
	},
	methods: {
		generateAntPaths () {
			if (!this.logoLoaded) return
			if (this.$route.name != "Home") return

			$(".path").remove()
			for (var i = 0; i < 6; i++) {
				var el = this.generatePath(`ant-${i}`)
				$("#paths")[0].innerHTML += el
			}

			if (this.debug) {
				$(".path").addClass("debug")
				$("#paths circle").addClass("debug")
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
			let firstVertical = goVertical
			var startLeftOrTop = Math.random() > .5

			var d = []
			var debugD = []

			let currentPos = {
				x: null,
				y: null
			}

			if (goVertical) {
				currentPos.x = Math.floor(Math.random() * w)
				currentPos.y = (startLeftOrTop ? 0 : h)
			} else {
				currentPos.x = (startLeftOrTop ? 0 : w)
				currentPos.y = Math.floor(Math.random() * h)
			}
			d.push(currentPos.x)
			d.push(currentPos.y)
			debugD.push({x: currentPos.x, y: currentPos.y})

			for (let reps = Math.floor(3 + Math.random() * 7); reps > 0; reps--) {
				if (goVertical) {
					let move = null
					if (currentPos.x > lOl && currentPos.x < (lOl + lW)) { // currentPos is above or beneath logo
						if (currentPos.y < lOt) { // currentPos is above logo
							move = Math.floor(Math.random() * lOt)
						} else { // currentPos is beneath logo
							move = Math.floor(lOt + lH + Math.random() * ((h - lOt) - lH))
						}
					} else {
						move = Math.floor(Math.random() * h)
					}
					debugD.push({isVertical: true, aboveOrBeneath: currentPos.x > lOl && currentPos.x < (lOl + lW), above: currentPos.y < lOt, move: move, currentPos: currentPos})
					d.push(move)
					currentPos.y = move
				} else {
					let move = null
					if (currentPos.y > lOt && currentPos.y < (lOt + lH)) { // currentPos is at height of logo
						if (currentPos.x < lOl) { // currentPos is left of logo
							move = Math.floor(Math.random() * lOl)
						} else { // currentPos is right of logo
							move = Math.floor(lOl + lW + Math.random() * ((w - lOl) - lW))
						}
					} else {
						move = Math.floor(Math.random() * h)
					}
					debugD.push({isVertical: false, leftOrRight: currentPos.y > lOt && currentPos.y < (lOt + lH), leftOf: currentPos.x < lOl, move: move, currentPos: currentPos})
					d.push(move)
					currentPos.x = move
				}
				goVertical = !goVertical
			}
			let canIntersectLogo = goVertical ? (currentPos.x > lOl && currentPos.x < (lOl + lW)) : (currentPos.y > lOt && currentPos.y < (lOt + lH)) // position is either above/beneath or at height of logo
			let aboveOrLeft = goVertical ? currentPos.y < lOt : currentPos.x < lOl
			let lastMove = goVertical ? ((canIntersectLogo ? aboveOrLeft : (Math.random() > .5)) ? 0 : h) : ((canIntersectLogo ? aboveOrLeft : (Math.random() > .5)) ? 0 : w)
			d.push(lastMove)
			debugD.push({isVertical: goVertical, isLast: true, canIntersectLogo, aboveOrLeft, move: lastMove, currentPos: currentPos})
			var p = `<path id="${id}" d="${this.generateD(d, firstVertical)}" class="path" style="animation-delay: ${Math.floor(Math.random() * 5)}s; --animation-time: ${8 + Math.floor(Math.random() * 15)}s"/>`
			this.debugPath(debugD, firstVertical)
			return p
		},
		generateD (arr, firstV) {
			let d = `M ${arr[0]} ${arr[1]}`
			for (let i = 2; i < arr.length; i++) {
				d += `${firstV ? 'V' : 'H'} ${arr[i]}`
				firstV = !firstV
			}
			return d
		},
		debugPath (arr, firstV) {
			let red = 255
			$("#paths")[0].innerHTML += `<circle cx="${arr[0].x}" cy="${arr[0].y}" r="10" fill="rgb(${red}, 10, 10)"><title>start\ncurrentPos: ${arr[0].x} ${arr[0].y}</title></circle>`
			red -= 35
			let last = firstV ? arr[0].x : arr[0].y
			for (let i = 1; i < arr.length; i++) {
				let debugInfo = this.getDebugInfo(arr[i])
				if (arr[i].isVertical) {
					$("#paths")[0].innerHTML += `<circle cx="${last}" cy="${arr[i].move}" r="10" fill="rgb(${red}, 10, 10)"> <title>${debugInfo}</title> </circle>`
				} else {
					$("#paths")[0].innerHTML += `<circle cx="${arr[i].move}" cy="${last}" r="10" fill="rgb(${red}, 10, 10)"> <title>${debugInfo}</title> </circle>`
				}
				last = arr[i].move
				red -= 150 / arr.length
			}
		},
		getDebugInfo (point) {
			return `currentPos: ${point.currentPos.x} ${point.currentPos.y}
move: ${point.move}
goVertical: ${point.isVertical}
${point.isVertical ? ('above or beneath: ' + point.aboveOrBeneath) : ('left or right: ' + point.leftOrRight)}
${point.isVertical ? ('is above: ' + point.above) : ('left of: ' + point.leftOf)}
${point.isLast ? `canIntersectLogo: ${point.canIntersectLogo}\naboveOrLeft: ${point.aboveOrLeft}` : ''}`
		},
		setDebug (bool) {
			this.debug = bool
			if (bool) {
				$(".path").addClass("debug")
				$("#paths circle").addClass("debug")
			} else {
				$(".path").removeClass("debug")
				$("#paths circle").removeClass("debug")
			}

		},
		setDarkMode (bool) {
			this.$store.commit("setDarkMode", bool)
		},
		logKey (e) {
			if (e.code == "KeyD")
				this.setDebug(!this.debug)
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

		window.addEventListener('keydown', this.logKey);
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
		stroke: #0000;
		stroke-dasharray: 6% 500%;
		stroke-width: 0.6%;
		stroke-dashoffset: 0%;
		stroke-linecap: round;
		stroke-linejoin: round;
		animation: stroke-offset var(--animation-time) linear infinite
	}

	.path.debug {
		stroke: black;
		animation: none;
		stroke-dasharray: none;
	}

	#paths circle {
		display: none
	}

	#paths circle.debug {
		display: block
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