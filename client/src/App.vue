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

.card {
  margin: 5px;
}
.card-text {
  font-size: 1.1rem;
  font-weight: 500;
}

.header {
  font-size: 1.3rem;
}

.success {
  color: #38c538;
}

.failed {
  color: red;
}

.btn {
  color: rgb(244, 248, 248);
  font-size: 18px;
  font-weight: 400;
}

.btn:hover {
  background-color: rgb(244, 248, 248);
  color: #2a9fd6;
  text-decoration: none;
}

.routerLink:hover {
  text-decoration: none;
}

a:hover {
  color: rgb(244, 248, 248);
  text-decoration: none;
}

@media only screen and (max-width: 750px) {
  #logo {
    width: 350px;
    height: auto;
  }
}
</style>
