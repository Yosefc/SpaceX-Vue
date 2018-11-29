<template>
  <div id="app">
    <router-link to="/"><img id="logo" alt="SpaceX logo" src="./assets/SpaceX_logo.jpg"></router-link>
    <p id="developer">Developed by <a href="https://github.com/yosefc">Yosef Connors</a></p>
    <search-component/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent";

export default {
  name: "app",
  components: {
    SearchComponent
  }
};
</script>

<style>
@import url("https://bootswatch.com/4/cyborg/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto");

#logo {
  padding: 5px 0px 10px 0px;
}

#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee7e7;
}

.card {
  padding-top: 5px;
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

#developer {
  font-size: 1.3rem;
  text-decoration: none;
}

#developer a {
  color: #eee7e7;
}

#developer a:hover {
  color: #2a9fd6;
}

@media only screen and (max-width: 750px) {
  #logo {
    width: 350px;
    height: auto;
  }
}
</style>
