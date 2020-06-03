<template>                                                                                                                                                                                                                  
    <div id="app">
        <Navbar></Navbar>
       <!-- <router-link to="/" class="btn btn-outline-success">Home</router-link>
        <router-link to="/notes" class="btn btn-outline-success">Notes </router-link>
        <router-link to="/examples" class="btn btn-outline-success">Examples </router-link>
        <router-link to="/exercises" class="btn btn-outline-success">Exercises </router-link>
        <router-link to="/about" class="btn btn-outline-success">About Us</router-link>-->

        <router-view />
        <div class="footer-copyright text-center py-3 bg-success"> (c) 2020 copyright: Njinga Nkosi</div>


    </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
     float: left;
        display: block;
     color: #f2f2f2;
     text-align: center;
     padding: 14px 16px;
     text-decoration: none;
     font-size: 17px;
     border-bottom: 3px solid transparent;
}

    #nav a.router-link-exact-active {
        color: #42b983;
        border-bottom: 3px solid red;

    }

</style>
<!--<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: justify;
        color: #2c3e50;
    }

    .topnav {
        background-color: #333;
        overflow: hidden;
    }

        /* Style the links inside the navigation bar */
        .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            border-bottom: 3px solid transparent;
        }

            .topnav a:hover {
                border-bottom: 3px solid red;
            }

            .topnav a.active {
                border-bottom: 3px solid red;
            }
</style>-->