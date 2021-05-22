<script>
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
		<h5 class="gm">(manashejmadi@gmail.com)</h5>
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
	}

	@media(max-width:920px){
		.contactbar{
			width: 180px;
			margin: auto;
		}
	}

</style>