let currentTheme = 'light';

const applyThemeAtStartup = () => {
	currentTheme = localStorage.getItem('theme') ?? 'light';
	if(currentTheme === 'dark'){
		document.body.classList.toggle('dm');
	}
}

applyThemeAtStartup();