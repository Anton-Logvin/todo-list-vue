<template>
  <input
    class="custom-input"
    v-model="inputValue"
    :placeholder="placeholder"
    :style="`width: ${fill ? '100%': width + 'px'}`"
    fill
  >
</template>

<script>

export default {
  name: 'CustomInput',

  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "_"
    },
    width: {
      type: [String, Number],
      default: 100
    },
    fill: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
}

</script>

<style lang="scss">
.custom-input {
  display: block;
  height: 32px;
  outline: none;
  transition: .3 ease;
  border-radius: 24px;
  padding-left: 16px;
  border-color: rgb(156, 156, 156);
  
  &:focus {
    box-shadow: 0px 0px 8px gray;
  }
}
</style>