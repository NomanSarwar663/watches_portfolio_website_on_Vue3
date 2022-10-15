<template>
  <div>
    <main>
      <div
        class="
          relative
          pt-16
          pb-32
          flex
          content-center
          items-center
          justify-center
          min-h-screen-75
        "
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.pexels.com/photos/23474/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-darkNight"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">About Us</h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            h-70-px
          "
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-darkNight -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-black
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-xl font-semibold text-white">
                    Shock Resistant
                  </h6>
                  <p class="mt-2 mb-4 text-lightgray-300">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-black
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <h5 class="text-xl font-semibold text-white">Award Wining</h5>
                  <p class="mt-2 mb-4 text-lightgray-300">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-black
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-xl font-semibold text-white">
                    Most Selling Watch Brand
                  </h6>
                  <p class="mt-2 mb-4 text-lightgray-300">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour,
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-5xl mb-2 font-semibold leading-normal text-white">
                Working with us is a pleasure
              </h3>
              <p
                class="text-lg font-light text-white leading-relaxed mt-4 mb-4"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-white"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <router-link to="/" class="font-bold text-white mt-8">
                Check Vue GShock!
              </router-link>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  drop-shadow-md
                  rounded-lg
                  bg-black
                "
              >
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/4124334/pexels-photo-4124334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Watches
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative pt-20 pb-10">
        <div
          class="
            bottom-auto
            top-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            -mt-20
            h-20
          "
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section class="pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Our Team</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-center">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team1"
                  class="shadow-lg rounded-full mx-auto max-w-120-px grayscale"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Ryan Tompson</h5>
                  <p
                    class="
                      mt-1
                      text-sm text-blueGray-400
                      uppercase
                      font-semibold
                    "
                  >
                    QA Engineer
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team3"
                  class="shadow-lg rounded-full mx-auto max-w-120-px grayscale"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Alexa Smith</h5>
                  <p
                    class="
                      mt-1
                      text-sm text-blueGray-400
                      uppercase
                      font-semibold
                    "
                  >
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team4"
                  class="shadow-lg rounded-full mx-auto max-w-120-px grayscale"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Jenna Kardi</h5>
                  <p
                    class="
                      mt-1
                      text-sm text-blueGray-400
                      uppercase
                      font-semibold
                    "
                  >
                    Founder and CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-20 relative block bg-black">
        <div
          class="
            bottom-auto
            top-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            -mt-20
            h-20
          "
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-black fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    </main>
  </div>
</template>
  <script>
import team1 from "../assets/img/team-1-800x8000.jpg";
import team2 from "../assets/img/team-2-800x800.jpg";
import team3 from "../assets/img/team-3-800x800.jpg";
import team4 from "../assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {},
};
</script>
  