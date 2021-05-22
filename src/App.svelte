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
	import ContactSection from './Sections/ContactSection.svelte';

	//JS Data Variables
	const socialLinks = social_links;

	let isDarkMode = false;
	

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

	//Prevents Navbar from Disappearing on InPage Redirect
	const shiftWindow = function() { scrollBy(0, -120) };

	//Scrolls to different sections in the WebPage
	const goto = (name) => {
		console.log("Scrolling To to " + name);
		window.location.href = "#"+name;
		shiftWindow();
	}

	//This Function Scrolls to the Appropriate Section
	function onRelocate(event){
		const dest = event.detail.destination;
		goto(dest);
	}

	function onSocialRedirect(event){
		const socialName = event.detail.socialName;
		if(socialName === 'Gmail'){
			showSnackBar();
		}else{
			console.log('Redirecting to Social :: ' + socialName);
			window.open(socialLinks[socialName], '_blank').focus();
		}
	}
	

	function projectRedirect(event){
		const link = event.detail.link;
		if(link !== null){
			console.log('Redirecting to Project Link: ' + link);
			window.open(link, '_blank').focus();
		}else{
			alert("Project Redirect Link does not exist!");
		}
	}

	const toggleTheme = () => {
		isDarkMode = !isDarkMode;
		window.document.body.classList.toggle('dm')
	}

</script>

<!--The Navigation Bar-->
<Navbar on:relocate={onRelocate} isDarkMode={isDarkMode}/>

<main>
	<div class="fab" on:click={toggleTheme}>
		<i class="fa fa-lightbulb-o fabi" style="font-size:22px"></i>
	</div>
	<div class="paint-area">
		<!-- Home -->
		<span id="home"></span>
		<HomeSection 
			on:social_redirect={onSocialRedirect}
			on:goto_projects={()=>goto('projects')}
		/>
		<div class="content">
			<span id="about"></span>	
			<AboutSection/>
			<br>
			<span id="skills"></span>
			<SkillsSection/>
			<br>
			<span id="projects"></span>
			<ProjectsSection
				media={media}
				on:project_redirect={projectRedirect}
			/>
			<br><br>
			<span id="more"></span>
			<MoreSection 
				media={media}
				on:project_redirect={projectRedirect}
			/>
			<br>
			<span id="testimonials"></span>
			<TestimonialsSection/>
			<br><br>
			<span id="contact"></span>
			<ContactSection on:social_redirect={onSocialRedirect}/>
		</div>
		
	</div>

	<!-- Footer -->
	<Footer/>
</main>



<!-- Gmail Snackbar -->
<Snackbar/>

<style>
	:global(body.dm) {
		background: #131313;
		color: white;
	}
	.fabi{
		margin-left: 16px;
		margin-top: 14px;
		color: gray;
	}
	.fab{
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: 1px solid gray;
		position: absolute;
		background: black;
		bottom: 15px;
		right: 15px;
		color: white;
	}
	.fab:hover{
		background: #383737;
	}
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