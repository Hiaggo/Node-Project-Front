<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/">Log me out!</router-link>
    </div>
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