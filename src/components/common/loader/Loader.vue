<template>
  <div v-if="isLoading" class="loader-wrapper">
    <div class="loader">
      <i>
        <font-awesome-icon icon="sync" size="2x" spin style="color: #FFF" />
      </i>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'Loader',
  props: ['isLoading'],
  components: { FontAwesomeIcon }
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 100%;
  z-index: 400;
  opacity: 0.5;
  .loader {
    display: table;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    i {
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
}
</style>
