<template>
  <div class="about">
    <Header />
    <div class="wrapper d-flex justify-space-between">
        <div class="form">
          <form action="" method="POST" class="pa-5">
            <h1>Book right away</h1>
            <v-row>
              <v-col>
                <v-row>
                  <label for="owner">Name of owner</label>
                  <input v-model="name" type="text" id="owner" class="ml-2 grey lighten-2 input">
                </v-row>

                <v-row class="mt-6">
                  <label for="telephone" class="">Phone number</label>
                  <input v-model="phone" type="number" id="telephone" class="ml-2 grey lighten-2 input">
                </v-row>

                <v-row class="mt-6">
                  <label for="car-type">Car Type</label>
                  <input v-model="carType" type="text" id="car-type" placeholder="e.g. saloon car, lorry" class="ml-2 grey lighten-2 input">
                </v-row>

                <v-row class="mt-6">
                  <label for="wash-type">How you want it washed</label>
                  <input v-model="washType" type="text" id="wash-type" class="ml-2 grey lighten-2 input">
                </v-row>
                
                <v-row class="mt-6">
                  <label for="plate">Number Plate</label>
                  <input v-model="plateNo" type="text" id="plate" placeholder="e.g. KBC 123C" class=" ml-2 grey lighten-2 input">
                </v-row>

                <v-row class="mt-6">
                  <label for="price">Price: </label>
                  <p id="price" class="pl-1">Ksh. {{ price }}</p>
                </v-row>

                <v-row>
                  <p>Payment Method</p>
                  <input v-model="payment" type="radio" name="payment" class="radio">Visa/Credit Card
                  <input v-model="payment" type="radio" name="payment" class="radio">Pay with cash
                  <input v-model="payment" type="radio" name="payment" class="radio">Via M-pesa
                </v-row>
              </v-col>
            </v-row>
            
            <v-btn outlined dark depressed type="submit" color="red lighten-1">Book Now</v-btn>
          </form>
        </div>

        <div class="pa-5">
          <div>
            <h1>The carwash of your choice</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod repellendus cumque hic et ea iste molestiae non veritatis dolor nam, sapiente totam culpa quae autem! Sunt mollitia enim inventore! Ad exercitationem in expedita blanditiis sapiente asperiores molestias consectetur repudiandae vero assumenda nemo dicta consequatur, aliquid perspiciatis magni laudantium!</p>
            <v-divider></v-divider>
            <v-row>
              <v-col>
                <v-row>
                  <v-card width="250" class="ma-1 card">
                    <v-img :src="require('../assets/carwash2.jpg')"></v-img>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis sit earum deserunt assumenda cumque vero nobis dicta quo ullam.</v-card-text>
                  </v-card>

                  <v-card width="250" class="ma-1 card">
                    <v-img :src="require('../assets/autoservice1.jpg')"></v-img>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis sit earum deserunt assumenda cumque vero nobis dicta quo ullam.</v-card-text>
                  </v-card>

                  <v-card width="250" class="ma-1 card">
                    <v-img :src="require('../assets/washmachine.jpg')"></v-img>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis sit earum deserunt assumenda cumque vero nobis dicta quo ullam.</v-card-text>
                  </v-card>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </div>
    </div>

    <div class="services">
      <div class="service1">
        <v-img class="img d-flex align-end" :src="require('../assets/washcar.jpg')">
          <h1 class="white--text">Body wash</h1>
          <div class="d-flex justify-space-around inside-image white--text">
            <v-icon size="50" class color="#4141df">mdi-car</v-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium rerum odio reprehenderit assumenda! Repudiandae delectus vitae obcaecati nesciunt consequuntur!
          </div>
        </v-img>
      </div>

      <div class="service">
        <v-img class="img d-flex align-end" :src="require('../assets/interior.jpg')">
          <h1 class="white--text">Inside wash & vacuuming</h1>
          <div class="d-flex justify-space-around inside-image white--text">
            <v-icon size="50" class color="#4141df">mdi-car</v-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium rerum odio reprehenderit assumenda! Repudiandae delectus vitae obcaecati nesciunt consequuntur!
          </div>
        </v-img>
      </div>

      <div class="mt-10 mb-10 d-flex justify-space-between">
        <div class="service2">
          <v-img class="img d-flex align-end" :src="require('../assets/engine.jpg')">
            <h1 class="white--text">Engine Wash</h1>
            <div class="d-flex justify-space-around inside-image white--text">
              <v-icon size="50" class color="#4141df">mdi-car</v-icon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium rerum odio reprehenderit assumenda! Repudiandae delectus vitae obcaecati nesciunt consequuntur!
            </div>
          </v-img>
        </div>
        
        <div class="service3">
          <v-img class="img d-flex align-end" :src="require('../assets/wax.jpg')">
            <h1 class="white--text">Waxing</h1>
            <div class="d-flex justify-space-around inside-image white--text">
              <v-icon size="50" class color="#4141df">mdi-car</v-icon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium rerum odio reprehenderit assumenda! Repudiandae delectus vitae obcaecati nesciunt consequuntur!
            </div>
          </v-img>
        </div>
      </div>

      <div>
        <v-parallax class="img1" height="200" :src="require('../assets/roofclean.jpg')">
          <h1 class="white--text">Roof Cleaning</h1>
          <div class="d-flex justify-space-around inside-image white--text">
            <v-icon size="50" class color="#4141df">mdi-car</v-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium rerum odio reprehenderit assumenda! Repudiandae delectus vitae obcaecati nesciunt consequuntur!
          </div>
        </v-parallax>
      </div>
    </div>

    <div class="divider mt-10 d-flex justify-center">
      <v-divider class="mt-6 red"></v-divider>
      <div class="more ml-2 mr-2 display-2">More...</div>
      <v-divider class="mt-6 red"></v-divider>
    </div>

    <div class="cards">
      <v-row>
        <v-col>
          <v-row>
            <v-card class="service-card ma-3" v-for="(service,i) in services" :key="i">
              <v-img :src="service.src" class="white--text d-flex align-end">
                <v-card-title>{{ service.title }}</v-card-title>
              </v-img>
              <v-card-subtitle>{{ service.sub }}</v-card-subtitle>
              <v-card-text>{{ service.details }}</v-card-text>
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
      name: '',
      phone: '',
      carType: '',
      washType: '',
      plateNo: '',
      price: 200,
      Payment: '',

      services: [
        {
          src: '/headlights1.jpg',
          title: 'Buffing',
          sub: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam facilis pariatur sed vero soluta suscipit possimus cumque dolor. Atque.'
        },
        {
          src: '/headlights.jpg',
          title: 'Headlight Buffing',
          sub: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam facilis pariatur sed vero soluta suscipit possimus cumque dolor. Atque.'
        },
        {
          src: '/window.jpg',
          title: 'Calcium Removing from Windows (Water Marks)',
          sub: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam facilis pariatur sed vero soluta suscipit possimus cumque dolor. Atque.'
        },
        {
          src: '/upholstery.jpeg',
          title: 'Upholstery Cleaning',
          sub: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam facilis pariatur sed vero soluta suscipit possimus cumque dolor. Atque.'
        },
        {
          src: '/detailclean.jpg',
          title: 'Detailed Car Cleaning',
          sub: 'involves removal of seats and everything in the car',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque numquam facilis pariatur sed vero soluta suscipit possimus cumque dolor. Atque.'
        },

      ]
    }

  }
  
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Gelasio|Indie+Flower&display=swap');

.form {
  align-items: center;
  margin: 10px 5px;
  height: 600px;
  border: 1px solid #ca5050;
  border-radius: 5px;
  min-width: 40%;
}
.input {
  padding: 3px;
  border-radius: 3px;
}

.radio {
  margin: 6px;
}

.card {
  background: #ca5050;
}

.img {
  height: 20rem;
  width: 60%;
  margin: 3px 0px;
  border-radius: 10px;
  padding: 3%;
}

.img1 {
  height: 25rem;
  margin: 3px 10px;
  padding: 3%;
}

.inside-image {
  align-items: flex-end;
}

.service {
  position: relative;
  left: 40%;
  margin: 1rem 0px;
}

.service1 {
  position: relative;
  left: -2%;
  margin: 1rem 0px;
}

.service2 {
  width: 70%;
  position: relative;
  left: -3%;
}

.service3 {
  width: 70%;
  position: relative;
  right: 12%;
}

.service-card {
  width: 20%;
  max-height: 370px;
}

.more {
  font-family: 'Gelasio', serif;
  font-family: 'Indie Flower', cursive;
}
</style>