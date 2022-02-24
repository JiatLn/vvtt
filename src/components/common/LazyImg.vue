<template>
  <img ref="imgRef" :class="props.class" src="../../assets/image/default-img.png" alt="" />
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  const props = defineProps<{
    src: string;
    class?: string | string[];
  }>();

  const imgRef = ref<HTMLImageElement>(null!);

  let intersectionObserver: IntersectionObserver;
  onMounted(() => {
    intersectionObserver = new IntersectionObserver((entries) => {
      // If intersectionRatio is 0, the target is out of view
      // and we do not need to do anything.
      if (entries[0].intersectionRatio <= 0) return;
      let imgEl = entries[0].target as HTMLImageElement;
      imgEl.src = props.src;
      intersectionObserver.unobserve(imgRef.value);
      intersectionObserver.disconnect();
    });
    // start observing
    intersectionObserver.observe(imgRef.value);
  });

  onUnmounted(() => {
    intersectionObserver && intersectionObserver.disconnect();
  });
</script>

<style scoped lang="scss"></style>
