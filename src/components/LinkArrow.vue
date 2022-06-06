<template>
	<router-link :to="routerLink ? routerLink : ''" @click="onClick ? onClick : () => {}" :id="'arrow-'+direction">
		<font-awesome-icon size="2x" :icon="['fas', 'arrow-'+direction]"/>
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

a {
	color: black;
	border: black solid 4px;
	border-radius: 50px;
	width: 40px;
	height: 40px;

	text-align: center;
	overflow: hidden;
}

a svg {
	margin-left: 1px;
	margin-top: 1px
}

a:hover {
	color: rgb(41, 41, 41);
}

#arrow-down {
	position: absolute;
	left: 50%;
	bottom: 5%;
	transform: translate(-50%, 50%);
}
#arrow-down:hover svg, #arrow-down:active svg {
	animation: move-down ease .5s 1;
}

#arrow-left {
	position: absolute;
	left: 3%;
	bottom: 50%;
	transform: translate(-50%, 50%);
}
#arrow-left:hover svg {
	animation: move-left ease .5s 1;
}

#arrow-right {
	position: absolute;
	right: 0%;
	bottom: 50%;
	transform: translate(-50%, 50%);
}
#arrow-right:hover svg {
	animation: move-right ease .5s 1;
}

#arrow-up {
	position: absolute;
	left: 50%;
	top: 0%;
	transform: translate(-50%, 50%);
}
#arrow-up:hover svg {
	animation: move-up ease .5s 1;
}

@keyframes move-down {
	0% { transform: translateY(0px) }
	50% { transform: translateY(40px) }
	51% { transform: translateY(-40px) }
	100% { transform: translateY(0px) }
}

@keyframes move-up {
	0% { transform: translateY(0px) }
	50% { transform: translateY(-40px) }
	51% { transform: translateY(40px) }
	100% { transform: translateY(0px) }
}

@keyframes move-left {
	0% { transform: translateX(0px) }
	50% { transform: translateX(-40px) }
	51% { transform: translateX(40px) }
	100% { transform: translateX(0px) }
}

@keyframes move-right {
	0% { transform: translateX(0px) }
	50% { transform: translateX(40px) }
	51% { transform: translateX(-40px) }
	100% { transform: translateX(0px) }
}

</style>