<script>
	//Getting DataElements from GLobal Data JS
	let socialElements = social;
</script>

<section class="Home">
	<!-- Image Fragment -->
	<div class="image">
		<center>
			<img src="Images/pp.png" class="pp" alt="Profile"/>
		</center>
	</div>
	<!-- Content Fragment -->
	<div class="homespace">
		<div class="signature"></div>
		<h1 class="hello">Hey! 👋 I’m Manas Hejmadi</h1>
		<h4 class="subtitle">I Translate Ideas into Code.</h4>
		<div class="cta">
		  	<div class="outlinebtn" onclick="">WORK WITH ME</div>
			<div class="outlinebtn" onclick="">PROJECTS</div>
		</div>
		<div class="contactbar" id="cBar">
			{#each socialElements.slice(0,socialElements.length-2) as soc}
				<img
					src="{soc.imageSrc}"
					alt="{soc.name} Contact"
					class='minicontacticon'
					onclick=""
				/>
			{/each}
			<h4 class="loc">Bengaluru, India</h4>
		</div>
	  </div>
</section>

<style>
	/* Desktop View */
	section{
		height: 90vh;
	}

	.pp{
		height: 420px;
		width: 420px;
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
		color: rgb(150, 148, 148);
		font-weight: lighter;
		margin-left: 200px;
		margin-top: -32px;
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
		color: rgb(102, 102, 102);
	}

	/* Mini Contact Icon */
	.minicontacticon{ height: 40px; width: 40px; }
	.minicontacticon:hover{ border: 1px dotted goldenrod; }

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
			margin-top: 2vh;
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
	}
</style>