<template>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <PromoSection />
  <SectionFour />
  <DetailsSection />
</template>
  
<script>
import SectionOne from "@/components/Sections/SectionOne.vue";
import SectionTwo from "@/components/Sections/SectionTwo.vue";
import SectionThree from "@/components/Sections/SectionThree.vue";
import PromoSection from "@/components/Sections/PromoSection.vue";
import SectionFour from "@/components/Sections/SectionFour.vue";
import DetailsSection from "@/components/Sections/DetailsSection.vue";
export default {
  name: "HomePage",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    PromoSection,
    SectionFour,
    DetailsSection,
  },
};
</script>
  
  