<script>
	export let isTestimonial=false;
	export let media;
	export let project;
	export let isDarkMode;
</script>

{#if isTestimonial}
	<div class="testimonial {isDarkMode ? 'dmpj':''}" onclick="">
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
	<div class="project ltr {isDarkMode ? 'dmpj':''}" on:click>
		{#if $media.mobile}
			<div class="scrarea">
				<div class="ximage">
					<center>
						<img src="{project.imageSrc}" alt="" id="langimg" height="96" width="96">
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
					<img src="{project.imageSrc}" alt="" id="langimg" height="96" width="96">
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
	/* Common Styles */
	.project{
		width: 500px;
		background-color: rgb(230, 229, 229);
		color: black;
		border: 1px solid rgba(255,255,255,0.1);
		border-radius: 5px;
		display: flex;
		margin: 0px 10px;
		cursor: pointer;
	}

	#langimg{ margin: 80px 20px; }

	.project:hover, .testimonial:hover{ border: 1px solid crimson; }

	.projectdetails{
		padding: 20px;
		width: 400px;
	}

	.projectitle{
		font-size: 2.3rem;	
		margin-bottom: 10px 
	}

	.sca{
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.testimonial{
		border: 1px solid rgba(255,255,255,0.1);
		background-color: rgb(230, 229, 229);
		color: black;
		margin-right: 10px;
		margin-bottom: 10px;
		max-height: 450px;
		padding: 10px;
		border-radius: 5px;
	}

	.desc, .yr, .stack{
		opacity: 0.6;
	}

	.dmpj{
		background-color: rgb(17,17,17);
		color: white;
	}

	/* Mobile View */
	@media (max-width: 920px) {
		.project{
			margin: 0px 5px;
			display: block;
			width: 300px;
		}
		
		#langimg{ margin: 20px 0 10px 0; }
		.projectdetails{ width: 300px; }
		.projectitle{
			font-size: 2rem;
			margin-bottom: 10px 
		}
	}
</style>