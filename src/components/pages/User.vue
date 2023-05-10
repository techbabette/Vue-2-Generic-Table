<template>
<div>
    <h1>{{ welcomeText }}</h1>
</div>    
</template>
<script>
export default {
    name: "UserPage",
    data: function() {
        return {
            text: ""
        }
    },
    computed: {
        welcomeText() {
            var username = this.$route.params.username

            if(username == "petar") {
                return "Welcome petar";
            } 

            return "Neki drugi korisnik.";
        }
    },
    mounted() {
        
    }
}
</script>