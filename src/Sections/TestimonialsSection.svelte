<script>
	const testimonials = testimonial_data;
</script>

<section>
	<div class="Testimonials">
		<h1 class="heading">✔️ Testimonials </h1>

		<div class="projectviewer" id="testimonialviewer">
			{#each testimonials as e}
				<div class="testimonial" onclick="">
					<div class="projectdetails">
						<label class="projectitle" for="">{e.name}</label><br><br>
						<p class="desc">
							{e.testimonial}
						</p>
					</div>
				</div>
			{/each}
			<div class="wspcr"></div>
		</div>
	</div>
</section>

<style>
	.testimonial{
		border: 2px solid black;
		background-color: rgb(8, 8, 8);
		color: white;
		margin-right: 10px;
		height: 300px;
		padding: 10px;
	}

	.testimonial > .projectdetails{
		overflow-y: auto;
		height: 100%;
	}
	#testimonialviewer{
		height: fit-content;
	}

	@media (max-width: 920px) {
		.testimonial{
			height: 450px;
		}
	}

	/* Desktop Only ~ Testimonials Scrollbar */
	@media (min-width: 920px) {
		/* Controlls the Width */
		::-webkit-scrollbar {
		width: 10px;
		}

		/* Track */
		::-webkit-scrollbar-track {
		background: #f1f1f1; 
		}
		
		/* Handle */
		::-webkit-scrollbar-thumb {
		background: #888; 
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
		background: #555; 
		}
	}
</style>