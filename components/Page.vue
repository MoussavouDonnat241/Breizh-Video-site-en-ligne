<template>
	<div class="page">
		<BarreNavigation></BarreNavigation>
		<main>
			<NavigationGauche></NavigationGauche>
			<slot></slot>
		</main>
	</div>
</template>

<script>
	import BarreNavigation from "@/components/BarreNavigation.vue";
	import NavigationGauche from "@/components/NavigationGauche.vue";
	export default {
		name: "",
		props: [],
		components: {BarreNavigation, NavigationGauche},
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex-grow: 1;
		flex-direction: column;
	}
	.page main {
		display: flex;
		flex-grow: 1;
	}
</style>