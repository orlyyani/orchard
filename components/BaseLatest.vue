<template>
  <div class="latest">
    <h1 class="title uppercase text-center text-4xl">
      All the latest from AEG
    </h1>

    <NuxtLink to="#" class="grid grid-cols-1 gap-6 md:grid-cols-3 cards mt-20">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <div class="image border-b-4 border-rose-600">
          <img
            :src="getImageUrl(card.image)"
            class="object-cover w-full h-full"
            alt="card-image"
          />
        </div>
        <div class="information mt-5">
          <p class="title text-lg">
            {{ card.title }}
          </p>
          <p class="description text-slate-400 mt-5">
            {{ card.description }}
          </p>
          <p
            class="read-more uppercase text-lg mt-5 border-b border-rose-600 inline-block"
          >
            Read More
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { latestCards } from "../composables/latest";

const cards = latestCards();

const getImageUrl = (path: any) => {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  return assets["/assets/component-02/" + path];
};
</script>

<style scoped lang="scss">
.card {
  .information {
    .title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
