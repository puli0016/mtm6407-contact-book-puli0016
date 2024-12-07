import { createRouter, createWebHashHistory } from 'vue-router';
import StartView from '../views/StartView.vue';
import AddContactView from '../views/AddContactView.vue';
import ContactDetailsView from '../views/ContactDetailsView.vue';
import EditContactView from '../views/EditContactView.vue';

const routes = [
  { path: '/', component: StartView },
  { path: '/add', component: AddContactView },
  { path: '/contact/:id', component: ContactDetailsView },
  { path: '/edit/:id', component: EditContactView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
