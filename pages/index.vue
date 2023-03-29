<template>
  <div>
    <div class="container pt-48">
      <BaseOverview />
    </div>
    <div class="container py-48">
      <div data-aos="fade-up" data-aos-delay="300">
        <BaseLatest />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Orchard Fed test",
  meta: [
    {
      name: "Answer Your Body's Needs",
      content:
        "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavorings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
    },
  ],
});
</script>
