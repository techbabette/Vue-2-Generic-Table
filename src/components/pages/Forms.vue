<template>
    <div>
        <h1>Forms</h1>
        <form>
    <div class="col-6">
       <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <TextField :error="errors[0]" v-model="registrationObj.email" label="Email adress" rowCount="5" id="email" hint="Enter your email address." type="email"/>
        </ValidationProvider>
    </div>
    <div class="col-6">
        <ValidationProvider name="password" :rules="{ regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ }" v-slot="{ errors }">
            <TextField :error="errors[0]" v-model="registrationObj.password" label="Password" type="password" id="password" hint="Minimum 8 characters, one uppercase letter, one number." />
        </ValidationProvider>
        </div>
    <div class="col-6">
       <DropDown error="Greska" v-model="registrationObj.stavkaId" textProperty="name" valueProperty="id" :items="dropDownItems"  hint="Padajuca lista" id="ddl" label="Drop Down list"/>
    </div>
    <div class="col-6">
       <CheckBoxList v-model="registrationObj.selectedSubjects" textProperty="naziv" valueProperty="id" :items="subjects" hint="Odabir predmeta studenta." id="ddl" label="Checkbox list"/>
    </div>
        <button type="button" @click="register" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
//^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
export default {
    name: "FormsPage",
    mounted(){
        //ajax poziv
        // this.dropDownItems = this.callApi().map(function(el) {
        //     return {
        //         text: el.name,
        //         value: el.id
        //     }
        // })

        this.dropDownItems = this.callApi()
    },
    data() {
        return {
            registrationObj: {
                email: "",
                password: "",
                stavkaId: 3,
                selectedSubjects: [1, 3]
            },
            dropDownItems: [],
            email: "",
            password: "",
            subjects: [
                { naziv: "PHP 1", id: 1 },
                { naziv: "PHP 2", id: 2},
                { naziv: "C# 1", id: 3 }
            ]
        }
    },
    methods: {
       register: function() {
            console.log(this.registrationObj)
       },
       callApi() {
        return [
                { name: "Stavka 1", id: 1 },
                { name: "Stavka 2", id: 2 },
                { name: "Stavka 3", id: 3 }
            ]
       } 
    },
    watch: {
    // whenever question changes, this function will run
    email: function (newEmail, oldEmail) {
      console.log(newEmail)
      console.log(oldEmail)
    }
  },
}
</script>