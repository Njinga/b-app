<template>
    <div id="app" class="border border-success">
        <Navbar></Navbar>
        <router-view />
        <Footer></Footer>        
    </div>
</template>

<!--<style>
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
</style>-->
