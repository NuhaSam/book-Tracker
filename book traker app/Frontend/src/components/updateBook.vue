<template>
    <div>
      <h2>Edit Book</h2>
      <form @submit="editBook">
        <label>Title</label>
        <input v-model="book.title" type="text" required>
        <label>Author</label>
        <input v-model="book.author" type="text" required>
        <!-- Add more form fields as needed -->
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        book: {
          title: '',
          author: '',
          // Initialize other book fields
        }
      };
    },
    methods: {
      async editBook() {
        try {
          const bookId = this.$route.params.id;
          const response = await axios.put(`/api/books/${bookId}`, this.book);
          const updatedBook = response.data;
          // Handle the updated book data (e.g., display a success message)
        } catch (error) {
          console.error(error);
          // Handle any errors (e.g., display an error message)
        }
      }
    },
    mounted() {
      this.fetchBookData();
    },
    async fetchBookData() {
      try {
        const bookId = this.$route.params.id;
        const response = await axios.get(`/api/books/${bookId}`);
        const bookData = response.data;
        this.book = bookData;
      } catch (error) {
        console.error(error);
        // Handle any errors (e.g., display an error message)
      }
    }
  };
  </script>
  