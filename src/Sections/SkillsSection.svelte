<script>
	export let isDarkMode;
	const languagesAndFrameworks = lnf;
	const skills = skillandtech;
</script>

<section>
	<h1 class="heading">🤙 Languages & Frameworks <span class="sw">(swipe)</span></h1>
	<br />
	<div class="sidescroll {isDarkMode ? 'dmsc' : ''}" id="lngf">
		{#each languagesAndFrameworks as e}
			<div class='lang'>
				<center>
					<img src="{e.imageSrc}" alt="" class="xb" /><br />
					<small class="lname">{e.name}</small>
				</center>
			</div>
		{/each}
	</div>
	<br/>
	<br>
	<h1 class="heading">👀 Skills & Technologies <span class="sw">(swipe)</span></h1>
	<br />
	<div class="sidescroll {isDarkMode ? 'dmsc' : ''}" id="sk">
		{#each skills as e}
			<div class='skill'>
				<center>
					<img src="{e.imageSrc}" alt="" class="xb" /><br />
					<small class="lname">{e.name}</small>
				</center>
			</div>
		{/each}
	</div>
</section>

<style>
	.sidescroll{
		border: 1px double rgba(0, 0, 0, 0.493);
		height: 150px;
		overflow-y: hidden;
		display: flex;
		overflow-x: scroll;
		padding: 12px 20px;
	}

	.lang, .skill{
		height: 100px;
		width: 100px;
		margin: 0px 10px;
		padding-top: 3px;
	}

	.xb{
		height: 75px;
		width: 75px;
	}

	.lname{
		font-size: 1.1rem;
	}

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
</style>