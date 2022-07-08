<template>
	<div id="projects">
		<template v-for="(p, idx) in projects" :key="p.title">
			<div :id="'project-' + idx" :class="(idx == 0) ? 'initialProject' : ''" style="display: none; position: absolute; width: 94%; height: 83%; top: 9%; background-color: #f2f2f2; border-radius: 5px">
				<div class="row" style="height: 100%">
					<div class="col-4">
						<img class="proj-img" :src="'/imgs/projects/' + p.img">
					</div>
					<div class="col-8">
						<div class="proj-text">
							<h3>{{p.title}}</h3>
							<br>
							{{p.text}}
							<br>
							<br>
							<a class="btn btn-primary text-white" :href="p.github"><font-awesome-icon :icon="['fab', 'github']" size="x"/> <b>Github</b></a>
						</div>
					</div>
				</div>
				<h3 style="bottom: -6.1%" class="middlePageText">{{idx+1}}<b style="color: #0000"> / {{projects.length}}</b></h3>
			</div>
		</template>
		<h3 class="middlePageText"><b style="color: #0000">{{projIdx+1}}</b> / {{projects.length}}</h3>

		<link-arrow :direction="'left'" :onClick="projectSwipeLeft"/>
		<link-arrow :direction="'right'" :onClick="projectSwipeRight"/>

		<link-arrow :direction="'up'" router-link="/"/>
	</div>
</template>

<script>
import LinkArrow from "./LinkArrow.vue"

export default {
	name: "Projects",
	components: {
		LinkArrow
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
	}
}

const projects = [
	{
        title: "Dogfish",
        text: "A simple and light weight chess game and probably also a chess engine in the future, written in C++. The current estimated elo of the engine is about 1300 compared to chess.com bots.",
        img: "chess_picture.png",
        github: "https://github.com/bgfxc4/dogfish"
    },
    {
        title: "Bgfxc4s Bot",
        text: "A discord bot, that can do multiple things, for example manage roles, move users and has its own permission system using mongodb.",
        img: "bgfxc4sbot_picture.png",
        github: "https://github.com/bgfxc4/bgfxc4s-bot"
    },
    {
        title: "Internefs",
        text: "A selfwritten filesystem, that can't be used for accesing your hard drive, but for accesing the internet over GET, POST and HEAD http requests. It is written in C using libfuse.",
        img: "internefs_picture.png",
        github: "https://github.com/bgfxc4/internefs"
    }
]
</script>

<style>
.proj-img {
	max-width: 90%;
	max-height: 90%;
	margin-left: 50%;
	margin-top: 30%;
	transform: translateX(-50%);
	border-radius: 7px;
}

.proj-text {
	margin-left: 40%;
	margin-top: 20%;
	transform: translateX(-50%);
}

.middlePageText {
	position: absolute !important;
	left: 50%;
	bottom: 3%;
	transform: translate(50, 0);
}

#projects {
	height: 100vh;
	width: 100%;
}

@keyframes projectEnterLeft {
	from {
		left: -100%;
	}
	to {
		left: 3%;
	}
}

@keyframes projectExitLeft {
	from {
		left: 3%;
	}
	to {
		left: -100%;
	}
}

@keyframes projectEnterRight {
	from {
		right: -100%;
	}
	to {
		right: 3%;
	}
}

@keyframes projectExitRight {
	from {
		right: 3%;
	}
	to {
		right: -100%;
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