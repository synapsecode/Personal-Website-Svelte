<script>
	export let isDarkMode;
	import ProjectTemplate from '../Components/ProjectTemplate.svelte'
	const testimonials = testimonial_data;
</script>

<section>
	<div class="Testimonials">
		<h1 class="heading">✅ Testimonials </h1>

		<div class="projectviewer {isDarkMode ? 'dm':''}" id="testimonialviewer">
			{#each testimonials as e}
				<ProjectTemplate
					project={e}
					isTestimonial={true}
				/>
			{/each}
			<div class="wspcr"></div>
		</div>
	</div>
</section>

<style>
	.projectviewer{
		margin-top: 0px;
		border: 1px solid rgba(0,0,0,0.493);
		border-radius: 5px;
		padding: 15px 10px 5px 15px;
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