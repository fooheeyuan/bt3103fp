<template>
  <div class="headerStyle">
        <nav>
          <h1>{{ title }}</h1>
          <ul>
            <li><router-link to="/UserProfile" exact>My Profile</router-link></li>
            <li><router-link to="/CreateGroup" exact>Create Group</router-link></li>
            <li><router-link to="/GrpFinder" exact>Find Your Group</router-link></li>
            <li><router-link to="/visuals" exact>Analytics</router-link></li>
            <li><router-link to="/AboutUs" exact>About Us</router-link></li>

          </ul>
        </nav>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Grocery List'
        }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:6px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory;
    background: rgb(122, 63, 100);
    font-size: 30px;
}
nav{
    background: rgb(122, 63, 100);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    
    display: inline-block;
    margin: 0 10px;
}
li a{
  
  font-size: 18px;
  color:ivory;
    
}
</style>