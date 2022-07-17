<template>
	<router-link :to="routerLink ? routerLink : ''" @click="onClick" :id="'arrow-'+direction">
		<font-awesome-icon size="2x" :icon="['fas', 'arrow-'+direction]"/>
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

a {
	color: black;
	border: black solid 4px;
	border-radius: 50px;
	width: 40px;
	height: 40px;

	text-align: center;
	overflow: hidden;
}

a.darkMode {
	color: #f2f2f2;
	border: #f2f2f2 solid 4px;	
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

#arrow-left {
	position: absolute;
	left: 3%;
	bottom: 50%;
	transform: translate(-50%, 50%);
}

#arrow-right {
	position: absolute;
	left: 97%;
	bottom: 50%;
	transform: translate(-50%, 50%);
}

#arrow-up {
	position: absolute;
	left: 50%;
	top: 0%;
	transform: translate(-50%, 50%);
}

</style>