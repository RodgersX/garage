<template>
  <div class="home">
    <Header />
    <v-carousel
    cycle
    class="ma-4"
    height="560"
    hide-delimiter-background
    show-arrows-on-hover>
      <v-carousel-item 
      v-for="(car, index) in cars" 
      :key="index"
      :src="car.src"></v-carousel-item>
    </v-carousel>

    <div class="main-content pa-5">
      <v-row>
        <v-col>
          <v-row>
            <v-card class="mx-auto ma-10" max-width="250">
            <v-img class="white--text align-end" height="200px" :src="require('../assets/carwashimage.jpg')">
              <v-card-title class="card-title">Car Wash</v-card-title>
            </v-img>
            <v-card-text class="blue--text">
              <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, soluta.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" to="/carwash" text>
                More...
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-10" max-width="250">
            <v-img class="white--text align-end" height="200px" :src="require('../assets/autoservice1.jpg')">
              <v-card-title class="card-title">Auto Services</v-card-title>
            </v-img>
            <v-card-text class="blue--text">
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, beatae?</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" to="/auto-service" text>
                More...
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-10" max-width="250">
            <v-img class="white--text align-end" height="200px" :src="require('../assets/barbershop1.png')">
              <v-card-title class="card-title">Barber Shop</v-card-title>
            </v-img>
            <v-card-text class="blue--text">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe?</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" to="/barber" text>
                More...
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-10" max-width="250">
            <v-img class="white--text align-end" height="200px" :src="require('../assets/tailor1.jpg')">
              <v-card-title class="card-title">Tailoring</v-card-title>
            </v-img>
            <v-card-text class="blue--text">
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reiciendis.</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" to="/tailor" text>
                More...
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-10" max-width="250">
            <v-img class="white--text align-end" height="200px" :src="require('../assets/carpetclean.jpg')">
              <v-card-title class="card-title">Carpet Cleaning</v-card-title>
            </v-img>
            <v-card-text class="blue--text">
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, saepe?</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey" to="/carwash" text>
                More...
              </v-btn>
            </v-card-actions>
          </v-card>

          </v-row>
        </v-col>
      </v-row>
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
        cars: [
          {src: 'https://www.itl.cat/pngfile/big/109-1091160_the-alley-bus-garage.jpg'},
          {src: 'https://www.itl.cat/pngfile/big/33-331678_bmw-e30-wallpapers-bmw-e30-in-garage.jpg'},
          {src: 'https://www.itl.cat/pngfile/big/127-1274312_gas-monkey-garageverified-account-gas-monkey-garage-dodge.jpg'},
          {src: 'https://www.itl.cat/pngfile/big/124-1243059_black-and-red-race-car-hd-wallpaper-full.jpg'},
          {src: 'https://www.itl.cat/pngfile/big/63-639963_uncovering-the-modern-side-of-jaipur-rambagh-palace.jpg'}
        ]
      }
    }
  }

</script>

<style scoped>
.card-title {
  color: rgb(202, 80, 80);
}

.mx-auto {
  height: 350px;
}
</style>