<template>
  <div id="app">
    <img id="logo" alt="SpaceX logo" src="./assets/1389029419000-space-x-logo (1).jpg">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://bootswatch.com/4/cyborg/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto");

#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee7e7;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 750px) {
  #logo {
    width: 350px;
    height: auto;
  }
}
</style>
