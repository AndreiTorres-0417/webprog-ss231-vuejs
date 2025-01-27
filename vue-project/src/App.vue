<template>
  <div id="app">
    <h1>Food</h1>
    <food-item />
    <food-item />
    <food-item />
  </div>
</template>

<script>
import FoodItem from './components/FoodItem.vue';

export default {
  components: {
    FoodItem
  }
};
</script>

<style>
</style>
