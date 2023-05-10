<template>
<html lang="en">
  <Head/>
  <body>
    
<div class="container">
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="#">{{ $t("nav.subscribe") }}</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">{{ $t("nav.logout") }}</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="link-secondary" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        <select v-model="lang">
          <option :value="l.value" v-for="l in languages" :key="l.value"> {{ l.text }}</option>
        </select>
      </div>
    </div>
  </header>

  <Nav/>
</div>

<main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">{{ $t("message") }}</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div>

  <router-view></router-view>


</main>

<footer class="blog-footer">
  <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
  <p>
    <a href="#">Back to top</a>
  </p>
</footer>


    
  </body>
</html>

</template>

<script>
import Head from "./components/Head"
import Nav from "./components/Nav"
export default {
  name: 'App',
  data: function() {
    return {
      firstName: "Petar",
      lastName: "Peric",
      languages: [
        { text: "Srpski", value: "sr" }, 
        { text: "ジャパスキー", value: "ja"}, 
        { text: "English", value: "en"}
      ],
      lang: "sr",
      posts: [
        {
          isFeatured: true,
          content: "Sadrzaj 123",
          title: "Naslov objave",
          tag: "World",
          dateStr: "Nov 12"
        },
        {
          isFeatured: false,
          content: "Sadrzaj 123456",
          title: "Naslov objave 2",
          tag: "Test",
          dateStr: "Nov 13"
        }
      ]
    }
  },
  components: {
    Head,
    Nav
  },
  mounted() {
    var language = localStorage.getItem("locale")

    if(language) {
      this.$i18n.locale = language
      this.lang = language
    }
  },
  watch: {
    lang: function() {
      this.$i18n.locale = this.lang
      localStorage.setItem("locale", this.lang)
    }
  }
}
</script>

<style>


.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
