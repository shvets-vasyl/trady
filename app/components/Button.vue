<template>
  <div class="btn-template" :class="{ transparent }">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  transparent?: boolean
}>()
</script>

<style scoped lang="scss">
.btn-template {
  display: inline-flex;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  line-height: 1.5rem;
  letter-spacing: -0.03rem;
  background: var(--c-yellow);
  color: var(--c-black);
  transition: all 0.4s ease;
}
@include hover {
  .btn-template:hover {
    opacity: 0.5;
  }
}
.btn-template.transparent {
  background: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 0.0625rem 0 rgba(255, 255, 255, 0.5) inset,
    0 0 2px 0 rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(10px);
  color: var(--c-white);
}
</style>
