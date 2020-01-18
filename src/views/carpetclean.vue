<template>
  <div class="about">
    <Header />
    
    <div class="mainContent">
      <div class="header mt-5 mb-5">
        <v-img class="header-image" :src="require('../assets/carpet.jpg')">
          <v-row>
            <v-col>
              <h1>Professional Carpet Cleaning</h1>
              <p>We offer 100% deep cleaning area in just one day</p>
            </v-col>
          </v-row>
        </v-img>
      </div>

      <div class="cleaning">
        <p class="text-center mt-7 headline">Welcome to</p>
        <h1 class="text-center mb-7">Professional Carpet Cleaning</h1>
        <v-row>
          <v-col>
            <v-row>
              <v-card
              flat
              v-for="(service, i) in services"
              :key="i"
              class="service-cards">
                <v-list-item>
                  <v-avatar tile size="130" color="grey">
                    <v-img :src="service.src"></v-img>
                  </v-avatar>
                  <v-list-item-content>
                    <p class="text-center serviceTitle">{{ service.title }}</p>
                    <p class="text-center display-1 grey--text">{{ service.text }}</p>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>

    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      services: [
        {src: require('../assets/carpet.jpg'), title: 'Lorem, Ipsum', text: 'Lorem Ipsum dolor sit amet'},
        {src: require('../assets/carpet1.jpg'), title: 'Lorem, Ipsum', text: 'Lorem Ipsum dolor sit amet'},
        {src: require('../assets/carpet2.jpg'), title: 'Lorem, Ipsum', text: 'Lorem Ipsum dolor sit amet'},
        {src: require('../assets/carpet3.jpg'), title: 'Lorem, Ipsum', text: 'Lorem Ipsum dolor sit amet'}
      ]
    }
  }
  
}

</script>

<style scoped>

.header-image {
  height: 450px;
}

.service-cards {
  margin: 40px 0.2rem;
}

.headline,
.serviceTitle {
  color: #4141df;
}

</style>