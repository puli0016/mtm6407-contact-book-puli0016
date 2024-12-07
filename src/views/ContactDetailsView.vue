<template>
  <div v-if="contact">
    <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
    <p>Email: {{ contact.email }}</p>
    <div class="buttons-container">
      <button @click="deleteContact">Delete</button>
      <router-link :to="`/edit/${contact.id}`" class="button-link">Edit</router-link>
      <router-link to="/" class="button-link">Back to Home</router-link>
    </div>
  </div>
  <div v-else>
    <p>Contact not found.</p>
    <router-link to="/" class="button-link">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailsView',
  data() {
    return {
      contact: null, 
    };
  },
  created() {
    const id = this.$route.params.id;
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(contact => contact.id === id) || null;
  },
  methods: {
    deleteContact() {
      if (!this.contact) return;

     
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const updatedContacts = contacts.filter(contact => contact.id !== this.contact.id);

    
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      
      this.$router.push('/');
    },
  },
};
</script>
