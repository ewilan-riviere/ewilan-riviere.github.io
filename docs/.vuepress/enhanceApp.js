// async function is also supported, too
// import './styles/index.scss'
import Vue from 'vue'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import VueCookies from 'vue-cookies'

import './plugins/vue-icons-loader'

export const tokenDetected = () => {
  const token = VueCookies.get('token')

  if (token !== null) {
    return true
  }
  return false
}

Vue.prototype.tokenDetected = tokenDetected
Vue.prototype.$axios = axios
Vue.prototype.$cookies = VueCookies
Vue.prototype.$api = 'https://todo-list-api.git-projects.xyz/api/'

Vue.use(VueClipboard)

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  VueClipboard.config.autoSetContainer = true // add this line
  Vue.use(VueClipboard)
}
