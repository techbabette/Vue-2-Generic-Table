<template>
    <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
    <router-link v-for="l in links" :key="l.path" :to="l.path">{{ l.text }}</router-link> 
    </nav>
  </div>
</template>

<script>
export default {
    name: "NavComponent",
    data: function() {
        return {
            links: [
              { path: "/", text: "Početna" },
              { path: "/forms", text: "Rad sa formama"},
              { path: "/users/petar", text: "Korisnik" }
            ]
        }
    }
}
</script>