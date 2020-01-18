<template>
    <div class="dashboard">
        <Header />

        <div class="sidenav">
            <a href="#dashboard">Dashboard</a>
            <a href="#data-table">Data Analysis</a>
            <a href="#about">About Us</a>
        </div>

        <div class="mainContent">
            <div class="sparklines" id="dashboard">
                <v-row>
                    <v-col>
                        <v-row>
                            <!-- cars washed over the week -->
                            <v-card class="mt-4 mx-auto card">
                                <v-sheet
                                class="v-sheet--offset mx-auto"
                                color="#4141df"
                                elevation="12"
                                max-width="calc(100% - 40px)">
                                    <v-sparkline
                                    color="white"
                                    line-width="2"
                                    padding="16"
                                    :labels="labels"
                                    :value="carwash"></v-sparkline>
                                </v-sheet>

                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Car Wash</div>
                                    <div class="subheading font-weight-light grey--text">Cars washed everyday</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">last car cleared 26 minutes ago</span>
                                </v-card-text>
                            </v-card>

                            <!-- autoservices statistics -->
                            <v-card class="mt-4 mx-auto card">
                                <v-sheet
                                class="v-sheet--offset mx-auto"
                                color="#4141df"
                                elevation="12"
                                max-width="calc(100% - 40px)">
                                    <v-sparkline
                                    color="white"
                                    line-width="2"
                                    padding="16"
                                    :labels="labels"
                                    :value="autoservice"></v-sparkline>
                                </v-sheet>

                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Auto Service</div>
                                    <div class="subheading font-weight-light grey--text">Cars booked online</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">last booking 3 hours ago</span>
                                </v-card-text>
                            </v-card>

                            <!-- carpet statistics -->
                            <v-card class="mt-12 mx-auto card">
                                <v-sheet
                                class="v-sheet--offset mx-auto"
                                color="#4141df"
                                elevation="12"
                                max-width="calc(100% - 40px)">
                                    <v-sparkline
                                    color="white"
                                    line-width="2"
                                    padding="16"
                                    :labels="labels"
                                    :value="carpets"></v-sparkline>
                                </v-sheet>

                                <v-card-text class="pt-0">
                                    <div class="title font-weight-light mb-2">Carpets Cleaned</div>
                                    <div class="subheading font-weight-light grey--text">Carpets that were cleaned</div>
                                    <v-divider class="my-2"></v-divider>
                                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                                    <span class="caption grey--text font-weight-light">last delivered 27 minutes ago</span>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </div>

            <div class="data-table" id="data-table">
                <v-card class="mt-12 mb-12">
                    <v-card-title>Clients In Queue
                        <v-spacer></v-spacer>
                        <v-text-field
                        v-model="search"
                        append-icon="MDI-search"
                        label="search"
                        single-line
                        hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="clients"
                    :search="search"
                    hide-default-footer></v-data-table>   
                </v-card>
            </div>

            <div class="more-info">

            </div>
        </div>

        <!-- sparklines for the data about different pages
        maybe use tabs to display tables if necessary -->
    </div>
</template>

<script>
import Header from '@/components/header1.vue'

export default {
    components: {
        Header
    },

    data() {
        return {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
            carwash: [200, 605, 410, 390, 310, 460, 250],
            autoservice: [20, 30, 12, 34, 56, 9, 45],
            barbershop: [12, 4, 17, 29, 23, 14, 10],
            carpets: [12, 30, 23, 18, 8, 24, 29],

            search: '',
            headers: [
                {text: 'Name of Person', align: 'left', sortable:false, value: 'name'},
                {text: 'Item Code', sortable:false, value: 'code'},
                {text: 'Time In', sortable:false, value: 'checkin'},
                {text: 'Time Out', sortable:false,  value: 'checkout'},
                {text: 'Ksh', sortable:false, value: 'ksh'},
            ],

            clients: [
                {name: 'Lorem Ipsum', code: 'CW-128', checkin: '0913hrs', checkout: '0945hrs', ksh: '400.00'},
                {name: 'Nemo, provident!', code: 'AS-675', checkin: '1253hrs', checkout: '1928hrs', ksh: '2300.00'},
                {name: 'consectetur adipisicing', code: 'CC-876', checkin: '0900hrs', checkout: '1349hrs', ksh: '1400.00'},
                {name: 'ipsum dolor', code: 'AS-128', checkin: '1003hrs', checkout: '1051hrs', ksh: '800.00'},
                {name: 'sit amet', code: 'CW-120', checkin: '1335hrs', checkout: '1410hrs', ksh: '1000.00'},
                {name: 'elit. Nemo', code: 'CC-134', checkin: '1102hrs', checkout: '1608hrs', ksh: '1300.00'},
                {name: 'excepturi iure', code: 'CW-001', checkin: '1718hrs', checkout: '1800hrs', ksh: '200.00'},
                {name: 'Ipsa mollitia', code: 'AS-780', checkin: '1607hrs', checkout: '1700hrs', ksh: '3045.00'}
            ]
        }
    }
}
</script>

<style scoped>

.sidenav {
    height: 100%;
    width: 260px;
    position: fixed;
    z-index: 1;
    background: #f1acac;
    overflow-x: hidden;
    padding: 20px;
}

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
}

.sidenav a:hover {
    color: whitesmoke;
}

.mainContent {
    margin-left: 300px;
    margin-top: 1%;
    padding: 0px 10px;
}

.card {
    width: 40%;
}

.v-sheet--offset {
    position: relative;
    top: -24px;
}

</style>