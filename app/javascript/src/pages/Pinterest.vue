<template>
  <div class="">
    <TopNav />
    <div class="flex w-full flex-wrap px-20">
      <div v-for="(arr, index) in subArrays" :key="index" class="w-1/5">
        <div v-for="(card, i) in arr" :key="i" class="w-full">
          <div class="w-full p-2">
            <Card :src="`${card.src}`" :board="`${card.recommended}`" class="h-full w-full" />
            <div class="pt-2 text-sm leading-tight">
              <p class="font-bold">{{ card.title }}</p>
              <p>{{ card.user }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Card from '@/components/Card.vue';
import users from '@/stores/users';

export default {
  components: {
    TopNav,
    Card,
  },
  data() {
    return {
      cards: users,
    };
  },
  computed: {
    subArrays() {
      var length = Math.ceil(this.cards.length / 5);
      const result = new Array(length).fill().map((i) => {
        console.log(i);
        return this.cards.splice(0, length);
      });
      return result;
    },
  },
};
</script>
