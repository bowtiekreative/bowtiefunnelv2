import { Router } from './core/router.js';

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router('app');
    router.init();
});