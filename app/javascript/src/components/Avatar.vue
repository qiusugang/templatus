<template>
  <div class="vue-avatar-cropper-demo rounded border text-center">
    <div class="p-6">
      <div class="relative">
        <img :src="user.avatar" class="avatar" />
        <div class="absolute bottom-0 left-0 right-0">
          <button class="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-700" @click="showCropper = true">
            Select an new image
          </button>
        </div>
      </div>
      <h5 class="mb-0 font-bold">{{ user.nickname }}</h5>
      <div class="text-gray-500">{{ user.username }}</div>
    </div>
    <div class="border-t p-6 text-gray-500" v-html="message"></div>
    <avatar-cropper
      v-model="showCropper"
      upload-url="/files/upload.json"
      @uploading="handleUploading"
      @uploaded="handleUploaded"
      @completed="handleCompleted"
      @error="handlerError"
    />
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper';

export default {
  components: { AvatarCropper },
  data() {
    return {
      showCropper: false,
      message: 'ready',
      user: {
        id: 1,
        nickname: '安正超',
        username: 'User',
        avatar: '/images/avatar01.jpg',
      },
    };
  },
  methods: {
    handleUploading(form, xhr) {
      this.message = 'uploading...';
    },
    handleUploaded(response) {
      if (response.status === 'success') {
        this.user.avatar = response.url;
        // Maybe you need call vuex action to
        // update user avatar, for example:
        // this.$dispatch('updateUser', {avatar: response.url})
        this.message = 'user avatar updated.';
      }
    },
    handleCompleted(response, form, xhr) {
      this.message = 'upload completed.';
    },
    handlerError(message, type, xhr) {
      this.message = 'Oops! Something went wrong...';
    },
  },
};
</script>

<style>
.vue-avatar-cropper-demo {
  max-width: 18em;
  margin: 0 auto;
}
.avatar {
  width: 160px;
  border-radius: 6px;
  display: block;
  margin: 20px auto;
}
.card-img-overlay {
  display: none;
  transition: all 0.5s;
}
.card-img-overlay button {
  margin-top: 20vh;
}
.card:hover .card-img-overlay {
  display: block;
}
</style>
