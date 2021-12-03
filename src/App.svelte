<script>
	import SvelteSeo from "svelte-seo";
	import watchMedia from "svelte-media";

	//GlobalJS Variables
	const myCurrentAge = myAge;
	const socialLinks = social_links;

	let isDarkMode = window.document.body.classList.contains('dm');

	//Components
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
		let link = event.detail.link;
		if(link !== null){
			console.log('Redirecting to Project Link: ' + link);
			//Handle Platform Specific Links
			if(link.match(/PLATFORM_SPECIFIC::/)){
				let parts = link.replace('PLATFORM_SPECIFIC::', '').split("]:[");
				if(navigator.userAgent.match(/Android/i)){
					link = parts[0].substring(1); //Android Link
				} else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
					link = parts[1].substring(0,parts[1].length - 1); //iOS Link
				}
				link = parts[0].substring(1); //Android Default
			}
			window.open(link, '_blank').focus();
		}else{
			alert("This Project is ClosedSource and Private");
		}
	}

	const toggleTheme = () => {
		isDarkMode = !isDarkMode;
		window.document.body.classList.toggle('dm');
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		// Change the AddressbarThemeColor
		// window.document.querySelector('meta[name="theme-color"]').setAttribute('content',  isDarkMode ? '#000000' : '#FFFFFF');
	}

</script>

<SvelteSeo
  title="Manas Hejmadi"
  description={`The Personal Portfolio Website of Manas Hejmadi, a ${myCurrentAge} year old Developer and Startup Aspirant from Bengaluru, India`}
  keywords={["manas", "hejmadi", "portfolio", "coder", "programmer", "developer", "flutter developer"]}
/>

<!--The Navigation Bar-->
<Navbar on:relocate={onRelocate} isDarkMode={isDarkMode}/>

<main>
	<div class="fab" on:click={toggleTheme}>
		<i class="fa fa-lightbulb{isDarkMode ? '-o' : ''} fabi" style="font-size:22px"></i>
	</div>
	<div class="paint-area">
		<!-- Home -->
		<span id="home"></span>
		<HomeSection 
			on:social_redirect={onSocialRedirect}
			on:goto_projects={()=>goto('projects')}
			isDarkMode={isDarkMode}
		/>
		<div class="content">
			<span id="about"></span>	
			<AboutSection/>
			<br>
			<span id="skills"></span>
			<SkillsSection isDarkMode={isDarkMode}/>
			<br>
			<span id="projects"></span>
			<ProjectsSection
				media={media}
				on:project_redirect={projectRedirect}
				isDarkMode={isDarkMode}
			/>
			<br><br>
			<span id="more"></span>
			<MoreSection 
				media={media}
				on:project_redirect={projectRedirect}
				isDarkMode={isDarkMode}
			/>
			<br><br>
			<span id="testimonials"></span>
			<TestimonialsSection isDarkMode={isDarkMode}/>
			<br><br>
			<span id="contact"></span>
			<ContactSection 
				on:social_redirect={onSocialRedirect}
				isDarkMode={isDarkMode}
			/>
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
		z-index: 100;
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