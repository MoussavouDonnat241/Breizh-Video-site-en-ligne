<template>
	<nav>
		<NavigationGaucheItem route="/" label="Acceuil"></NavigationGaucheItem>
		<NavigationGaucheItem route="/stock" label="Stock"></NavigationGaucheItem>
	</nav>
</template>

<script>
	import NavigationGaucheItem from "@/components/NavigationGaucheItem.vue";
	export default {
		name: "NavigationGauche",
		components: {NavigationGaucheItem},
	};
</script>

<style scoped>
	nav {
		width: 20vw;
		background: #ebebeb;
		min-width: 170px;
		max-width: 190px;
		padding: 25px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 11px;
	}
</style>