import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;
export const backEndUrl = 'https://localhost:7036/api/';
