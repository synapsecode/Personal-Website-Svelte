<script>
	import watchMedia from "svelte-media";
	import Navbar from './Navbar.svelte';
	import Snackbar from './Snackbar.svelte';
	import Footer from './Footer.svelte';
	import HomeSection from './Sections/HomeSection.svelte';
	import AboutSection from './Sections/AboutSection.svelte';
	import SkillsSection from './Sections/SkillsSection.svelte';
	import ProjectsSection from './Sections/ProjectsSection.svelte';
	import MoreSection from './Sections/MoreSection.svelte';
	import TestimonialsSection from './Sections/TestimonialsSection.svelte';
	

	const mediaqueries = {
		mobile: "(max-width: 920px)",
  		desktop: "(min-width: 920px)",
	}
	const media = watchMedia(mediaqueries);

	// This Function is responsible for showing the Snackbar when the Gmail icon is clicked
	function showSnackBar(){
		var x = document.getElementById("snackbar");
  		x.className = "show";
  		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}

	//This Function Scrolls to the Appropriate Section
	function onRelocate(event){
		console.log(`Relocating to: ${event.detail.destination}`);
	}
</script>

<!--The Navigation Bar-->
<Navbar on:relocate={onRelocate}/>

<main>
	<div class="paint-area">
		<!-- Home -->
		<span id="rt-home"></span>
		<HomeSection/>
		<div class="content">
			<span id="rt-about"></span>
			<AboutSection/>
			<br>
			<span id="rt-skills"></span>
			<SkillsSection/>
			<br>
			<span id="rt-projects"></span>
			<ProjectsSection media={media}/>
			<br><br>
			<span id="rt-more"></span>
			<MoreSection media={media}/>
			<br>
			<span id="rt-testimonials"></span>
			<TestimonialsSection/>
		</div>
	</div>
	<!-- Footer -->
	<Footer/>
</main>



<!-- Gmail Snackbar -->
<Snackbar/>

<style>
	main{	
		height: 100vh;
		scroll-behavior: smooth;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.content{
		padding: 25px;
		margin-top: 25px;
	}

	.paint-area{
		padding: 20px;
	}

	@media (max-width: 920px) {
		.paint-area{
			padding: 10px;
			margin-top: -20px;
		}
	}

	
</style>