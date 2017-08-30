# vue-pop-colorpicker
基于vue-color和element-ui的一个弹出式的颜色选择组件。

支持直接手动更改hex或rgba等颜色值。

支持多种样式的颜色选择器，目前支持：`chrome`, `compact`, `material`, `photoshop`, `sketch`, `slider`, `swatches`。默认为`chrome`。

## 安装

> npm install vue-pop-colorpicker --save

## 使用

### 全局组件

```
import VueColorpicker from 'vue-pop-colorpicker'
Vue.use(VueColorpicker)
```


### 局部组件

```
import { VueColorpicker } from 'vue-pop-colorpicker'

new Vue({
  components: {
    'color-picker': VueColorpicker
  },
  data () {
    return {
      color: '#fff',
    }
  },
  methods: {
    onChange (color) {
      console.log(color)
    }
  }
})

<color-picker v-model="color" @change="onChange"></color-picker>
```

## 其他

- 颜色选择器功能是vue-color中fork的
- popup功能是element-ui中fork的
