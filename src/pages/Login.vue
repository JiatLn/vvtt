<script setup lang="tsx">
const testTsx = (props: { title: any }) => {
  return (
    <>
      <div className="text-[24px]">{props.title}</div>
      <p className="text-[#666]">this comp is tsx</p>
    </>
  )
}
</script>

<template>
  <testTsx title="login page" />
</template>

<style lang="scss" scoped>
</style>
