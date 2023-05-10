<template>
    <div>
        <h1>Forms</h1>
        <form>
    <div class="col-6">
       <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <TextField :error="errors[0]" v-model="email" label="Email adress" rowCount="5" id="email" hint="Enter your email address." type="email"/>
        </ValidationProvider>
    </div>
    <div class="col-6">
        <ValidationProvider name="password" :rules="required" v-slot="{ errors }">
            <TextField :error="errors[0]" v-model="password"  label="Password" type="password" id="password" hint="Minimum 8 characters, one uppercase letter, one number." />
        </ValidationProvider>
        </div>
        <button type="button" @click="login" class="btn btn-primary">Login</button>
</form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LoginPage",
    mounted(){
        

        
    },
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
       login: function() {
           //email, password
           let loginObj = {
                email: this.email,
                password: this.password
           }
           axios.post("http://localhost:5101/api/token", loginObj)
                .then(function(response) {
                    localStorage.setItem("token", response.data.token)
                }).catch(function(response) {
                    console.log(response)
                }) 
       },
       
    }
}
</script>