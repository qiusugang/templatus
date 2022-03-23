<script setup lang="ts">
import photos from '@/stores/photos';
import PageTitle from '@/components/PageTitle.vue';
import MasonryWall from '@yeger/vue-masonry-wall';

const items: {
  src: string;
  width: number;
  height: number;
  desc: string;
  sub: string;
}[] = photos;
</script>

<template>
  <page-title>Masonry images</page-title>
  <div class="py-2" />
  <MasonryWall :items="items" :ssr-columns="1" :column-width="200" :padding="16" :gap="10">
    <template #default="{ item, index }">
      <div class="rounded-md bg-white" :style="`height: ${item.height / (item.width / $parent.columnWidth) + 60}px`">
        <img :src="item.src" class="rounded-t-md" />
        <span class="ml-3 text-center">{{ index }}. {{ item.desc }}</span>
      </div>
    </template>
  </MasonryWall>
</template>
