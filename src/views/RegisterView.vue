<template>
  <div class="reg animate__animated animate__zoomInUp">
    <form @submit.prevent="SignUp">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="first"><b>first name</b></label>
      <input type="text" v-model="register.firstName" placeholder="Enter First name" name="first" required>

      <label for="last"><b>Last name</b></label>
      <input type="text" v-model="register.lastName" placeholder="Enter Last name" name="name" required>

      <label for="gender"><b>Gender</b></label>
      <input type="text" v-model="register.gender" placeholder="Enter gender" name="gender" required>

      <label for="email"><b>Email</b></label>
      <input type="text" v-model="register.emailAdd" placeholder="Enter Email" name="email" id="email" required>

      <label for="cellNumber"><b>Cell</b></label>
      <input type="text" v-model="register.cellphoneNum" placeholder="Enter Cellphone Number" name="cellNumber"
        id="cellNumber" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" v-model="register.userPass" placeholder="Enter Password" name="psw" id="psw" required>
      <hr>


      <div class="form-control-wrapper">
        <span class="inline">
          <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
        </span>
      </div>

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <button type="submit" class="registerbtn">Register</button>
    </div>

    <div class="container signin">
      <p>Already have an account? <router-link to="/login"><a href="">Login</a></router-link></p>
    </div>
    <HelloWorld msg="Welcome" />
  </form>
  </div>

</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  data() {
    return {
      register: {
        firstName: '',
        lastName: '',
        gender: '',
        cellphoneNum: '',
        emailAdd: '',
        userPass: '',
        userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
        joinDate: ''
      }
    }
  },
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNum: '',
      emailAdd: '',
      userPass: '',
      userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
      joinDate: ''
    
    };
  
    const store = useStore();
    const signUp = () => {
      store.dispatch("register", payload);
        store.dispatch("fetchUsers");
    }
    const userMsg =
      computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  },

  computed: {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    async SignUp() {
      await this.$store.dispatch('register', this.register);
      this.register.firstName = '';
      this.register.lastName = '';
      this.register.gender = '';
      this.register.cellphoneNum = '';
      this.register.emailAdd = '';
      this.register.userPass = '';
      this.register.joinDate = '';

    }
  }
}

</script>