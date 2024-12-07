<template>
  <div>
    <h1>Contact Book</h1>
    <p>Manage your contacts efficiently and easily.</p>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by first or last name"
    />

    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.lastName }}, {{ contact.firstName }}
        </router-link>
      </li>
    </ul>

    <router-link to="/add">Add New Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'StartView',
  data() {
    return {
      contacts: [], 
      searchQuery: '', 
    };
  },
  computed: {
    
    filteredContacts() {
      return this.contacts
        .filter((contact) =>
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    
    loadContacts() {
      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contacts = storedContacts;
    },
  },
  mounted() {
    this.loadContacts(); 
  },
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
