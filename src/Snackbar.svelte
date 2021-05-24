<script>
	import DeviceDetector from "svelte-device-detector";

	function openGmail(device){
		if(device === "desktop"){
			window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manashejmadi@gmail.com", "_blank").focus();
		}else{
			window.location.href = "mailto:manashejmadi@gmail.com";
		}
	}
</script>

<div id="snackbar">
	<p>My Gmail Address is manashejmadi@gmail.com</p>
	<DeviceDetector showInDevice="desktop">
		<button class='snackbtn' on:click={()=>openGmail('desktop')}>Send Mail</button>
	</DeviceDetector>
	<DeviceDetector showInDevice="mobile">
		<button class='snackbtn' on:click={() => openGmail('mobile')}>Send Mail</button>
	</DeviceDetector>
</div>

