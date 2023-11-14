// index.js

import { initNavbar } from './microfrontends/navbar/navbar.js';
import { initFooter } from './microfrontends/footer/footer.js';
import { initMenu } from './microfrontends/Menu/menu.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMenu();
    initFooter();
});
