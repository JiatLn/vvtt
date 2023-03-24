<script setup lang="ts">
import logo from '@/assets/logo.png'

function onLogin() {
  login({ token: 'KFCVME50' })
}
</script>

<template>
  <div h-100vh w-full flex="c col">
    <LazyImg w-80px h-80px :src="logo" />
    <div flex items-start gap-2>
      <TheBox title="UnoCSS">
        <div text-brand-primary>
          Hello, <span font-semibold>VVTT</span>
        </div>
      </TheBox>
      <TheBox title="Vue Router">
        <div flex="c col" space-y-2>
          <router-link btn :to="{ name: 'Login' }">
            /login
          </router-link>
          <router-link btn :to="{ name: 'Register' }">
            /register
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
        <div flex="c col" space-y-2>
          <div>
            isLogin: <span font-bold>{{ isLogin }}</span>
          </div>
          <button v-if="isLogin" btn @click="logout">
            logout
          </button>
          <button v-else btn @click="onLogin">
            login
          </button>
        </div>
      </TheBox>
      <TheBox title="TSX Support" />
    </div>
    <p mt-8 text-gray-400>
      This is a demo page, you can clear it and start coding~ :)
    </p>
  </div>
</template>

<style lang="scss" scoped>
</style>
