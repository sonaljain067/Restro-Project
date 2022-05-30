<template>
    <HeaderComp/>
    <h1>Welcome to Update the Restaurant</h1>
    <form class="update">
        <h1>Update</h1>
        <input type="text" v-model="restaurant.name" placeholder="Name" />
        <input type="text" v-model="restaurant.address" placeholder="Address"/>
        <input type="text" v-model="restaurant.contact" placeholder="Contact">
        <button type="button" @click="updRes">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
    name: 'UpdRes',
    components: { HeaderComp },
    data(){
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    async mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }
        let result=await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        // console.log(result.data);
        this.restaurant=result.data;
    },
    methods: {
        async updRes(){
            let res=await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.log(res);
            if(res.status==200){
                this.$router.push({name: 'HomePage'});
            }
        }
    }
}
</script>

<style>

</style>