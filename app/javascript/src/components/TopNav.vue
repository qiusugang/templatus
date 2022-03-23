<template lang="html">
  <div class="flex w-full items-center justify-between px-3 py-4">
    <div class="flex items-center">
      <button
        v-for="(item, i) in tabItems"
        :key="i"
        :class="`${
          selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'
        } rounded-full py-3 px-4 font-semibold`"
        type="button"
        name="button"
        @click="selectedTab = item.key"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="relative flex-grow">
      <span class="material-icons text-muted absolute mt-3 ml-3">search</span>
      <input
        class="text-muted hover:bg-lightHover bg-light w-full rounded-full py-3 pr-3 pl-10"
        placeholder="Search"
        type="text"
        name=""
        value=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        { name: 'Home', key: 'home' },
        { name: 'Today', key: 'today' },
      ],
      selectedTab: 'home',
    };
  },
};
</script>
