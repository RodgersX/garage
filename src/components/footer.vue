<template>
    <div class="footer">
        <div class="footmark grey--text" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate culpa distinctio.</div>
        <div class="bar"></div>
        <div class="icons d-flex justify-center mb-10">
            <v-btn icon>
                <v-icon color="#4141df" class="pa-2">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="#4141df" class="pa-2">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="#4141df" class="pa-2">mdi-google-plus</v-icon>
            </v-btn>
        </div>
        <div class="mt-2 pa-2 d-flex justify-space-around align-end">
            <p>copyright {{ new Date().getFullYear() }} | Privacy | Policy</p>
            <p>Designed by Lorem, ipsum dolor.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>


<style scoped>
.bar {
    width: 5%;
    border-bottom: 3px solid #4141df;
    position: relative;
    left: 47%;
    margin: 30px 0px;
}
</style>