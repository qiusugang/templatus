<template>
  <page-title>Vue 3 Upload Image</page-title>
  <div>
    <UploadMedia :error="error" :server="server" @media="Media" />
  </div>
</template>

<script>
import UploadMedia from '@/components/UploadMedia.vue';
import PageTitle from '@/components/PageTitle.vue';

export default {
  components: {
    UploadMedia,
    PageTitle,
  },
  data() {
    return {
      error: '', //if it is not null it will apply the error styling and show the error message.
      server: '/photos/upload.json', //the api that will temporary save the image.
      media: [], //the added images
    };
  },

  methods: {
    Media(value) {
      this.media = value;
    },
  },
};
</script>
