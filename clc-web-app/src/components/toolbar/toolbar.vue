<template>
  <v-toolbar app dark color="#ffffff">
          <v-btn icon>
            <v-icon color="#000000">arrow_back</v-icon>
          </v-btn>
        
        <v-spacer></v-spacer>
          <v-toolbar-title class="black--text">{{ this.$route.meta.title.toUpperCase() }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn to="/" icon>
            <v-icon color="#000000">home</v-icon>
          </v-btn>
          </v-toolbar>  
  
</template>

<script>


  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>