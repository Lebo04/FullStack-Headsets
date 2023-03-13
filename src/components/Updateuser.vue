<template>
    <h1>Edit</h1>
    <form>
        <input type="text" class="form-control text-center w-75 mx-auto mb-2">
        <input type="text" class="form-control text-center w-75 mx-auto mb-2">
        <input type="text" class="form-control text-center w-75 mx-auto mb-2">
        <input type="number" class="form-control text-center w-75 mx-auto mb-2">
        <input type="email" class="form-control text-center w-75 mx-auto mb-2">
        <input type="text" class="form-control text-center w-75 mx-auto mb-2">
        <input type="text" class="form-control text-center w-75 mx-auto mb-2">
<div class="btn-group">
    <button type="submit" class="btn btn-primary">ok</button>
    <button type="cancel" class="btn btn-danger">cancel</button>

</div>
    </form>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
import router from '@/router';

export default{
    setup() {
        const store = useStore();
        const getLocation =()=>{
            let locationArr = location.pathname.split('/'); 
            let locationID = locationArr[locationArr.length-1];
            return locationID
        }
        let payload = {
            userID: getLocation(),
            firstName: '',
            lastName: '',
            gender: '',
            CellphoneNumber:'',
            Email: '',
            Password: '',
            UserProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
            JoinDate: ''
        };
        store.dispatch("fetchUserById", getLocation())
        // console.log(getLocation())
        const edit = () => {
            store.dispatch("updateUser", payload)
            router.push({name:'admin'})
            store.dispatch("fetchUsers");
        }
        const user = computed(()=>store.state.user)
        return{
            edit,
            user,
            payload
        } 
    }
}
</script>

