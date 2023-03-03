<template>
  <div class="admin">
    <h1 class="heading animate__animated animate__zoomInUp">Users</h1>
    <button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      Edit user
    </button>
    <div data-aos="zoom-in">
      <div class="container">
        <table class="table table-hover table-striped">
          <section id="modal" class="admin-bg">
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New user</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <input type="text" class="form-control input" id="name" placeholder="Name">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control input" id="description" placeholder="Description">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control input" id="price" placeholder="Price">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control input" id="quantity" placeholder="Quantity">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control input" id="image-url" placeholder="Image URL">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-edit" id="add-btn">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <thead>
            <tr>
              <th>first name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Role</th>
              <!-- <th>Profile</th> -->

            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>R{{ user.emailAdd }}</td>
              <td>R{{ user.userRole }}</td>
              <!-- <td>R{{ user.userProfile }}</td> -->
              <td>
                <button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal"
                  :data-bs-target="`#exampleModal${user.userID}`">
                  Edit user
                </button>
                <div class="modal fade" :id="`exampleModal${user.userID}`" tabindex="-1"
                  aria-labelledby="exampleModalLabel2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New user</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="mb-3">
                          <input type="text" class="form-control input" id="name" :value="user.firstName">
                        </div>
                        <div class="mb-3">
                          <input type="text" class="form-control input" id="description" :value="user.lastName">
                        </div>
                        <div class="mb-3">
                          <input type="text" class="form-control input" id="price" :value="user.emailAdd">
                        </div>
                        <div class="mb-3">
                          <input type="text" class="form-control input" id="quantity" :value="user.userRole">
                        </div>
                        <!-- <div class="mb-3">
                  <input type="text" class="form-control input" id="image-url" placeholder="Image URL" :value="user.userProfile">
                </div> -->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-edit" id="add-btn">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td><a href="#" class="btn btn-delete">Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <h1 class="heading animate__animated animate__zoomInUp">Products</h1>

    <button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      Create New Product
    </button>
    <div class="container">
      <section id="modal" class="admin-bg">
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <input type="text" class="form-control input" id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" id="description" placeholder="Description">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" id="price" placeholder="Price">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" id="quantity" placeholder="Quantity">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" id="image-url" placeholder="Image URL">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" id="add-btn">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>price</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodDescription }}</td>
            <td>R{{ product.prodQuantity }}</td>
            <td>R{{ product.price }}</td>
            <td><button type="button" class="btn btn-edit mt-4 mb-4" data-bs-toggle="modal"
                :data-bs-target="`#exampleModal${product.id}`">
                Edit user
              </button>
              <div class="modal fade" :id="`exampleModal${product.id}`" tabindex="-1" aria-labelledby="exampleModalLabel2"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New user</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <input type="text" class="form-control input" id="name" :value="product.prodName">
                      </div>
                      <div class="mb-3">
                        <input type="text" class="form-control input" id="description" :value="product.prodDescription">
                      </div>

                      <div class="mb-3">
                        <input type="text" class="form-control input" id="quantity" :value="product.prodQuantity">
                      </div>

                      <div class="mb-3">
                        <input type="text" class="form-control input" id="price" :value="product.price">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-edit" id="add-btn">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td><a href="#" class="btn btn-delete">Delete</a></td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts")
    store.dispatch("fetchUsers")
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);
    return {
      products,
      users
    }

  }
}



</script>

<style scoped>
.btn-edit {
  background-color: rgb(255, 196, 206);
}

.btn-delete {
  background-color: rgb(128, 128, 128);
}</style>