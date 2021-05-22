<script>
	import ProjectTemplate from '../Components/ProjectTemplate.svelte'
	const testimonials = testimonial_data;
</script>

<section>
	<div class="Testimonials">
		<h1 class="heading">✔️ Testimonials </h1>

		<div class="projectviewer" id="testimonialviewer">
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

	#testimonialviewer{
		height: fit-content;
	}
</style>