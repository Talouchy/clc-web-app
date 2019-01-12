<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Hi Khushal</h3>
            <div>What doesn't kill you, makes you stronger</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange"></v-btn>
          <v-btn flat color="orange"></v-btn>
        </v-card-actions>
      </v-card>

      <v-layout row align-center justify-space-around mt-3>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>onddde</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="secondary">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>

</style>
