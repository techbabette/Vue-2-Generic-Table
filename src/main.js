import Vue from 'vue'
import App from './App.vue'
import Home from './components/pages/Home'
import Forms from './components/pages/Forms'
import User from './components/pages/User'
import Login from './components/pages/Login'
import VueRouter from 'vue-router'
import TextField from "./components/forms/TextField"
import DropDown from "./components/forms/DropDown"
import CheckBoxList from "./components/forms/CheckBoxList"
import VueI18n from 'vue-i18n'
import messages from "./localization/locale.json"
import { ValidationProvider, extend, localize  } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from './localization/sr.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize({
  en
});

var routes = [
  { path: "/", component: Home },
  { path: "/forms", component: Forms },
  { path: "/users/:username", component: User },
  { path: "/login", component: Login }
]

Vue.component("TextField", TextField)
Vue.component("DropDown", DropDown)
Vue.component("CheckBoxList", CheckBoxList)
Vue.component("ValidationProvider", ValidationProvider)

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter);
Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: 'sr', // set locale
  messages, // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
