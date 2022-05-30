<template>
    <div class="page">
        <img class="logo" src="../assets/restro-image.png"/>
        <h1>Login</h1>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="logIn">Log In</button>
        <p><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async logIn(){
            let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            if(result.data.length>0 && result.status==200){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name: 'HomePage'})
            }
            console.log(result.data);
        }
    },
    // if user is logged in, then can't navigate to login
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'HomePage'})
        }
    }
}
</script>

<style lang="scss">
</style>