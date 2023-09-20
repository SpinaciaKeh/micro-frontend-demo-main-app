<template>
	<div class="page-container">
		<iframe
			id="proxyIfr"
			height="100%"
			src="http://localhost:5000/page"
			width="100%"
		/>
		<el-button
			v-if="!isLoading"
			class="enter-btn fancy-gradient"
			@click="enterSourcePage"
			>Enter source page ->
		</el-button>
	</div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

const isLoading = ref<boolean>(true)

nextTick(() => {
	const ifrDom = document.getElementById('proxyIfr')
	ifrDom!.onload = () => {
		isLoading.value = false
	}
})

const enterSourcePage = () => {
	const a = document.createElement('a')
	a.href = 'https://www.underconsideration.com/artofthemenu/'
	a.click()
}
</script>

<style lang="scss" scoped>
.enter-btn {
	font-family: Consolas, serif;
	position: absolute;
	top: 1rem;
	left: 1rem;
	height: 2rem;
	transition: all 0.2s ease-out;
	color: #fff;
	border: none;
	border-radius: 1rem;
	background-color: #82afd5;
	background-position: top left;
	background-size: 150% 100%;
	box-shadow:
		2px 2px 5px rgba(0, 0, 0, 0.3),
		inset 2px 2px 5px rgba(255, 255, 255, 0.3),
		inset 0 0 0 1px #ffffff;

	&:hover {
		transform: scale(1.02);
		transform-origin: 1rem 1rem;
		color: var(--highlight-yellow);
		border: none;
		background-position: bottom right;
		box-shadow:
			2px 2px 10px rgba(0, 0, 0, 0.5),
			inset 2px 2px 5px rgba(255, 255, 255, 0.7),
			inset 0 0 0 1px #ffffff;
	}
}
</style>
