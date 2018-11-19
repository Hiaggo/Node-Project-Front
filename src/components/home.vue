<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/login">Navigate to Login</router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js Home Page'
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>