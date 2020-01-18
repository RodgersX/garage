<template>
  <div class="about">
    <Header />

    <div class="mainContent">
      <div class="parallax">
        <v-parallax 
        class="mt-7" 
        height="500" 
        :src="require('../assets/haircut.jpg')">
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <h1>Havila's Barber Shop</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <v-icon dark class="mdi" size="100">mdi-chevron-down</v-icon>
            </v-col>
          </v-row>
        </v-parallax>
      </div>

      <div class="services ma-10">
        <h1 class="text-center">Our Services</h1>
        <v-row>
          <v-col>
            <v-row>
              <v-card class="ma-3" flat width="400" v-for="(item, i) in items" :key="i">
                <v-img :src="item.img"></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>{{ item.text }}</v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <div class="workplace ma-10">
        <h1 class="text-center mb-6">Our Workplace</h1>
        <v-carousel 
        cycle 
        height="500"
        show-arrows-on-hover
        hide-delimiter-background>
          <v-carousel-item
          v-for="(shop, i) in shops"
          :key="i"
          :src="shop.src"
          ></v-carousel-item>
        </v-carousel>
      </div>

      <div class="team ma-10">
        <h1 class="text-center">Our Team</h1>
        <v-row>
          <v-col>
            <v-row>
              <v-card 
              flat 
              v-for="(member, i) in team" 
              :key="i" 
              class="people">
                <v-list-item two-line>
                  <v-list-item-avatar
                  tile
                  size="200"
                  color="grey">
                    <v-img :src="member.src"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ member.title }}</v-list-item-title>
                    <v-list-item-subtitle>Lorem, ipsum dolor.</v-list-item-subtitle>
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
      items: [
        {
          img: require('../assets/hair.jpg'),
          title: 'Haircut',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/beard.jpg'),
          title: 'Beard Cut',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/dreads.jpg'),
          title: 'Dreadlocks Waxing & Styling',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/dye.png'),
          title: 'Dye application',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/massage.jpg'),
          title: 'Head & Neck Massage',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/mani.jpg'),
          title: 'Manicure',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
        {
          img: require('../assets/pedi.jpg'),
          title: 'Pedicure',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, rem!'
        },
      ],

      shops: [
        {src: require('../assets/shop.jpg')},
        {src: require('../assets/shop1.jpg')},
        {src: require('../assets/shop2.jpg')}
      ],

      team: [
        {src: require('../assets/barber.jpg'), title: 'Lorem'},
        {src: require('../assets/barber1.jpg'), title: 'Lorem'},
        {src: require('../assets/barber2.jpg'), title: 'Lorem'},
        {src: require('../assets/barber3.jpg'), title: 'Lorem'}
      ]
    }
  }
}

</script>

<style scoped>

.mdi {
  position: absolute;
  bottom: 2%;
  left: 47%;
}

.people {
  width: 40%;
}
</style>