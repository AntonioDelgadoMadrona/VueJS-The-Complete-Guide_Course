import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// The componensts are registered globally, so they can be used in any component
// If we want to use them only in a specific component, we can register them locally
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
