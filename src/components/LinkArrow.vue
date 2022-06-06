<template>
	<router-link :to="routerLink ? routerLink : ''" @click="onClick ? onClick : () => {}" :id="'arrow-'+direction">
		<font-awesome-icon size="3x" :icon="['far', 'circle-'+direction]"/>
	</router-link>
</template>

<script>
export default {
	name: "LinkArrow",
	props: {
		direction: String,
		routerLink: String,
		onClick: Function
	}
}
</script>

<style>

a:-webkit-any-link  {
	color: black
}

a:hover {
	color: rgb(41, 41, 41)
}

#arrow-down {
	position: absolute;
	left: 50%;
	bottom: 5%;
	transform: translate(-50%, 50%);
	animation: move-down-reverse .3s 1;
}
#arrow-down:hover {
	animation: move-down .3s 1;
	bottom: 4%;
}

#arrow-left {
	position: absolute;
	left: 5%;
	bottom: 50%;
	transform: translate(-50%, 50%);
	animation: move-left-reverse .3s 1;
}
#arrow-left:hover {
	animation: move-left .3s 1;
	left: 4%;
}

#arrow-right {
	position: absolute;
	right: 0%;
	bottom: 50%;
	transform: translate(-50%, 50%);
	animation: move-right-reverse .3s 1;
}
#arrow-right:hover {
	animation: move-right .3s 1;
	right: -1%;
}

#arrow-up {
	position: absolute;
	left: 50%;
	top: 0%;
	transform: translate(-50%, 50%);
	animation: move-up-reverse .3s 1;
}
#arrow-up:hover {
	animation: move-up .3s 1;
	top: -1%;
}

@keyframes move-down {
	0% { bottom: 5%}
	100% { bottom: 4%}
}
@keyframes move-down-reverse {
	0% { bottom: 4%}
	100% { bottom: 5%}
}

@keyframes move-up {
	0% { top: 0%}
	100% { top: -1%}
}
@keyframes move-up-reverse {
	0% { top: -1%}
	100% { top: 0%}
}

@keyframes move-left {
	0% { left: 5%}
	100% { left: 4%}
}
@keyframes move-left-reverse {
	0% { left: 4%}
	100% { left: 5%}
}

@keyframes move-right {
	0% { right: 0%}
	100% { right: -1%}
}
@keyframes move-right-reverse {
	0% { right: -1%}
	100% { right: 0%}
}
</style>