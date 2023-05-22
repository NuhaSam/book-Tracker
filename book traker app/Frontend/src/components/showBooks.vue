<template>
    <div>
       <h1>Books</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, i) in books" :key="i">
          <td ></td>
          <td >{{ book.title }}</td>
          <td >{{ book.author }}</td>
          <td >{{ book.version }}</td>
          <td >{{ book.pages }}</td>
          
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>

import axios from 'axios';
export default {
  name: "showBooks",
  data() {
    return {
      books:[
      {
          id: 1,
          title: "A",
          author: "Ahmed",
          version: 1,
          numberOfPage: 200,
        },
      ]
    }
  }
  , methods: {
    async showBooks() {
      let result = await axios.post('http://localhost:5000/books ', {
        version:this.version,
        author: this.author,
        pages:this.pages,
        title: this.title

  });
  console.log(result);
  if(result.status == 200){
    // alert('Done !!');
    // this.$router.push({name: 'showBooks'})
  }
      console.log('signing in **')
}
  }
};











// import CreateBookRecord from "./CreateBookRecord.vue";
// export default {
//   data: function () {
//     return {
//       showComponent: false,
//       books: [
//         {
//           id: 1,
//           title: "A",
//           author: "Ahmed",
//         },
//         {
//           id: 2,
//           title: "B",
//           author: "Ali",
//         },
//         {
//           id: 3,
//           title: "C",
//           author: "Oday",
//         },
//         {
//           id: 4,
//           title: "D",
//           author: "Mohammed",
//         },
//       ],
//     };
//   },
// //   components: {
// //     CreateBookRecord,
// //   },
//   methods: {
//     createBookRecord() {
//       // this.$modal.show('CreatBookRecord')
//     },
//   },
//   name: "ListBook",
// };

</script>
<style scoped>
table {
    width: 50%;
    margin: 5% 10% 0 10%;
}</style>