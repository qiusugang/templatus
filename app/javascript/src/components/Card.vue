<template lang="html">
  <div class="relative" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="src" alt="" class="rounded-lg" />
    <div v-if="hover" class="bg-dark absolute inset-0 h-full w-full rounded-lg opacity-50"></div>
    <div v-if="hover" class="absolute top-0 flex h-full w-full flex-col justify-between p-3">
      <div class="flex items-center justify-between">
        <button type="button" name="button" class="flex items-center">
          <p class="font-semibold text-white">{{ board }}</p>
          <span class="material-icons text-white">expand_more</span>
        </button>
        <button type="button" name="button" class="bg-primary rounded-full py-3 px-5 font-semibold text-white">
          Save
        </button>
      </div>
      <div class="flex w-full items-center">
        <button
          type="button"
          name="button"
          class="text-dark ml-auto mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm opacity-75 hover:opacity-100"
        >
          <span class="material-icons text-base">ios_share</span>
        </button>
        <button
          type="button"
          name="button"
          class="text-dark flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-75 hover:opacity-100"
        >
          <span class="material-icons text-base">more_horiz</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'board'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
