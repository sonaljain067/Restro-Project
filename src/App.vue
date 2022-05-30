<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
    components: {
  }
}
</script>

<style lang="scss">
body{
  padding: 0; 
  margin: 0;
}


/* Login/SignUp page style */
.page, form.add, form.update{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        .logo{
            height: 5rem;
            margin: 1rem 0 .5rem;
        }
        h1{
            color: #333;
            margin: 3rem 0 2rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input{
        display: block;
        margin: 1.1rem auto;
        height: 1rem;
        border: 2px solid #4ECB71;
        padding: 0.7rem;
        border-radius: 0.5rem;
        width: 16rem;
        box-shadow: 12px 12px 8px 2px rgba(51,51,51,0.25);
        outline: none; color: #333;
    }
    button{
        border: transparent;
        padding: 1rem; 
        background-color: #4ECB71;
        border-radius: 1.5rem; width: 10rem;
        box-shadow: 8px 8px 8px 2px rgba(51,51,51,0.2);
        cursor: pointer; color: #333; 
        font-weight: 700;
        margin: 2rem auto 1rem;
    }  
    p a{
        text-decoration: none;
        border-bottom: 4px solid #4ECB71;
    }
}

// Header
.header{
    background-color: #333;
    overflow: hidden;
    display: flex;
    justify-content: start;
    width: 100%;
    a{
        color: whitesmoke;
        padding: 1.3rem 2rem;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        margin-right: 0.5rem;
    }
    a:hover{
        background-color: #ddd;
        color: #333;
    }
}


// Homepage design
table{
  margin: .1rem;
}
tr{
  display: flex;
  border: none;
  margin: -1px;
  
}
tr .spann{
  border: 1px solid #4ECB71;
  border-right: none;
}
table,tr,td{
  border: .5px solid #4ECB71;
  border-collapse: collapse;
}

td{
  width: 10rem;
  text-align: center;
  overflow: auto;
  
}
.btn-up, .btn-del{
  border: none;
  padding: .1rem;
  color: #4ECB71;
  background-color: transparent;
  padding: .4rem;
  box-shadow: 1px 1px 5px 2px rgba(51,51,51,.2);
}

@media screen and (max-width: 600px) {
  .home h1{
    font-size: 2rem;
    margin: 0 auto;
  }
  table{
    border: 2px solid black;
    margin: .01rem;
  }
  td{
    width: 5.3rem;
    text-align: center;
  }
  tr{
    width: 320px;
    word-wrap: break-word;
    overflow: visible;
  }

}
</style>
