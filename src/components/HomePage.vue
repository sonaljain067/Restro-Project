<template>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    
    <HeaderComp />
    <div class="home">
        <img class="logo" src="../assets/restro-image.png"/>
        <h1>Hello {{name}}, welcome to home page</h1>
        <table border="1">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Address</td>
                <td>Contact</td>
                <td colspan="2" class="spann">Actions</td> 
            </tr>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.contact}}</td>
                <td>
                    <a class="btn btn-md">
                        <router-link :to=" '/upd-res/'+item.id ">
                        <button class="btn-up"><span class="glyphicon glyphicon-pencil"></span></button>
                        </router-link>
                        <!-- <button class="btn-up"><span class="glyphicon glyphicon-pencil"></span> Update</router-link></button> -->
                    </a>
                </td>
                <td>
                    <a class="btn btn-md">
                         <button class="btn-del" @click="delRes(item.id)"> <span class="glyphicon glyphicon-trash"></span></button>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>



<script>

 
    
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    data(){
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        HeaderComp,
    },
    methods: {
        async loadData(){
            let res=await axios.get("http://localhost:3000/restaurants")
            this.restaurants=res.data;
        },
        async delRes(id){
            console.log(id);
            let res=await axios.delete(`http://localhost:3000/restaurants/${id}`);
            if(res.status==200) 
                this.loadData()
        }
    },
    // if user not yet signed up/logged in, can't enter home page but only redirected to signup page
    async mounted(){
        let user=localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
        this.loadData();
    },
    
}
</script>

<style lang="scss">
.home{
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    .logo{
        height: 5rem;
        margin: 3rem 0 .5rem;
    }
}


</style>