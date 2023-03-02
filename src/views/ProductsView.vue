<template>
  <section>
    <div data-aos="zoom-in">
      <h2>Products</h2>
      <div class="container-fluid">
        <div class="" id="cards"></div>
        <div class="row">
          <div class="col-3 card g-1 my-2 mx-2" v-for="product in products" :key="product">
            <!-- <img src="" id="img" alt="short-surfboard"> -->
            <!-- <div class="card"> -->
              <img :src="product.imgURL" alt="" class="card-img-top" style="width: 15rem;">
              <div class="card-body">

                <h5 class="name">{{ product.prodName }}</h5>
                <p class="description">{{ product.prodDescription }}</p>
                <p class="price">R{{ product.price }}</p>
                <router-link to="/single"><a href="#" class="btn btn-primary">View more </a></router-link>
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts")
    let products = computed(() => store.state.products);
    return {
      products,
    }
  }
}
</script>

<style scoped>
/* 
  section {
    display: flex;
    justify-content: space-between ;
  } */
/* .cards img {
  width: auto;
}

.container #cards div .card img {
  height: 300px;
} */



.card-body {
  height: 22rem;
}

.row {
  justify-content: center;
  align-items: center;
}
</style>