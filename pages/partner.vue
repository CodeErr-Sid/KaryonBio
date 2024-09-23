<template>
  <div>
    <section
      class="relative w-full h-screen overflow-hidden"
      :class="['', isOpen ? '  ' : ' ']"
      style="
        background: linear-gradient(
          251deg,
          rgba(31, 81, 121, 0.8) 9.95%,
          rgba(31, 112, 156, 0.8) 71.29%
        );
      "
    >
      <div>
        <nav
          class="relative z-10 flex items-center justify-between px-4 py-2 md:py-6 md:px-10 xl:px-20"
        >
          <!-- Logo -->
          <img src="/logo.svg" alt="logo" class="w-20 md:w-28" />

          <!-- Hamburger Icon (visible on mobile only) -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Close Icon (visible when the menu is open) -->
              <svg
                v-if="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Menu Links (hidden on mobile) -->
          <div
            :class="[
              'md:flex lg:gap-6 gap-6 mt-20 md:mt-0 text-[#F5F7FA] text-[20px]',
              isOpen ? 'block ' : 'hidden',
            ]"
            class="absolute top-0 left-0 w-full transition-all duration-300 -z-40 md:bg-none md:top-20 md:static md:w-auto md:block"
          >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/"
              >Home</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/about"
              >About</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/services"
              >Services</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/casestudies"
              >Casestudies</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/teams"
              >OurExperts</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/contact"
              >Contact</nuxt-link
            >
          </div>
        </nav>
      </div>

      <!-- SVG background image -->
      <img
        src="/partner/hero.svg"
        class="absolute top-0 opacity-50"
        alt="hero-dot"
        :class="['', isOpen ? ' hidden' : ' ']"
      />

      <div
        class="relative z-10 text-[#F5F7FA] items-center justify-center pt-5 px-4 lg:pt-[63px] md:flex-row md:px-6 xl:px-10"
      >
        <div
          class="flex flex-col items-center justify-center"
          :class="['', isOpen ? ' hidden ' : 'block ']"
        >
          <!-- Typewriter effect here -->
          <h1
            class="text-[35px] lg:text-[52px] font-semibold leading-[40px] lg:leading-[63px] text-center"
          >
            Partner
          </h1>

          <h1
            class="md:text-xl text-base font-semibold mt-5 lg:mt-10 l md:leading-[30px] text-center"
          >
            Our innovative AI-driven diagnostic solutions are designed to
            integrate seamlessly with the operations of hospitals, diagnostic
            labs, pharmaceutical companies, and clinical trial organizations,
            helping you deliver superior care and groundbreaking therapies to
            patients worldwide.
          </h1>
        </div>
      </div>
    </section>
    <!-- <section class="relative w-full h-[900px] overflow-hidden bottom-10">
      <h1
        class="text-[35px] lg:text-[52px] md:mt-[60px] mt-4 font-semibold leading-[40px] lg:leading-[63px] text-center"
      >
        Why Partner with Karyon Bio?
      </h1>
      <div class="flex flex-col items-center justify-center">
        <img
          src="/partner/lab.svg"
          class="absolute opacity-80 top-36"
          alt="lab"
        />
      </div>

      <div
        class="container relative inset-0 z-20 w-full py-8 mx-auto"
        :class="expandedSection ? '' : 'mt-32'"
      >
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="text-center cursor-pointer"
        >
          <div>
            <div
              class="px-6 mb-2 text-lg font-bold text-white transition-colors duration-300 rounded-lg"
              :class="
                expandedSection === index + 1
                  ? 'hidden' 
                  : expandedSection
                  ? 'bg-[#49719D] bg-opacity-30 py-4' 
                  : 'bg-[#49719D] bg-opacity-30 py-20' 
              "
              @click="toggleSection(index + 1)"
            >
              {{ section.title }}
            </div>
          </div>

          <transition name="expand">
            <div>
              <h1
                class="text-[25px] font-bold mt-[0px] text-white text-center cursor-pointer"
                :class="expandedSection === index + 1 ? '' : 'hidden'"
                @click="toggleSection(index + 1)"
              >
                {{ section.title }}
              </h1>
              <div
                v-if="expandedSection === index + 1"
                class="relative flex items-center justify-center h-[324px] px-4 mb-4 text-white rounded-lg bg-opacity-90"
              >
                <p class="text-[25px] text-start font-semibold">
                  {{ section.content }}
                </p>
                <img
                  :src="section.image"
                  :class="section.imageClass"
                  :alt="section.alt"
                />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section> -->
    <section class="flex flex-col justify-between mb-10 md:flex-row">
      <div class="md:w-[650px]">
        <div class="flex flex-col">
          <h1
            class="text-[22px] text-center md:text-start px-4 lg:text-[40px] md:mt-[60px] mt-4 font-bold leading-[40px] lg:leading-[63px]"
          >
            Elevate your wealth in biomedical <br class="hidden md:block" />
            research!
          </h1>
          <div class="swiper mySwiper">
            <div
              class="flex items-center justify-around gap-2 mt-6 swiper-wrapper"
            >
              <img
                v-for="(swip, index) in swipImages"
                :key="index"
                :src="swip.src"
                :alt="'swip' + index"
                @click="showSlide(index)"
                class="cursor-pointer swiper-slide"
              />
            </div>
          </div>
        </div>
        <h1
          class="text-[36px] font-semibold text-center md:text-start text-[#1F3B60] mt-6"
        >
          Hospital
        </h1>
        <ul
          class="list-disc text-[#1F3B60] px-4 text-sm md:text-[24px] md:px-10 mt-5"
        >
          <li>
            Partner with us for an exceptional, personalized service experience
            that drives success and innovation. Let's ignite progress together.
          </li>
          <li class="mt-2 md:mt-5">
            Partner with us to advance cutting-edge biomedical research and
            enhance patient care together.
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col items-center lg:items-start justify-center md:w-[380px]"
      >
        <h2
          class="md:text-[36px] lg:text-[90px] mt-4 xl:-ml-36 text-center lg:text-start font-semibold text-[#1F3B60]"
        >
          {{ activeSlide.title }}
        </h2>
        <img :src="activeSlide.src" class="mt-2 xl:-ml-36" alt="slide" />
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css",
    },
  ],
});
</script>
<script>
export default {
  data() {
    return {
      isOpen: false,
      expandedSection: null,
      sections: [
        {
          title: "INNOVATIVE TECHNOLOGY",
          content:
            "Stay ahead in liver disease diagnostics with our cutting-edge AI and multi-omics platform. Our technology enables earlier detection and more precise insights for better outcomes. Partner with us to revolutionize liver health diagnostics.",
          image: "/partner/expand1.png",
          imageClass: "w-[509px]",
          alt: "expand1",
        },
        {
          title: "Diagnostic Labs",
          content:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes. Let us help you achieve your goals with precision and care",
          image: "/partner/expand2.png",
          imageClass: "w-[509px]",
          alt: "expand2",
        },
        {
          title: "Hospital",
          content:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions. By focusing on prevention, treatment, and education, we aim to make a positive impact. Let’s work to promote healthier lives worldwide.",
          image: "/partner/expand3.png",
          imageClass: "w-[509px]",
          alt: "expand3",
        },
      ],
      swipImages: [
        { src: "/partner/swip3.svg" },
        { src: "/partner/swip4.svg" },
        { src: "/partner/swip1.svg" },
        { src: "/partner/swip2.svg" },
        { src: "/partner/swip3.svg" },
        { src: "/partner/swip4.svg" },
        { src: "/partner/swip1.svg" },
      ],
      slideImages: [
        { src: "/partner/slide1.png", title: "Hospital" },
        { src: "/partner/slide2.png", title: "Diagnostic Labs" },
        { src: "/partner/slide1.png", title: "Hospital" },
        { src: "/partner/slide3.png", title: "Pharmaceutical Companies" },
        { src: "/partner/slide1.png", title: "Hospital" },
        { src: "/partner/slide2.png", title: "Diagnostic Labs" },
        { src: "/partner/slide1.png", title: "Hospital" },
        { src: "/partner/slide3.png", title: "Pharmaceutical Companies" },
      ],
      activeSlide: {
        src: "/partner/slide1.png",
        title: "Hospital",
      },
    };
  },
  mounted() {
    new window.Swiper(".mySwiper", {
      free: true,
      loop: true,
      slidesPerView: 1,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      autoplay: {
        delay: 2000, // Set autoplay delay in milliseconds
        disableOnInteraction: true, // Keep autoplay active even after interaction
      },

      breakpoints: {
        320: { slidesPerView: "2", spaceBetween: 12 },
        768: { slidesPerView: "4", spaceBetween: 20 },
        1024: { slidesPerView: "4", spaceBetween: 20 },
        1280: { slidesPerView: "4", spaceBetween: 4 },
      },
    });
  },
  methods: {
    showSlide(index) {
      this.activeSlide = this.slideImages[index];
      this.activeTitle = this.swipImages[index].title; // Update the active title
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleSection(section) {
      this.expandedSection = this.expandedSection === section ? null : section;
    },
  },
};
</script>
<style scoped>
/* Enhanced slide and fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  max-height: 0;
  opacity: 0;
  transform: scale(0.95);
}

.slide-fade-enter-active {
  max-height: 1000px; /* Arbitrary value larger than the content's height */
  transform: scale(1);
  opacity: 1;
}
</style>
