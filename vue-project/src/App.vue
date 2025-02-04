<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

// Fetch instruments from Supabase
const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <div>
    <!-- Instruments List -->
    <h1>Instruments</h1>
    <ul>
      <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
    </ul>

    <!-- Food Components -->
    <h1>Food</h1>
    <food-item />
    <food-item2 />
    <food-item />
    <food-item2 />

    <!-- Personal Profile Component -->
    <h1>Personal Profile</h1>
    <personal-profile />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add any global styles here if needed */
</style>
