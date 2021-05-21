<script>
	export let media;
	const projectData = PROJDATA;
	const personalProjectData = PERPROJDATA;
	
</script>

<section>
	<div class="largeprojects">
		<h1 class="heading">🔥 Large Projects <span class="sw">(swipe)</span></h1>
		<div class="projectviewer" id="projectviewer">
			{#each projectData as p}
				<div class="project ltr" onclick="">
					{#if $media.mobile}
						<div class="scrarea">
							<div class="ximage">
								<center>
									<img src="{p.imageSrc}" alt="" id="langimg">
								</center>
							</div>
							<div class="projectdetails">
								<label class="projectitle" for="">{p.displayName}</label><small class="yr"></small><br><br>
								<label class="yr" for="">{p.year}</label><br>
								<label class="stack" for="">{p.TechStack}</label>
								<br><br><br>
								<p class="desc">
									{p.description}
								</p>
							</div>
						</div>
					{:else}
					<div class="ximage">
							<center>
								<img src="{p.imageSrc}" alt="" id="langimg">
							</center>
						</div>
						<div class="projectdetails">
							<div class="sca">
								<label class="projectitle" for="">{p.displayName}</label><small class="yr"></small><br><br>
								<label class="yr" for="">{p.year}</label><br>
								<label class="stack" for="">{p.TechStack}</label>
								<br><br><br>
								<p class="desc">
									{p.description}
								</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<br><br>
	<div class="personalprojects" >
		<h1 class="heading">🔥 Personal Projects <span class="sw">(swipe)</span></h1>
		<div class="projectviewer" id="perprojviewer">
			{#each personalProjectData as p}
				<div class="project ltr" onclick="">
					{#if $media.mobile}
						<div class="scrarea">
							<div class="ximage">
								<center>
									<img src="{p.imageSrc}" alt="" id="langimg">
								</center>
							</div>
							<div class="projectdetails">
								<label class="projectitle" for="">{p.displayName}</label><small class="yr"></small><br><br>
								<label class="yr" for="">{p.year}</label><br>
								<label class="stack" for="">{p.TechStack}</label>
								<br><br><br>
								<p class="desc">
									{p.description}
								</p>
							</div>
						</div>
					{:else}
					<div class="ximage">
							<center>
								<img src="{p.imageSrc}" alt="" id="langimg">
							</center>
						</div>
						<div class="projectdetails">
							<div class="sca">
								<label class="projectitle" for="">{p.displayName}</label><small class="yr"></small><br><br>
								<label class="yr" for="">{p.year}</label><br>
								<label class="stack" for="">{p.TechStack}</label>
								<br><br><br>
								<p class="desc">
									{p.description}
								</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sca{
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
	}

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
</style>