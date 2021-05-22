<script>
export let isDarkMode;
let isDrawerOpen = false;
import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();
function relocate(loc){
	if(isDrawerOpen){
		document.getElementById("click").checked = false;
		isDrawerOpen = false;
	}
	dispatch('relocate', {
		destination: loc,
	});
}

function onDrawerStateChanged(x){
	if(isDrawerOpen){
		document.getElementById("click").checked = false;
		isDrawerOpen = false;
	}else{
		isDrawerOpen = true;
	}
}

</script>

<nav class="{isDarkMode ? 'dmnav' : ''}">
	<img src="Images/brain.png" alt="" id="logoimg" class="{isDarkMode ? 'dm' : ''}" />
	<!-- Part of Drawer Open & Close Mechanism -->
	<input type="checkbox" id="click" on:change={onDrawerStateChanged} />
	<label for="click" class="menu-btn">
		<i class="fas fa-bars"></i>
	</label>
	<ul class="{isDarkMode ? 'ddm' : ''}">
		<li><p on:click="{()=>relocate('home')}">Home</p></li>
		<li><p on:click="{()=>relocate('about')}">About</p></li>
		<li><p on:click="{()=>relocate('skills')}">Skills</p></li>
		<li><p on:click="{()=>relocate('projects')}">Projects</p></li>
		<li><p on:click="{()=>relocate('more')}">More</p></li>
		<li><p on:click="{()=>relocate('testimonials')}">Testimonials</p></li>
		<li><p on:click="{()=>relocate('contact')}">Contact</p></li>
	</ul>
</nav>

<style>
	/* Desktop Navbar CSS */
	nav {
		display: flex;
		height: 65px;
		width: 100%;
		background: #f6f6f6;
		align-items: center;
		justify-content: space-between;
		padding: 0 50px 0 50px;
		flex-wrap: wrap;
		color: rgba(0, 0, 0, 0.822);
		transition: 0.3s ease;
	}
	
	nav ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}

	nav ul li { margin: 0 5px; }

	nav ul li p {
		color: black;
		text-decoration: none;
		font-size: 18px;
		font-weight: 500;
		padding: 8px 15px;
		border-radius: 5px;
		letter-spacing: 1px;
		transition: all 0.3s ease;
	}
	
	nav ul li p:hover {
		color: white;
		cursor: pointer;
		background: black;
	}

	/* Hamburger Button Icon */
	nav .menu-btn i {
		color: rgb(102, 102, 102);
		font-size: 22px;
		cursor: pointer;
		display: none;
	}

	/* Hide the Drawer Open & Close Mechanism */
	input[type="checkbox"] {
		visibility: hidden;
	}

	/* Mobile Navbar CSS */
	@media (max-width: 920px) {

		/* Enable Hamburger Button to be seen */
		nav .menu-btn i { display: block; }

		/* Change Hambergur Icon to Cancel Icon when sidebar is open */
		#click:checked ~ .menu-btn i:before { content: "\f00d"; }
		
		nav ul {
			position: fixed;
			top: 65px;
			left: -100%;
			background: rgba(255, 255, 255);
			opacity: 0.90;	
			height: 100%;
			width: 100%;
			text-align: center;
			display: block;
			transition: all 0.3s ease;
			overflow-y: scroll;
			padding-bottom: 55px; /*Offsetting the 65px top*/
			
		}
		
		/* Open the Drawer */
		/* Selects ul element preceded by an open checkbox 'click' and brings it in view */
		#click:checked ~ ul {
			left: 0; /* left goes from -100% -> 0 (in view)*/
		}

		nav ul li {
			width: 100%;
			margin: 40px 0;
		}
		
		nav ul li p {
			width: 100%;
			margin-left: -100%;
			color: black;
			display: block;
			font-size: 20px;
			transition: 0.4s cubic-bezier(0.68, -0.55, 1.265, 1.55);
		}
		
		/* Brings the Text Inside ul, li thats preceded by checkbox and brings left margin from -100% -> 0 */
		#click:checked ~ ul li p {
			margin-left: 0;
		}

		nav ul li p:hover {
			color: gray;
			cursor: pointer;
			background: white;
		}
	}

	/* Tablet CSS */
	@media (max-width: 1000px) {
		nav {
			padding: 0 40px 0 50px;
		}
	}

	#logoimg{
		height: 48px;
		width: 48px;
	}

	.dm{
		filter: invert(80%);
	}

	.ddm{
		opacity: 0.99;
		filter: invert(100%);
	}
	
	.dmnav{
		
		background-color: #161616;
	}
</style>