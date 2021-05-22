<script>
	export let isTestimonial=false;
	export let media;
	export let project;
</script>

{#if isTestimonial}
	<div class="testimonial" onclick="">
		<div class="sca">
			<div class="projectdetails">
				<label class="projectitle" for="">{project.name}</label><br><br>
				<p class="desc">
					{project.testimonial}
				</p>
			</div>
		</div>
	</div>
{:else}
	<div class="project ltr" on:click>
		{#if $media.mobile}
			<div class="scrarea">
				<div class="ximage">
					<center>
						<img src="{project.imageSrc}" alt="" id="langimg">
					</center>
				</div>
				<div class="projectdetails">
					<label class="projectitle" for="">{project.displayName}</label><small class="yr"></small><br><br>
					<label class="yr" for="">{project.year}</label><br>
					<label class="stack" for="">{project.TechStack}</label>
					<br><br><br>
					<p class="desc">
						{project.description}
					</p>
				</div>
			</div>
		{:else}
		<div class="ximage">
				<center>
					<img src="{project.imageSrc}" alt="" id="langimg">
				</center>
			</div>
			<div class="projectdetails">
				<div class="sca">
					<label class="projectitle" for="">{project.displayName}</label><small class="yr"></small><br><br>
					<label class="yr" for="">{project.year}</label><br>
					<label class="stack" for="">{project.TechStack}</label>
					<br><br><br>
					<p class="desc">
						{project.description}
					</p>
				</div>
			</div>
		{/if}
	</div>
{/if}


<style>
	.project{
		height: 100%;
		width: 500px;
		background-color: rgb(17, 17, 17);
		color: white;
		border: 1px solid black;
		display: flex;
		margin: 0px 10px;
		cursor: pointer;
		
	}

	#langimg{ margin: 80px 20px; }

	.project:hover, .testimonial:hover{ background-color: crimson; }

	.projectdetails{
		padding: 20px;
		width: 400px;
	}

	.projectitle{
		font-size: 2.3rem;

		margin-bottom: 10px 
	}

	.desc, .yr, .stack{
		color: rgba(255, 255, 255, 0.541);
	}

	.sca{
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.testimonial{
		border: 2px solid black;
		background-color: rgb(8, 8, 8);
		color: white;
		margin-right: 10px;
		height: 350px;
		padding: 10px;
	}

	/* .testimonial > .projectdetails{
		overflow-y: auto;
		height: 100%;
	} */

	/* Desktop Only ~ Testimonials Scrollbar */
	@media (min-width: 920px) {
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
	}

	/* Mobile View */
	@media (max-width: 920px) {
		.testimonial{
			height: 450px;
		}

		.project > .scrarea {
			height: 100%;
			overflow-y: scroll;
			overflow-x: hidden;
		}
		
		.project{
			background-color: rgb(17, 17, 17);
			color: white;
			border: 1px solid black;
			margin: 0px 5px;
			cursor: pointer;
			display: block;
			width: 300px;
		}
		
		#langimg{
			margin: 20px 0 10px 0;
		}

		.project:hover{
			background-color: crimson;
		}

		.projectdetails{
			padding: 20px;
			width: 300px;
		}

		.projectitle{
			font-size: 2rem;
			margin-bottom: 10px 
		}

		.desc, .yr, .stack{
			color: rgba(255, 255, 255, 0.541);
			overflow-wrap: break-word;
		}
	}
</style>