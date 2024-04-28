<template>
    <div>
      <Search_Component @search="onSearch" />
      <Preview_Component :images="images" />
    </div>
  </template>
  
  <script>
  import Search_Component from './Search_Component.vue';
  import Preview_Component from './Preview_Component.vue';
  import axios from 'axios'
  
  export default {
    components: {
      Search_Component,
      Preview_Component,
    },
    data() {
      return {
        images: [], // Array to store image data
      };
    },
    methods: {
      onSearch(searchQuery) {
        // Triggered when Search_Element emits 'search' event
        this.fetchImages(searchQuery);
      },
      fetchImages(searchQuery) {
        // API request to fetch images based on the search query
        axios
          .get('/api?page=dapi&s=post&q=index', {
            params: {
              limit: 12,
              tags: searchQuery,
              json: 1,
            },
          })
          .then((response) => {
            this.images = response.data.post; // Store image data
          })
          .catch((error) => {
            console.error('Error fetching data from Gelbooru:', error);
          });
      },
    },
  };
  </script>  