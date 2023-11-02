import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'virtual:uno.css'

import { Icon } from '@iconify/vue';

export default {
  install(app) {
    app.component('Icon', Icon)
  }
}