<template>
    <div>
      <h1>Edit Contact</h1>
      <form @submit.prevent="editContact">
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" v-model="firstName" type="text" required />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" v-model="lastName" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditContactView',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    created() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contact = contacts.find(contact => contact.id === id); 
  
      if (contact) {
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.email = contact.email;
      } else {
        alert('Contact not found.');
        this.$router.push('/'); 
      }
    },
    methods: {
      editContact() {
        const id = this.$route.params.id;
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const contactIndex = contacts.findIndex(contact => contact.id === id);
  
        if (contactIndex !== -1) {
          contacts[contactIndex] = {
            ...contacts[contactIndex],
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
          };
  
          localStorage.setItem('contacts', JSON.stringify(contacts));
  
          this.$router.push(`/contact/${id}`);
        } else {
          alert('Error updating contact.');
        }
      },
    },
  };
  </script>
  