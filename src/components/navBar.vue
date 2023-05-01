<template>
    <div class="nav-bar primary-bg">
        <font-awesome-icon class="menu-icon" icon="fa-solid fa-bars fa-lg" />
        <router-link to="/" class="compose-logo">

            <!-- <div class="compose-logo"> -->
            <h1>
                Goulash
            </h1>
            <h1 class="dot">
                .
            </h1>
            <h1>
                check
            </h1>
        <!-- </div> -->
        </router-link>
        

    </div>
</template>

<script>
export default {
    name: "Navbar",

}

</script>

<style scoped>
.nav-bar {
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: start;
}

.menu-icon {
    height: 3.5vh;
    width: 3.5vh;
    display: flex;
    margin: 10px;


}

.compose-logo {
    display: flex;
    flex-direction: row;
    height: 5vh;
    margin: 1vh;
    margin-left: auto;
    margin-right: 45%
}

h1 {
    height: 100%;
    margin: 0 !important
}

.dot {
    color: #F0202D;
    font-size: 31px;
    margin-left: 3px !important;
    margin-right: 3px !important
}
</style>