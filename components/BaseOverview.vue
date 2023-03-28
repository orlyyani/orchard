<template>
  <div class="overview">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3 gap-6">
      <!-- overview images -->
      <div class="col-span-2">
        <div
          class="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-4 md:grid-flow-col gap-6 max-h-600"
        >
          <div class="sm:col-span-2 md:row-span-4">
            <img
              src="~/assets/component-01/Image-01.jpg"
              class="object-cover w-full h-full"
              alt="overview-image"
            />
          </div>
          <div class="sm:col-span-1 md:row-span-2">
            <img
              src="~/assets/component-01/Image-02.jpg"
              class="object-cover w-full h-full"
              alt="overview-image"
            />
          </div>
          <div class="sm:col-span-1 md:row-span-2">
            <img
              src="~/assets/component-01/Image-03.jpg"
              class="object-cover w-full h-full"
              alt="overview-image"
            />
          </div>
        </div>
      </div>
      <!-- overview information -->
      <div class="information">
        <h1 class="title uppercase pb-3 text-slate-300">
          Answer Your Body's Needs
        </h1>
        <div class="description">
          <p class="text-lg mt-5 text-slate-400">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavorings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </p>
        </div>
        <div class="note mt-10">
          <b class="uppercase text-rose-600">Be Mindful</b>
          <p class="description mt-5 text-lg">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.information {
  .title {
    border-bottom: 1px solid;
  }
  @media only screen and (min-width: 768px) {
    .description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 10;
      line-clamp: 10;
      -webkit-box-orient: vertical;
    }
    .note {
      .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
