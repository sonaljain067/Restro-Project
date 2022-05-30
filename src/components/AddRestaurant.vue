<template>
    <HeaderComp />
    <h1>Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter name" />
        <input type="text" name="name" v-model="restaurant.address" placeholder="Enter address" />
        <input type="text" name="name" v-model="restaurant.contact" placeholder="Enter Contact" />
        <button @click="addRes" type="button">Add Restaurant</button>
    </form>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {    
    name: 'AddRes',
    components: {
        HeaderComp
    },
    data(){
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }
    },
    methods: {
        async addRes(){
            let result=await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            if(result.status==201){
                this.$router.push({name: 'HomePage'});
            }
            console.log(result);
        }
    }
}
</script>