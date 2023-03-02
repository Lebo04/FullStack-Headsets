<template>
    <section>
    <div data-aos="zoom-in">
      <h2>Products</h2>
      <div class="container-fluid">
        <div class="" id="cards"></div>
        <div class="row">
            <div class="col-3 card g-1 my-2 mx-2" v-for="product in products" :key="product">
              <!-- <img src="" id="img" alt="short-surfboard"> -->
              <div class="card-body">
                <h5 class="name">{{ product.prodName }}</h5>
                <p class="description">{{ product.prodDescription }}</p>
                <p class="price">R{{ product.price }}</p>
                <a href="#" class="btn btn-primary">Add to checkout </a>
              </div>
            </div>
        <!-- <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>R{{ product.price }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
    </div>
  </section>
  </template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts")
    let products = computed(() => store.state.products);
    return{
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

.row{
  justify-content: center;
  align-items: center;
}
</style>