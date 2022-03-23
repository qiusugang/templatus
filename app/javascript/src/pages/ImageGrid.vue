<template>
  <page-title>Vue 3 Tailwind CSS Grid</page-title>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="image in images" :key="image.id" class="h-48 max-w-full rounded-lg lg:h-56">
        <img :src="image.src" alt="image" class="h-full w-full rounded-lg object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import photos from '@/stores/photos';

export default {
  components: { PageTitle },

  data() {
    return {
      images: photos,
    };
  },
};
</script>
