<template>
	<!-- Si aucune route n'est précisée -->
	<div v-if="!route" class="bouton">{{ label }}</div>
	<!-- Si une route est précisée -->
	<router-link v-if="route" class="bouton" :to="route">{{ label }}</router-link>
</template>

<script>
	export default {
		name: "NavigationGaucheItem",
		props: ["label", "route"],
	};
</script>

<style scoped>
	.bouton {
		display: flex;
		align-items: center;
		background-color: white;
		width: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
		border-radius: 10px;
		text-decoration: none;
		color: #ebebeb;
		font-weight: normal;
		font-size: 14px;
		line-height: 23px;
	}
	.bouton:visited {
		color: #ebebeb;
	}
</style>