<script>
	export let isDarkMode;
	import SocialButton from '../Components/SocialButton.svelte';
	let socialElements = social;

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	function redirect(name){
		dispatch('social_redirect', {
			socialName: name,
		});
	}
</script>

<section>
	<div class="Contacts">
		<h1 class="heading">🤙 Contact Me</h1>
		<h2 class="gm {isDarkMode ? 'd' : ''}">(manashejmadi@gmail.com)</h2>
		<br />
		<div class="contactbar" id="cBar2">
			{#each socialElements as soc}
				<SocialButton
					name="{soc.name}"
					isMini={false}
					image={soc.imageSrc}
					on:click="{()=>redirect(soc.name)}" 
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.gm{
		margin-top: -10px;
		margin-left: 80px;
		font-size: 1rem;
		color: #333;
		font-weight: lighter;
		z-index:-10;
		transition: 0.3s ease;
	}

	.d{
		color: rgba(255, 255, 255, 0.479);
	}

	@media(max-width:920px){
		.contactbar{
			width: 180px;
			margin: auto;
		}
	}

</style>