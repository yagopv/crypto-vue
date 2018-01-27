<template>
  <div
    class="alert alert-dismissible fade show text-light"
    :class="`alert-${type} bg-${type}`"
    role="alert">
    <strong>
      {{ title }}
    </strong> {{ errorMessage }}
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="dismiss" >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['title', 'error', 'type', 'dismiss'],
  computed: {
    errorMessage: function() {
      if (this.error && this.error.message) {
        return this.error.message;
      }
      return 'An error has occurred. Please try again or contact support';
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  border-radius: 0;
}
</style>
