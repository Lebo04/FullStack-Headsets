<template>
  <div class="reg">
    <form action="/action_page.php" @submit.prevent="signUp"></form>>
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="first"><b>first name</b></label>
      <input type="text" placeholder="Enter First name" name="first" required>

      <label for="last"><b>Last name</b></label>
      <input type="text" placeholder="Enter Last name" name="name" required>

      <label for="gender"><b>Gender</b></label>
      <input type="text" placeholder="Enter gender" name="gender" required>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>

      <label for="cellNumber"><b>Email</b></label>
      <input type="text" placeholder="Enter Cellphone Number" name="cellNumber" id="cellNumber" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>


                  <div class="form-control-wrapper">  
                      <span class="inline">
                        <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                      </span >        
                  </div>
                 
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <button type="submit" class="registerbtn">Register</button>
    </div>

    <div class="container signin">
      <p>Already have an account? <router-link to="/login"><a href="">Login</a></router-link></p>
    </div>
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
      joinDate: ''
    };
    const store = useStore();
    const signUp = () => {
      store.dispatch("register", payload);
      // Refresh
      //   store.dispatch("fetchUsers");
    }
    const userMsg =
      computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>