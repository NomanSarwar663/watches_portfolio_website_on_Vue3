<script>
export default {
  name: "ContactUs",
  components: {},
};
</script>

<template>
  <div class="flex items-center relative overflow-hidden" style="height: 40rem">
    <div class="absolute w-full h-full bg-darkNight"></div>
    <iframe
      class="absolute z-7"
      src="https://my.spline.design/noiselightscopy-fdde3ff74cc32f6b86eb4a64ec97b9ba/"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
    <div class="absolute text-white mx-20 flex items-center w-full z-10">
      <div class="w-1/2">
        <h2 class="font-bold text-5xl">Contact Us</h2>
        <h2 class="font-light text-md mt-2 w-96">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h2>
      </div>
      <div class="w-1/2 mr-20 ml-64 flex flex-col justify-start gap-4">
        <h2 class="font-medium text-2xl">Write us, We are here to listen!</h2>
        <input
          type="text"
          placeholder="Your Name"
          class="
            placeholder:italic placeholder:text-slate-400
            bg-black
            h-12
            w-96
            px-4
            py-2
            rounded-xl
            focus:outline-none
          "
        />
        <input
          type="email"
          placeholder="Your Email"
          class="
            placeholder:italic placeholder:text-slate-400
            bg-black
            h-12
            w-96
            px-4
            py-2
            rounded-xl
            focus:outline-none
          "
        />
        <textarea
          class="
            placeholder:italic placeholder:text-slate-400
            bg-black
            w-96
            px-4
            py-2
            rounded-xl
            focus:outline-none
          "
          placeholder="Your message here..."
          rows="5"
          cols="50"
        ></textarea>
        <button
          class="
            w-96
            bg-black
            h-12
            px-4
            py-2
            rounded-xl
            hover:outline
            outline-lightgray-300 outline-offset-2
            hover:outline-1
          "
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>