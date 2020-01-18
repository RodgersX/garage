<template>
  <div class="about">
    <Header />

    <!-- where everything reagrding the body goes -->
    <div class="wrapperDiv">
      <div class="begin">
        <v-parallax dark :src="require('../assets/engine.jpg')">
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <h1>AUTO CAR REPAIR & MECHANIC SHOP</h1>
              <p class="font-weight-thin">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <p  class="display-2 mt-12">The Services Offered</p>
            </v-col>
          </v-row>
        </v-parallax>
      </div>

      <div class="autoservices">
        <v-row>
          <v-col>
            <v-row>
              <v-card
              v-for="(autoservice,i) in autoservices" 
              :key="i"
              class="ma-10 service-cards">
                <v-card-title>{{ autoservice.title }}</v-card-title>
                <v-img class="img" :src="autoservice.src"></v-img>
                <v-card-text>{{ autoservice.text }}</v-card-text>
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
      autoservices: [
        {
          title: 'Wheel Alignment',
          src: require('../assets/Wheel-alignment.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Tyre Changing',
          src: require('../assets/tyre-change.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Oil Change',
          src: require('../assets/car1.jpeg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Tyre Sales',
          src: require('../assets/tyres.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Car Accessories',
          src: require('../assets/accessories.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Suspension Services',
          src: require('../assets/suspension.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Engine Diagnostics',
          src: require('../assets/car-engine.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Air Filter Replacement',
          src: require('../assets/air-filter.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        },
        {
          title: 'Spark Plug Replacement',
          src: require('../assets/plugs.jpg'),
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, expedita beatae.'
        }
      ]
    }
  }
  
}

</script>

<style scoped>
.begin {
  margin: 10px 0px;
}

.service-cards {
  position: relaitve;
  bottom: 5rem;
  left: 3rem;
}

.img {
  height: 200px;
}

.service-cards {
  max-height: 250px;
  background: #ca5050;
}
</style>