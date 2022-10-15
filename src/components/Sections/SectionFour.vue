<script>
export default {
  name: "SectionFour",
  data() {
    return {
      subsectionone:
        "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features1/master/_jcr_content/root/container/container_542574431/teaser_copy.casiocoreimg.jpeg/1656309864935/img2.jpeg",
      subsectiontwo:
        "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features1/master/_jcr_content/root/container_542574431_/teaser_copy.casiocoreimg.jpeg/1656309947836/img3.jpeg",
      subsectionthree:
        "https://gshock.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/g-shock/full_metal/gm-b2100/features1/master/_jcr_content/root/container_542574431__299349025/teaser_copy.casiocoreimg.jpeg/1656316523849/img4.jpeg",
    };
  },
};
</script>
    
<template>
  <div>
    <!-- sub section-1 -->
    <div>
      <div class="relative">
        <img :src="this.subsectionone" class="h-full w-full" />
        <div class="absolute bottom-0 left-0 h-full w-full flex items-center">
          <p class="text-xl font-bold p-12">
            A full-metal analogue watch,<br />
            heir to the spirit of <br />the very first G-SHOCK
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center w-full py-16">
        <p class="text-left font-medium w-3/4 text-sm">
          Now in a full-metal construction, this 2100-line watch features an
          octagonal form inherited from the DW-5000C, the very first G-SHOCK
          that debuted in 1983. With its screw-back case, bezel and band crafted
          with stainless steel, the watch offers a streamlined, minimalist
          design while protecting the module from drops and impacts with its
          iconic G-SHOCK shock-resistant structure. With its tough, dimensional
          forged form, the bezel shines with an attractive circular hairline
          finish on its top surface. Reproducing the dimpled portions of the
          DW-5000C in metal, the band presents enhanced textures with
          differentiated hairline and mirror finishes.
        </p>
      </div>
    </div>
    <!-- sub section-2 -->
    <div>
      <div class="relative">
        <img :src="this.subsectiontwo" class="h-full w-full" />
        <div class="absolute bottom-0 left-0 h-full w-full flex items-center">
          <p class="text-white text-xl font-bold p-12">
            Slimline module design achieved<br />
            with high-density mounting
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center w-full py-16">
        <p class="text-left font-medium w-3/4 text-sm">
          Employing a slim Tough Solar powered timekeeping module with
          Bluetooth® connectivity, the watch maintains the same sense of size as
          the previous GM-2100 while offering a wider range of functions and
          full-metal construction. While delivering high utility with Smartphone
          Link and Tough Solar functionality, the GM-B2100 offers a comfortable
          fit on the wrist as well.
        </p>
      </div>
    </div>
    <!-- Sub Section 3 -->
    <div>
      <div class="relative">
        <img :src="this.subsectionthree" class="h-full w-full" />
        <div class="absolute bottom-0 left-0 h-full w-full flex items-center">
          <p class="text-xl font-bold p-12">
            Full metal shock-resistant<br />
            structure with precision <br />refinement
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center w-full py-16">
        <p class="text-left font-medium w-3/4 text-sm">
          Buffering components made of fine resin are installed between the
          stainless-steel bezel and case to protect the module from shock.
          Undergoing meticulous processes of forging, cutting, and polishing,
          the bezel and case are precisely crafted down to the intricately
          shaped face, and also to the back, which is the key to the precision
          fit. Additionally, a three-pronged structure is employed for the lugs
          on the case to disperse shock to the connective part of the band.
        </p>
      </div>
    </div>
  </div>
</template>