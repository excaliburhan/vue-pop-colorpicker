/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:06:39
 * @modify date 2017-08-30 07:55:19
 * @desc [入口文件]
*/

import VueColorpicker from './vue-colorpicker.vue'

const install = (Vue) => {
  Vue.component('vue-colorpicker', VueColorpicker)
}

export default {
  install,
}
export {
  VueColorpicker,
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
