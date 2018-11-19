<template>
  <v-layout justify-space-around>
    <v-icon small> mdi_outline_home</v-icon>

    <h1>{{ msg }}</h1>
        <router-link to="/">Log me out!</router-link>

  </v-layout>
  
</template>



<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: "you just got logged in! :)"
            }
        }
    }
    
</script>

<style scoped>
</style>