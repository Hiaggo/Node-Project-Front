<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/home">Log me in!</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                msg: 'Login Page'
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