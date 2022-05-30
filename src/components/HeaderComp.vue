<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <router-link to="/add-res">Add Restaurant</router-link>
        <a href="#" @click="logOut">Log Out</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    methods: {
        logOut(){
            console.log('logout');
            localStorage.clear();
            this.$router.push({name: 'LoginPage'});
        }
    }
}
</script>

<style lang="scss">
    
</style>