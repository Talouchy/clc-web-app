<template>
  <v-app class="ice_app_color">
    <!-- Toolbar -->
    <Toolbar/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Footer -->
    <v-container>
    <Footer/>
    </v-container>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar/toolbar"
import Footer from "./components/footer/footer"
export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>

