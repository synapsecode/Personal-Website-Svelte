<script>
	export let image;
	export let name;
	export let isMini;
</script>

<img
	src="{image}"
	alt="{name} Contact"
	class="{isMini ? 'minicontacticon' : 'contactIcon'}"
	on:click
/>

<style>
	/* Mini Contact Icon */
	.minicontacticon{ height: 40px; width: 40px; }
	.minicontacticon:hover{ border: 1px dotted goldenrod; }

	.contactIcon{
		height: 85px;
		width: 85px;
	}
	.contactIcon:hover{ border: 1px dotted crimson; }

</style>