let defaultTheme = 'dark';
const applyThemeAtStartup = () => {
	let currentTheme = localStorage.getItem('theme') ?? defaultTheme;
	if(currentTheme === 'dark'){
		document.body.classList.toggle('dm');
	}
}

applyThemeAtStartup();