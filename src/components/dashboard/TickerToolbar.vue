
<template>
    <nav class="nav nav-pills nav-justified mb-3">
      <a class="nav-link" href="#" :class="{ active: isTreeviewVisible}" @click="toggleTreeviewVisibility(true)">Tree</a>
      <a class="nav-link" href="#" :class="{ active: !isTreeviewVisible}" @click="toggleTreeviewVisibility(false)">List</a>
    </nav>
</template>


<script>
export default {
  name: 'TickerToolbar',
  props: ['isTreeviewVisible', 'toggleTreeviewVisibility']
};
</script>
