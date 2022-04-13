import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'

// solids
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/*
next line : terkait "FA icon flickering"
di nuxt.config.js/css[]
*/
config.autoAddCss = false

library.add(
  faShoppingBag,
  faBars,
  faChevronRight,
  faChevronDown,
  faHeart,
  faSpinner
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
