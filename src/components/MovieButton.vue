<template>
  <button class="button" :class="isSearch ? 'button--active button--search' : isActive ? 'button--active' : ''">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'movie-button',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  methods: {
  }
})
</script>

<style scoped>
.button {
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #424242;
  text-transform: uppercase;
}
.button--active {
  background: #f65261;
}
.button--search {
  font-size: 24px;
  height: 60px;
  margin-left: 20px;
  width: 100%;
  max-width: 220px;
}
</style>
