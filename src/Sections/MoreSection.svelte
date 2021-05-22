<script>
	import ProjectTemplate from '../Components/ProjectTemplate.svelte';
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	function onProjectClicked(proj){
		dispatch('project_redirect', {
			link: proj.link,
		});
	}

	export let media;
	const otherWorks = OTHERDATA;
</script>

<section>
	<div class="More">
		<h1 class="heading">👀 Other Stuff </h1>
		<div class="projectviewer" id="otherworksviewer">
			{#each otherWorks as p}
				<ProjectTemplate
					media={media}
					project={p}
					on:click={()=>onProjectClicked(p)}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.projectviewer{
		height: 300px;
		margin-top: 20px;
		overflow-x: scroll;
		border: 1px solid gray;
		padding: 10px;
		display: flex;
		overflow-y: hidden;
	}

	@media (max-width: 920px) {
		.projectviewer{
			margin-top: 20px;
			height: 420px;
			width: 115%;
			margin-left: -20px;
			overflow-x: scroll;
			border: 1px solid gray;
			display: flex;
			overflow-y: hidden;
		}
	}
</style>