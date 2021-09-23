<script>
	import {createEventDispatcher} from 'svelte';
	import ProjectTemplate from '../Components/ProjectTemplate.svelte';

	export let media;
	export let isDarkMode;
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
		<div class="projectviewer {isDarkMode ? 'dm':''}" id="projectviewer">
			{#each projectData as p}
				<ProjectTemplate
					media={media}
					project={p}
					on:click={()=>onProjectClicked(p)}
					isDarkMode={isDarkMode}
				/>
			{/each}
		</div>
	</div>
	<br><br>
	<div class="personalprojects" >
		<h1 class="heading">🔥 OpenSource Personal Projects <span class="sw">(swipe)</span></h1>
		<div class="projectviewer {isDarkMode ? 'dm':''}" id="perprojviewer">
			{#each personalProjectData as p}
				<ProjectTemplate
					media={media}
					project={p}
					on:click={()=>onProjectClicked(p)}
					isDarkMode={isDarkMode}
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
		margin-top: 0px;
		border: 1px solid rgba(0,0,0,0.493);
		border-radius: 5px;
		padding: 15px 10px 15px 10px;
		display: flex;
		overflow-y: hidden;
		
	}

	.dm{
		border: 1px solid rgba(255,255,255,0.15);
	}

	@media (max-width: 920px) {
		.projectviewer{
			margin: 20px 0 0 -20px;
			width: 115%;
			padding: 10px;
			overflow-x: scroll;
		}
	}

	/* ============== HIDE SCROLLBAR FROM VIEW ================ */
	/* width */
	::-webkit-scrollbar {
		display: none;
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		display: none;
		background: red;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		display: none;
		background: transparent;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		display: none;
		background: transparent;
	}
	/* ============== HIDE SCROLLBAR FROM VIEW ================ */
</style>