<script>
	export let isDarkMode;

	import SocialButton from '../Components/SocialButton.svelte';

	//Getting DataElements from GLobal Data JS
	let socialElements = social;

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	function redirect(name){
		dispatch('social_redirect', {
			socialName: name,
		});
	}

	const workWithMe = () => {
		dispatch('social_redirect', {
			socialName: 'Gmail',
		});
	}

	const gotoProjects = () => {
		dispatch('goto_projects', {
		});
	}


</script>

<section class="Home">
	<!-- Image Fragment -->
	<div class="image">
		<center>
			<img src="Images/profile.png" class="pp" alt="Profile" height="420" width="420"/>
		</center>
	</div>
	<!-- Content Fragment -->
	<div class="homespace">
		<div class="signature"></div>
		<h1 class="hello">Hey! 👋 I’m Manas Hejmadi</h1>
		<h2 class="subtitle {isDarkMode ? 'd': ''}">I Translate Ideas into Code.</h2>
		<div class="cta">
		  	<div class="outlinebtn" on:click={workWithMe}>WORK WITH ME</div>
			<div class="outlinebtn" on:click="{gotoProjects}">PROJECTS</div>
		</div>
		<div class="contactbar" id="cBar">
			{#each socialElements.slice(0,socialElements.length-2) as soc}
				<SocialButton
					name="{soc.name}"
					isMini={true}
					image={soc.imageSrc}
					on:click="{()=>redirect(soc.name)}" 
				/>
			{/each}
			<h3 class="loc {isDarkMode ? 'd': ''}">Bengaluru, India</h3>
		</div>
	  </div>
</section>

<style>
	/* Desktop View */
	section{
		height: 90vh;
	}

	.pp{
		margin: auto 20px;
		border-radius: 50%;
		border: 1px solid black;
	}

	.signature{
		display: none;
		height: 60px;
		width: 100px;
		background-color: rgb(211, 211, 211);
	}

	.image{
		flex: 2;
	}

	.homespace{
		flex: 2;
		padding: 20px 20px 20px 0px;
	}

	.Home{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loc{
		color: rgba(0, 0, 0, 0.600);
		font-weight: lighter;
		margin-left: 200px;
		margin-top: -36px;
		transition: 0.3s ease;
	}

	.d{
		color: rgba(255, 255, 255, 0.479);
	}

	.cta{
		display: flex;
		margin-bottom: 10px;
	}

	.hello{
		font-size: 4.8rem;
		font-weight: bolder;
		line-height: 80px;
		margin-bottom: 10px;
	}

	.subtitle{
		font-size: 1.6rem;
		font-weight: lighter;
		margin-bottom: 10px;
		margin-left: 5px;
		color: rgb(92, 92, 92);
	}

	.outlinebtn{
		padding: 10px 20px;
		border: 1px solid gray;
		text-align: center;
		font-family: "Ubuntu", sans-serif;
		margin: 5px;
		cursor: pointer;
	}

	.outlinebtn:hover{
		border: 1px solid white;
		background-color: black;
		color: white;
		transition: 0.5s;
		cursor: pointer;
	}

	/* Mobile View */
	@media (max-width: 920px) {
		.pp {
			height: 220px;
			width: 220px;
			margin-top: 10px;
		}

		.image {
			margin-left: 0px;
			margin-bottom: 10px;
		}

		.Home {
			/* margin-top: 1vh; */
			display: block;
			padding-top:25px;
		}

		.homespace {
			flex: 2;
			padding: 0;
			text-align: center;
		}

		.hello{
			font-size: 2.2rem;
			line-height: 40px;
			margin-bottom: 10px;
		}

		.loc {
			display: block;
			margin-left: 0px;
			margin-top: 10px;
		}

		.cta{
			width: 320px;
			margin: auto;
			margin-bottom: 20px;
		}

		.subtitle{
			font-weight:normal;
			font-size: 1.3rem;
		}
	}
</style>