<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body::-webkit-scrollbar{
  background: #EAECF2;
  border-radius: 0px;
  width: 0.7vh;
}

body::-webkit-scrollbar-thumb {
  background: #2F68B5;
  border-radius: 0px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
    padding: 0;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    background-color: #EAECF2;
    transition: 0.5s ease all
}

button.primary {
    border-radius: 12px;
    color: #EAECF2;
    width: 10vh;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    transition: 0.5s ease all;
    height: 40px;
    background-color: #2F68B5;
    border: none;
}

button.primary:hover {
    box-shadow: 0px 4px 30px rgba(47, 104, 181, 0.3)
}

button.success {
    border: none;
    width: 10vh;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    transition: 0.5s ease all;
    height: 40px;
    border-radius: 12px;
    color: #EAECF2;
    background-color: #00DB8C;
}

button.failure {
  border: none;
  width: 10vh;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  transition: 0.5s ease all;
  height: 40px;
  border-radius: 12px;
  color: #EAECF2;
  background-color: #F0202D;
}
button.failure:hover{
  box-shadow: 0px 4px 30px rgba(240, 32, 45, 0.3)
}

button.success:hover {
    box-shadow: 0px 4px 30px rgba(0, 219, 140, 0.3)
}
a{
  text-decoration: none;
  color:inherit
}

.primary-bg {
    background-color: #2F68B5 !important;
    color: #FFFFFF !important;
    transition: 0.5s ease all
}

.card-style {
    background-color: #FFFFFF !important;
    border-radius: 12px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease all
}

.card-style:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.20);
    transition: 0.5s ease all
}

.card-holder {
    margin: 15px;
    margin-top: 8vh;
    display: flex
}
</style>
