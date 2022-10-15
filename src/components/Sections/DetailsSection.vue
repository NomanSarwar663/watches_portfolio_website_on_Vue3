<script>
import DetailCard from "../Cards/DetailCard.vue";
export default {
  name: "DetailsSection",
  data() {
    return {
      details: [
        {
          id: 1,
          imageSrc:
            "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features2/master/_jcr_content/root/container/container_1146878886/container_copy/image.casiocoreimg.jpeg/1656311295954/img5.jpeg",
          title: "Dial finishing achieved with microfabrication technology",
          desc: "Dual-layer dial construction is employed to present the inset dial and LCD portion with distinct finishes of their own. With a minute grind-mark finish and vapour deposition applied to the inset dial ring, laser welding used to secure it to the dial, and more, precision die moulding technologies applied by Yamagata Casio deliver an intricate form and meticulously detailed surface finish. In addition, the vapour deposition applied to the dimensional index marks and the indicator hand emphasises the metallic texture for a dial design that complements the watch’s metal exterior.",
        },
        {
          id: 2,
          imageSrc:
            "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features2/master/_jcr_content/root/container/container_1146878886/container_copy_copy/image.casiocoreimg.jpeg/1656311298511/img6.jpeg",
          title: "Three distinctive IP colours for full-metal design",
          desc: "In addition to brilliantly gleaming silver (GM-B2100D), two other options are offered: all-black IP for an intrepid look (GM-B2100BD) and fashionable rose gold IP (GM-B2100GD).",
        },
        {
          id: 3,
          imageSrc:
            "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features2/master/_jcr_content/root/container/container_1146878886_710236772/container_copy/image.casiocoreimg.jpeg/1656311305243/img7.jpeg",
          title:
            "Solar-powered timekeeping with Bluetooth® for enhanced accuracy and reliability",
        },
        {
          id: 4,
          imageSrc:
            "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features2/master/_jcr_content/root/container/container_1146878886_710236772/container_copy_copy/image.casiocoreimg.jpeg/1656311326680/img8.jpeg",
          title:
            "Super Illuminator (high-brightness double LED light) for maintaining watch readability in the dark",
          desc: "*Image shows the GM-B2100D-1A",
        },
      ],
    };
  },
  components: { DetailCard },
};
</script>
    
<template>
  <div class="bg-black text-white flex flex-col">
    <h2 class="text-4xl font-bold py-10 w-full text-center">DETAILS</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <DetailCard
        v-for="detail in details"
        :key="detail.id"
        :imageSrc="detail.imageSrc"
        :title="detail.title"
        :desc="detail.desc"
      />
      <DetailCard />
    </div>
  </div>
</template>