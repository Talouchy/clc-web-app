<template>
  <v-flex>
    <!-- this layout is set to occupy viewing area of app 
    when viewing on smaller devices i.e. phones it occupies 4 space for image and 8 for name
    when the app viewed on larger device i.e. tablet or above it will set image 5 space for image and 7 for name -->
    <v-layout row wrap class="rust_app_color lighten-1">

      <!-- flex layout for avatar -->
      <v-flex xs4 sm5 pr-2 pt-3 pb-2
        text-xs-right
        >
        
        <v-avatar 
          :tile="title"
          :size="size"
          color="grey lighten-4"
          >
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
        
      <!-- flex layout for student name -->
      <v-flex xs8 sm7
        align-self-center
        text-md-start
        text-xs-start
        >
          
        <v-card 
          flat 
          class="rust_app_color lighten-1"
          >
          <v-card-text class="headline white--text font-weight-medium">Hey Khushal</v-card-text>
        </v-card>
      </v-flex>

      <!-- flex layout for quotes -->
      <v-flex xs12 pa-0, ma-0
        align-self-center
        text-md-center
        text-xs-center
        > 
  
        <v-card 
          flat
          class="rust_app_color lighten-1"
          >
          <!-- card text for quote -->
          <v-card-text  
            v-text="quote"
            class="text-no-wrap regular white--text font-weight-regular"
            >
          </v-card-text>
          
          <!-- card text for authers name  -->
          <v-card-text 
              v-text="author_quote"
              class="regular white--text font-weight-regular"
              >
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      tile: true,
      size: 70,
      quote: "It's not what you look at that matters, it's what you see.",
      author_quote: "-Henry David Thoreau"
      
    })
  }
</script>

<style>

</style>
