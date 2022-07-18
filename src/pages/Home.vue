<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>

<template>
  <div h-full w-full flex="c col">
    <div flex items-start gap-2>
      <TheBox title="UnoCSS">
        <div text-brand-primary>
          Hello, <span font-semibold>VVTT</span>
        </div>
      </TheBox>
      <TheBox title="Vue Router">
        <div flex justify-between space-x-4>
          <router-link btn :to="{ name: 'Login' }">
            Login
          </router-link>
          <router-link btn :to="{ name: 'Register' }">
            Register
          </router-link>
        </div>
      </TheBox>
      <TheBox title="Iconify">
        <div flex-c gap-12px text-xl>
          <div i-flat-color-icons:home />
          <a i-akar-icons:github-fill cursor-pointer color-gray-600 hover:color-brand-primary href="https://github.com/JiatLn/vvtt" target="_blank" />
        </div>
      </TheBox>
      <TheBox title="Pinia">
        <div>
          isLogin: <span font-bold>{{ userStore.isLogin }}</span>
        </div>
      </TheBox>
      <TheBox title="TSX Support" />
    </div>
    <p mt-8 text-gray-400>
      This is a demo page, you can clear it and start coding~ :)
    </p>
  </div>
</template>

<style lang="less" scoped>
</style>
