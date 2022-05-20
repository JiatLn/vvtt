<script setup lang="ts">
import useUserStore from '@/store/modules/useUserStore'

const userStore = useUserStore()
</script>

<template>
  <div class="warpper">
    <div flex items-center gap-2>
      <section flex>
        <div class="box">
          <p>unocss</p>
          <div text-red-400 uppercase>
            Home Page
          </div>
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>Vue-router@4</p>
          <div flex justify-between space-x-4>
            <router-link class="btn" :to="{ name: 'Login' }">
              Login
            </router-link>
            <router-link class="btn" :to="{ name: 'Register' }">
              Register
            </router-link>
          </div>
        </div>
      </section>
      <section class="flex">
        <div class="box">
          <p>iconify</p>
          <AppIcon icon="flat-color-icons:home" text-30px />
        </div>
      </section>
      <section flex>
        <div class="box">
          <p>Pinia</p>
          <span>isLogin: {{ userStore.isLogin }}</span>
        </div>
      </section>
      <section flex>
        <div class="box">
          <p>TSX support</p>
        </div>
      </section>
    </div>
    <p mt-8 text-gray-400>
      This is a demo page, you can clear it and start coding~ :)
    </p>
  </div>
</template>

<style lang="scss" scoped>
.warpper {
  @apply h-full w-full flex flex-col justify-center items-center;
}

.box {
  @apply py-8 px-8 flex flex-col justify-center items-center bg-white rounded-xl shadow-md space-y-2;
}
</style>
