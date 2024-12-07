<template>
    <div>
      <h1>Add New Contact</h1>
      <form @submit.prevent="submitForm">
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
        <button type="submit">Add Contact</button>
      </form>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddContactView',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    methods: {
      submitForm() {
        
        const newContact = {
          id: Date.now().toString(), 
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        };
  
      
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        
        
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        
        this.$router.push(`/contact/${newContact.id}`);
      },
    },
  };
  </script>
  