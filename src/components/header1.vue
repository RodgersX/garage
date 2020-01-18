<template>
    <div class="header">
        <div class="nav pa-4 d-flex justify-space-between">
            <v-btn color="white" text to="/">
                <h1 class="name">Havila</h1>
            </v-btn>

            <ul class="nav-items d-flex justify-center">
                <li class="nav-list-item pr-10"><a class="nav-list-item--link" :class="[currentPage.includes('home') ? activeClass : '']" href="/home">Home</a></li>
                <li class="nav-list-item pr-10"><a class="nav-list-item--link" :class="[currentPage.includes('carwash') ? activeClass: '']" href="/carwash">Car Wash</a></li>
                <li class="nav-list-item pr-10"><a class="nav-list-item--link" :class="[currentPage.includes('auto-service') ? activeClass: '']" href="/auto-service">Auto Service</a></li>
                <li class="nav-list-item pr-10"><a class="nav-list-item--link" :class="[currentPage.includes('barber') ? activeClass: '']" href="/barber">Barber Shop</a></li>
                <li class="nav-list-item pr-10"><a class="nav-list-item--link" :class="[currentPage.includes('tailor') ? activeClass: '']" href="/tailor">Tailoring</a></li>
                <li class="nav-list-item"><a class="nav-list-item--link" :class="[currentPage.includes('carpetclean') ? activeClass: '']" href="/carpetclean">Carpet Cleaning</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            activeClass: 'active'
        }
    },

    computed: {
        currentPage() {
            return this.$route.path
        }
    }

}
</script>

<style scoped>
.name {
    color: rgb(202, 80, 80)
}
.nav-items {
    list-style: none;
}
.nav-list-item {
    display: inline-block;
}

.nav-list-item--link {
    text-decoration: none;
    color: rgb(76, 71, 71);
    font-size: 20px;
}

.nav-list-item--link:hover,
.nav-list-item--link.active {
    color: #ca5050;
}


</style>