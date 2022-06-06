<script setup>
</script>

<template>
	<router-view v-slot="{ Component, route }">
		<transition :name="route.meta.transitionName">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/transitions.css';
</style>
