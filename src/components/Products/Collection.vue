<script>
import ProductCard from "../Cards/ProductCard.vue";
export default {
  name: "CollectionSection",
  data() {
    return {
      collectionData: [
        {
          id: 1,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747/container/container_1405888838/container_copy_copy__444445968/container/container_400292925_/image_849462364.casiocoreimg.png/1663322746381/mrg-b5000b-1.png",
          title: "mr-g",
          desc: "the flagship series",
        },
        {
          id: 2,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747/container/container_650142175/container_copy_copy_/container/container_400292925_/image_642702701.casiocoreimg.png/1663322746726/mtg-b3000bd-1a2.png",
          title: "mt-g",
          desc: "metal-twisted",
        },
      ],
      masterOfG: [
        {
          id: 1,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container/container_copy_copy_/container/container_400292925_/image_1941236334.casiocoreimg.png/1663322747312/gr-b200-1b.png",
          title: "sky",
          desc: "in the sky",
        },
        {
          id: 2,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_copy/container_copy_copy_/container/container_400292925_/image_1274813067.casiocoreimg.png/1663322747664/gwg-2000-1a3.png",
          title: "land",
          desc: "on the land",
        },
        {
          id: 3,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_copy_copy/container_copy_copy_/container/container_400292925_/image_1280813805.casiocoreimg.png/1663322748017/gwf-a1000-1a2.png",
          title: "sea",
          desc: "to the sea",
        },
        {
          id: 4,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777/container_copy_copy_/container/container_400292925_/image_1818480735.casiocoreimg.png/1663322748370/gmw-b5000d-1.png",
          title: "full metal",
          desc: "the evolution of an origin",
        },
        {
          id: 5,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_1374703372/container_copy_copy__1870052122/container/container_400292925_/image_1734520287.casiocoreimg.png/1663322748775/gst-b400-1a-jf-2.png",
          title: "g-steel",
          desc: "Tough Chronograph with Smartphone Link",
        },
        {
          id: 6,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_1623416498/container_copy_copy_/container/container_400292925_/image_1245963286.casiocoreimg.png/1663322749086/gbd-h1000-1a7.png",
          title: "g-squad",
          desc: "Support for health-conscious lifestyle",
        },
        {
          id: 7,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_1994297893/container_copy_copy_/container/container_400292925_/image_1905639234.casiocoreimg.png/1663322749397/gbx-100-7.png",
          title: "g-lide",
          desc: "Extreme Sports Line",
        },
        {
          id: 8,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_194564762/container_copy_copy__1424802770/container/container_400292925_/image_1740911758.casiocoreimg.png/1663322749704/gm-6900g-9.png",
          title: "digital",
          desc: "",
        },
        {
          id: 9,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_2014010759/container_copy_copy__1285656727/container/container_400292925_/image_1044763846.casiocoreimg.png/1663322750015/ga-2100-4a.png",
          title: "analog-digital",
          desc: "",
        },
        {
          id: 10,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_888396586/container_copy_copy_/container/container_400292925_/image_copy.casiocoreimg.png/1663322750325/gw-5000-1.png",
          title: "origin",
          desc: "",
        },
        {
          id: 11,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_706480359/container_copy_copy__2002754453/container/container_400292925_/image_801949570.casiocoreimg.png/1663322750636/dwe-5600ks-7-l.png",
          title: "limited models",
          desc: "",
        },
        {
          id: 12,
          imageSrc:
            "https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container/container_1913006777_2024139669/container_copy_copy__296381118/container/container_400292925_/image_1019792362.casiocoreimg.png/1663322750949/dw-5600et-5.png",
          title: "pair",
          desc: "",
        },
      ],
    };
  },

  components: { ProductCard },
};
</script>

<template>
  <div class="p-2 md:p-3 mx-auto lg:mx-4 text-center">
    <div class="px-3">
      <div class="text-2xl md:text-4xl font-bold md:font-bold mt-8">
        Collections
      </div>
      <div class="mt-20 mb-12">
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <div v-for="data in collectionData" :key="data.id">
            <router-link :to="`products/${data.title}`">
              <ProductCard
                :imageSrc="data.imageSrc"
                :title="data.title"
                :desc="data.desc"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 px-3">
      <div class="flex flex-row justify-center">
        <img
          class="w-72 md:w-96 h-full"
          src="https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/_jcr_content/root/responsivegrid/container_1689197747_1782633471/container_1554294081/image.casiocoreimg.svg/1663322746941/mog-bk.svg"
          alt="MASTER OF G"
        />
      </div>
      <div class="my-16">
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            place-items-center
            gap-8
          "
        >
          <div v-for="data in masterOfG" :key="data.id">
            <router-link :to="`products/${data.title}`">
              <ProductCard
                :imageSrc="data.imageSrc"
                :title="data.title"
                :desc="data.desc"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>