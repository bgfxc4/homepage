<template>
	<router-link :to="routerLink ? routerLink : ''" @click="onClick" :id="'arrow-'+direction">
		<div class="arrow">
			<div class="arrow-top"></div>
			<div class="arrow-bottom"></div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "LinkArrow",
	props: {
		direction: String,
		routerLink: String,
		onClick: Function,
	}
}
</script>

<style scoped>
#arrow-down {
	position: absolute;
	transform: translateX(-50%) translateY(50%);
	left: 50%;
	bottom: 2%;
	rotate: 90deg;
}

#arrow-left {
	position: absolute;
	transform: translateX(-50%) translateY(-50%);
	left: 2%;
	bottom: 50%;
	rotate: 180deg;
}

#arrow-right {
	position: absolute;
	transform: translateX(-50%) translateY(50%);
	right: 2%;
	bottom: 50%;
}

#arrow-up {
	position: absolute;
	transform: translateX(-50%) translateY(-50%);
	left: 50%;
	top: 2%;
	rotate: 270deg;
}

.arrow {
	cursor: pointer;
	height: 4vh;
	width: 4vh;
	transition: transform .1s;
	left: 50%;
	top: 50%;
}

.arrow-top {
	transform: rotate(45deg);
	transform-origin: bottom right;
}
.arrow-top:after {
	left: 100%;
	right: 0;
	transition-delay: 0s;
}

  
.arrow-bottom {
	transform: rotate(-45deg);
	transform-origin: top right;
}

.arrow-bottom:after {
	left: 0;
	right: 100%;
	transition-delay: .15s;
}

.arrow:hover .arrow-top:after {
	left: 0;
	transition-delay: .15s;
}

.arrow:hover .arrow-bottom:after {
	right: 0;
	transition-delay: 0s;
}
  
.arrow:active {
	transform: scale(0.9);
}

.arrow-top,
.arrow-bottom {
	background-color: var(--highlight-color);
	height: 4px;
	left: -5px;
	position: absolute;
	top: 50%;
	width: 100%;
}

.arrow-top:after,
.arrow-bottom:after {
	background-color: var(--highlight-color-soft);
	content: '';
	height: 100%;
	position: absolute;
	top: 0;
	transition: all .15s;
}

.arrow-top.darkMode:after,
.arrow-bottom.darkMode:after {
	background-color: var(--highlight-color-soft);
}

</style>
