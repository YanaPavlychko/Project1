<template>
  <div>
    <h1>Rick and Morty</h1>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      characters: [],
      cPage: 1,
    };
  },
  mounted() {
    this.fetchChracters(){
        let character = t
    }
  },
  methods: {
    fetchChracters() {
      fetch(`https://rickandmortyapi.com/api/character/?page=${this.cPage}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          characters = data;
          console.log(data);
        });
    },
  },
};
</script>

<style>
</style>