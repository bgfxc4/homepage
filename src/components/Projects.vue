<template>
	<div id="projects">
		<template v-for="(p, idx) in projects" :key="p.title">
			<div :id="'project-' + idx" class="projectPanel" :class="(idx == 0) ? 'initialProject' : ''">
				<div class="img-container">
					<img class="proj-img" :src="'/imgs/projects/' + p.img">
				</div>
				<div class="proj-text-container">
					<div class="proj-text text-light">
						<h3>{{p.title}}</h3>
						<br>
						{{p.text}}
						<br>
						<br>
						<a v-if="p.github" target="_blank" class="btn btn-primary text-white mx-2" :href="p.github"><font-awesome-icon :icon="['fab', 'github']"/> <b>Github</b></a>
						<a v-if="p.link" target="_blank" class="btn btn-primary text-white mx-2" :href="p.link"><font-awesome-icon :icon="['fa', 'link']"/> <b>Link</b></a>
					</div>
				</div>
				<h3 style="bottom: -6.1%" class="middlePageText">{{idx+1}}<b style="color: #0000"> / {{projects.length}}</b></h3>
			</div>
		</template>
		<h3 class="middlePageText"><b style="color: #0000">{{projIdx+1}}</b> / {{projects.length}}</h3>

		<navigation-manager :arrowBottom="false" @onLeft="projectSwipeLeft()" @onRight="projectSwipeRight()" :linkTop="'/'"/>
	</div>
</template>

<script>
import NavigationManager from "./NavigationManager.vue"

export default {
	name: "Projects",
	components: {
		NavigationManager,
	},
	data () {
		return {
			projects: projects,
			projIdx: 0
		}
	},
	methods: {
		projectSwipeLeft () { this.projectSwipe(-1)},
		projectSwipeRight () { this.projectSwipe(1)},
		projectSwipe (dir) {
			var newIdx = this.projIdx + dir
			if (newIdx < 0) newIdx = this.projects.length - 1
			else if (newIdx == this.projects.length) newIdx = 0

			for (var s of ['projectExitLeft', 'projectExitRight', 'projectEnterLeft', 'projectEnterRight', 'initialProject']) {
				$(`.${s}`).removeClass(s)
			}

			$(`#project-${newIdx}`).addClass((dir == 1 ? 'projectEnterRight' : 'projectEnterLeft'))
			$(`#project-${this.projIdx}`).addClass((dir == 1 ? 'projectExitLeft' : 'projectExitRight'))
			this.projIdx = newIdx
		},
	},
	mounted () {
		$(".project-0").addClass("initialProject")

		if (this.$store.state.darkMode) $("*").addClass("darkMode")
		else $("*").removeClass("darkMode")
	}
}

const projects = [
	{
		title: "Dogfish",
		text: "A simple and light weight chess game and also a chess engine, written in C++. The current estimated elo of the engine is about 1300 compared to chess.com bots.",
		img: "chess_picture.png",
		github: "https://github.com/bgfxc4/dogfish"
	},
	{
		title: "DHBW Engineering",
		text: "A bunch of students working on a racing car for paricipating in the international Formula Student competition. I am working in the autonomous racing subteam.",
		img: "engineering.png",
		link: "https://dhbw-engineering.de",
	},
	{
		title: "Internefs",
		text: "A selfwritten filesystem, that can't be used for accessing your hard drive, but for accessing the internet over GET, POST and HEAD http requests. It is written in C using libfuse.",
		img: "internefs_picture.png",
		github: "https://github.com/bgfxc4/internefs"
	}
]
</script>

<style>
.proj-img {
	position: absolute;
	height: 100%;
	border-radius: 10px;
}

.proj-text-container {
	position: relative;
	height: 100%;
	width: 100%;
	border-radius: 10px;
	background: linear-gradient(to top right, rgba(0, 0, 0, .7), rgba(0, 0, 0, 0));
}

.proj-text {
	position: absolute;
	bottom: 20px;
	left: 15px;
	width: 60%;
}

.middlePageText {
	position: absolute !important;
	left: 50%;
	bottom: 3%;
	transform: translate(50, 0);
}

#projects {
	height: 100%;
	width: 100%;
}

.projectPanel {
	display: none;
	position: absolute;
	width: 94%;
	height: 83%;
	top: 9%;
	background-color: #f2f2f2;
	border-radius: 10px;
}

.projectPanel .img-container {
	position: inherit;
	width: 100%;
	height: 100%;
	overflow: hidden;
    border-radius: inherit;
}

.projectPanel:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top right, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0));
    transform: translate(-20px, 20px);
    filter: blur(19px);
    opacity: var(0.62);
    transition: opacity 0.3s;
    border-radius: inherit;
}
.projectPanel::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.projectPanel.darkMode {
	background-color: var(--color-background-soft-dark);
	color: var(--color-text-dark)
}

@keyframes projectEnterLeft {
	from {
		left: -100%;
    	transform: scale(0.8);
	}
	to {
		left: 3%;
    	transform: scale(1);
	}
}

@keyframes projectExitLeft {
	from {
		left: 3%;
    	transform: scale(1);
	}
	to {
		left: -100%;
    	transform: scale(0.8);
	}
}

@keyframes projectEnterRight {
	from {
		right: -100%;
    	transform: scale(0.8);
	}
	to {
		right: 3%;
    	transform: scale(1);
	}
}

@keyframes projectExitRight {
	from {
		right: 3%;
    	transform: scale(1);
	}
	to {
		right: -100%;
    	transform: scale(0.8);
	}
}

.projectEnterLeft {
	left: 3%;
	display: block !important;
	animation-name: projectEnterLeft;
	animation-duration: 1s;
	animation-iteration-count: 1;
}

.projectExitLeft {
	left: -100%;
	display: block !important;
	animation-name: projectExitLeft;
	animation-duration: 1s;
	animation-iteration-count: 1;
}

.projectEnterRight {
	right: 3%;
	display: block !important;
	animation-name: projectEnterRight;
	animation-duration: 1s;
	animation-iteration-count: 1;
}

.projectExitRight {
	right: -100%;
	display: block !important;
	animation-name: projectExitRight;
	animation-duration: 1s;
	animation-iteration-count: 1;
}

.initialProject {
	left: 3%;
	display: block !important;
}
</style>
