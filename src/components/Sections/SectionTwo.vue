<script>
export default {
  name: "SectionTwo",
  data() {
    return {
      imageUrl:
        "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/type/full-metal/gm-b2100/_jcr_content/root/responsivegrid/container/container_987070242/container/image.casiocoreimg.jpeg/1658972468486/img1.jpeg",
    };
  },
};
</script>
    
<template>
  <div class="bg-black text-white w-full">
    <div class="flex items-center justify-between px-12">
      <div class="w-1/2 p-12">
        <img class="w-full h-auto" :src="imageUrl" :alt="imageUrl" />
      </div>
      <div class="w-1/2 ml-16">
        <h2 class="text-3xl font-bold leading-relaxed mb-8">
          Octagonal form with full-metal <br />
          design: A genuine evolution of the <br />
          original G-SHOCK DNA
        </h2>
        <p class="text-sm leading-7">
          Introducing the first full-metal addition to the continually evolving
          2100 line, a true heir to the identity of the first-ever G-SHOCK.
          Boasting luxe full-metal construction while retaining the original
          streamlined, minimalist design along with the comfortable sizing and
          fit on the wrist. Also includes Smartphone Link, Tough Solar, and
          other features designed for life in the digital age.
        </p>
      </div>
    </div>
  </div>
</template>