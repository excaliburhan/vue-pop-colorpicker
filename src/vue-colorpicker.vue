<template>
<div class='vue-colorpicker' ref="color" @click="showPicker = !showPicker" v-clickoutside="hide">
  <span class="vue-colorpicker-btn" :style="btnStyle"></span>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div class="vue-colorpicker-panel" ref="dropdown" v-show="showPicker">
      <component :is="pickerType" v-model="colors" @input="changeColor"></component>
      <!-- <chrome-picker v-model="colors" @input="changeColor"></chrome-picker> -->
    </div>
  </transition>
</div>
</template>

<script>
import tinycolor from 'tinycolor2'
import { Chrome, Compact, Material, Photoshop, Sketch, Slider, Swatches } from 'vue-color'
import Clickoutside from 'element-ui/lib/utils/clickoutside'
import Popper from 'element-ui/lib/utils/vue-popper'

export default {
  name: 'vue-colorpicker',
  components: {
    'chrome-picker': Chrome,
    'compact-picker': Compact,
    'material-picker': Material,
    'photoshop-picker': Photoshop,
    'sketch-picker': Sketch,
    'slider-picker': Slider,
    'swatches-picker': Swatches,
  },
  directives: { Clickoutside },
  mixins: [Popper],
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'chrome',
    },
  },
  data () {
    return {
      showPicker: false,
      colors: {
        hex: '#FFFFFF',
        a: 1
      },
      colorValue: '#FFFFFF'
    }
  },
  computed: {
    pickerType () {
      return this.type + '-picker'
    },
    isTransparent () {
      return this.colors.a === 0
    },
    btnStyle () {
      if (this.isTransparent) {
        return {
          background: '#eee',
          backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%,rgba(0,0,0,.25)0), linear-gradient(45deg, rgba(0,0,0,.25)25%,transparent 0, transparent 75%,rgba(0,0,0,.25)0)',
          backgroundPosition: '0 0, 11px 11px',
          backgroundSize: '22px 22px'
        }
      }
      return {
        background: this.colorValue
      }
    },
  },
  watch: {
    showPicker (newVal) {
      this.updatePopper()
    },
    value (val, oldVal) {
      // 当相同组件切换时候，保证colors与显示一致
      if (val !== oldVal) {
        this.getColorObj(val)
      }
    }
  },

  methods: {
    hide () {
      this.showPicker = false
    },
    changeColor (data) {
      this.colorValue = tinycolor(data.rgba).toRgbString()
      this.$emit('input', this.colorValue)
      this.$emit('change', this.colorValue)
    },
    // 获取/更改data中的颜色对象
    getColorObj (color) {
      if (!color) return
      const colorObj = tinycolor(color || 'transparent')
      if (!color || color === 'transparent') {
        this.colors = {
          hex: '#FFFFFF',
          hsl: { h: 0, s: 0, l: 1, a: 0 },
          hsv: { h: 0, s: 0, v: 1, a: 0 },
          rgba: { r: 255, g: 255, b: 255, a: 0 },
          a: 0
        }
      } else {
        this.colors = {
          hex: colorObj.toHexString(),
          hsl: colorObj.toHsl(),
          hsv: colorObj.toHsv(),
          rgba: colorObj.toRgb(),
          a: colorObj.getAlpha()
        }
      }
      this.colorValue = colorObj.toRgbString()
    }
  },

  mounted () {
    this.getColorObj(this.value)
    this.popperElm = this.$refs.dropdown
    this.referenceElm = this.$refs.color
  }
}
</script>

<style lang="scss" scoped>
.vue-colorpicker {
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  padding: 6px;
  border: 1px solid #bfcbd9;
  border-radius: 4px;
  font-size: 0;
  cursor: pointer;
  &-btn {
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid #666;
    background: #FFFFFF;
  }
}
</style>
