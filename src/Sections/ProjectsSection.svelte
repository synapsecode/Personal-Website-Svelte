<script>
	import {createEventDispatcher} from 'svelte';
	import ProjectTemplate from '../Components/ProjectTemplate.svelte';

	export let media;
	const projectData = PROJDATA;
	const personalProjectData = PERPROJDATA;
	
	const dispatch = createEventDispatcher();

	function onProjectClicked(proj){
		dispatch('project_redirect', {
			link: proj.link,
		});
	}
	
</script>

<section>
	<div class="largeprojects">
		<h1 class="heading">🔥 Large Projects <span class="sw">(swipe)</span></h1>
		<div class="projectviewer" id="projectviewer">
			{#each projectData as p}
				<ProjectTemplate
					media={media}
					project={p}
					on:click={()=>onProjectClicked(p)}
				/>
			{/each}
		</div>
	</div>
	<br><br>
	<div class="personalprojects" >
		<h1 class="heading">🔥 OpenSource Personal Projects <span class="sw">(swipe)</span></h1>
		<div class="projectviewer" id="perprojviewer">
			{#each personalProjectData as p}
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
	.largeprojects{
		margin-top: 40px;
	}

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

		/* Controlls the Width */
		::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background:transparent; 
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(15, 15, 15, 0.479); 
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555; 
	}
</style>