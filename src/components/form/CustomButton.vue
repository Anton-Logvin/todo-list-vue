<template>
  <button class="button" type="button">
    <img class="icon" :src="imageSrc" alt="">
    {{ title }}
    </button>
</template>

<script>
  export default {
    name: 'CustomButton',
    props: {
      title: {
        type: String,
        default: ''
      },
      imageSrc: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  .button {
    cursor: pointer;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 44px;
    gap: 8px;
    border: none;
    background: #9378FF;
    color: #FFFFFF;
    box-shadow: 0px 100px 80px rgba(147, 120, 255, 0.07), 0px 41.7776px 33.4221px rgba(147, 120, 255, 0.0503198), 0px 22.3363px 17.869px rgba(147, 120, 255, 0.0417275), 0px 12.5216px 10.0172px rgba(147, 120, 255, 0.035), 0px 6.6501px 5.32008px rgba(147, 120, 255, 0.0282725), 0px 2.76726px 2.21381px rgba(147, 120, 255, 0.0196802);
    border-radius: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
</style>