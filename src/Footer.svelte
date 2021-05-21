<script>
	function getYear(){
		const d = new Date();
		return d.getFullYear();
	}
</script>

<footer>
	<div class="fcon">
	  <p class="footerhead">Synapse.</p>
	  <p class="mad">Made with ❤️ by Manas</p>
	  <p class="cpy">(c) Manas Hejmadi {getYear()}</p>
	</div>
</footer>

<style>
	footer{
		height: 350px;
		margin-left: -100px; 
		/* margin-top: 10px; */
		padding: 20px;
		color: white;
		width: 200%;
		background-color: black;
	}

	.footerhead{
		font-size: 8rem;
		color: white;	
	}

	.fcon{
		margin-left: 100px;
		padding: 10px;
	}

	.mad{
		font-size: 2rem;
		color: rgb(156, 156, 156);
	}

	.cpy{
		margin-top: 10px;
		color: rgb(92, 90, 90);
	}

	@media (max-width: 920px) {
		.footerhead{
			font-size: 3.7rem;
			color: white;
		}

		.fcon{
			margin-left: 100px;
			padding: 10px;
		}

		.mad{
			font-size: 1.3rem;
			color: rgb(156, 156, 156);
		}

		.cpy{
			margin-top: 10px;
			color: rgb(92, 90, 90);
		}

		footer{
			height: 250px;
		}
	}
</style>