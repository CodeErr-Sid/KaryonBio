<template>
  <div>
    <section
      class="relative w-full h-screen overflow-hidden bg-gradient-to-r from-[#1F5179] to-[#1F709C] md:bg-none xl:bg-gradient-to-r xl:from-[#1F5179] xl:to-[#1F709C]"
      :class="['', isOpen ? '  ' : ' ']"
    >
      <!-- SVG background image -->
      <img
        src="/partner/hero.svg"
        class="absolute top-0 hidden md:block xl:opacity-50"
        alt="hero-dot"
        :class="['', isOpen ? ' hidden' : ' ']"
      />

      <div
        class="relative z-10 mt-20 md:mt-28 text-[#F5F7FA] items-center justify-center pt-5 px-4 lg:pt-[63px] md:flex-row md:px-6 xl:px-10"
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
            class="md:text-xl text-base font-semibold md:w-[576px] mt-5 lg:mt-10 l md:leading-[30px] text-center"
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
    <h1
      class="text-xl md:text-[35px] lg:text-[52px] text-white md:text-black md:mt-[60px] mt-4 font-semibold leading-[40px] lg:leading-[63px] text-center"
    >
      Why Partner with Karyon Bio?
    </h1>
    <section
      class="w-full py-4 md:py-0 bg-gradient-to-r from-[#0C264A] to-[#1F3B60]"
    >
      <!-- <div class="flex flex-col items-center justify-center">
        <img
          src="/partner/lab.png"
          class="hidden opacity-80 md:block top-36"
          alt="lab"
        />
      </div> -->

      <div
        class="container inset-0 z-20 w-full mx-auto md:py-8"
        :class="expandedSection ? 'mt-10' : 'md:mt-32 mt-4 '"
      >
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="text-center cursor-pointer"
        >
          <div>
            <div
              class="px-2 mb-2 text-sm font-bold text-white transition-colors duration-300 rounded-lg md:text-lg md:px-6"
              :class="
                expandedSection === index + 1
                  ? 'hidden'
                  : expandedSection
                  ? 'bg-[#49719D] bg-opacity-10 md:bg-opacity-30 py-4 md:py-10 lg:py-20'
                  : 'bg-[#49719D] bg-opacity-10 md:bg-opacity-30 py-4 md:py-10 lg:py-20'
              "
              @click="toggleSection(index + 1)"
            >
              {{ section.title }}
            </div>
          </div>

          <transition name="expand">
            <div>
              <h1
                class="md:text-[25px] font-bold text-white text-center cursor-pointer"
                :class="expandedSection === index + 1 ? '' : 'hidden'"
                @click="toggleSection(index + 1)"
              >
                {{ section.title }}
              </h1>
              <div
                v-if="expandedSection === index + 1"
                class="flex flex-col items-center justify-center px-4 mt-2 mb-4 text-white rounded-lg md:flex-row md:items-center bg-opacity-90"
              >
                <p
                  :data-aos="getAosAnimation(index)"
                  :data-aos-delay="index * 100"
                  class="text-sm md:text-[25px] w-[800px] md:leading-8 text-center md:text-start font-semibold"
                >
                  {{ section.content }}
                </p>
                <!-- <img
                  :src="section.image"
                  :class="section.imageClass"
                  :alt="section.alt"
                /> -->
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section>
      <div
        class="flex flex-col justify-between gap-5 mb-10 md:flex-row xl:w-[1200px]"
      >
        <div class="md:w-[650px]">
          <div class="flex flex-col">
            <h1
              class="text-[22px] md:w-[700px] text-center md:text-start w-full px-4 lg:text-[40px] md:mt-[60px] mt-4 font-bold leading-[40px] lg:leading-[63px]"
            >
              Elevate your wealth in biomedical research!
            </h1>
            <div class="md:-ml-10 swiper mySwiper">
              <div
                class="flex items-center w-[250px] h-[60px] md:w-[600px] md:h-[100px] justify-around gap-2 mt-6 swiper-wrapper"
              >
                <img
                  v-for="(swip, index) in swipImages"
                  :key="index"
                  :src="swip.src"
                  :alt="'swip' + index"
                  @click="showSlide(index)"
                  class="rounded-full cursor-pointer swiper-slide"
                />
              </div>
            </div>
          </div>
          <h1
            class="text-[36px] font-semibold text-center md:text-start text-[#1F3B60] mt-6"
          >
            {{ activeSlide.title }}
          </h1>
          <ul
            class="list-disc text-[#1F3B60] px-4 text-sm md:leading-8 lg:leading-10 md:text-[24px] md:px-10 mt-5"
          >
            <li v-for="(item, i) in activeSlide.content" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col md:relative md:w-[400px] md:pr-10 items-center w-full justify-center lg:items-center"
        >
          <h2
            class="md:text-[36px] md:-ml-14 md:relative lg:text-[90px] md:-mt-[300px] text-center lg:text-center font-semibold text-gray-500"
          >
            {{ activeSlide.title }}
          </h2>
          <img :src="activeSlide.src" class="mt-2 md:absolute" alt="slide" />
        </div>
      </div>
      <div class="flex justify-between -mt-4 md:-mt-10">
        <img src="/partner/sand.svg" class="w-[300px]" alt="" />
        <img src="/partner/sand2.svg" class="w-[300px] hidden" alt="" />
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
import AOS from "aos";
import "aos/dist/aos.css";
definePageMeta({ layout: "primary" });

export default {
  data() {
    return {
      isOpen: false,
      expandedSection: null,
      swiperInstance: null,
      sections: [
        {
          title: "INNOVATIVE TECHNOLOGY",
          content:
            "Stay ahead in liver disease diagnostics with our cutting-edge AI and multi-omics platform. Our technology enables earlier detection and more precise insights for better outcomes. Partner with us to revolutionize liver health diagnostics.",
          image: "/partner/expand1.png",
          imageClass: "xl:w-[509px] md:w-[350px] w-[300px] mt-2 md:mt-0",
          alt: "expand1",
        },
        {
          title: "Diagnostic Labs",
          content:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes. Let us help you achieve your goals with precision and care",
          image: "/partner/expand2.png",
          imageClass: "xl:w-[509px] md:w-[350px] w-[300px] mt-2 md:mt-0",
          alt: "expand2",
        },
        {
          title: "Hospital",
          content:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions. By focusing on prevention, treatment, and education, we aim to make a positive impact. Let’s work to promote healthier lives worldwide.",
          image: "/partner/expand3.png",
          imageClass: "xl:w-[509px] md:w-[350px] w-[300px] mt-2 md:mt-0",
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
        {
          src: "/partner/slide1.png",
          title: "Hospital",
          content: [
            "Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.",
            "Partner with us to advance cutting-edge biomedical research and enhance patient care together.",
          ],
        },
        {
          src: "/partner/slide2.png",
          title: "Diagnostic Labs",
          content: [
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes.",
            "Let us help you achieve your goals with precision and care.",
          ],
        },
        {
          src: "/partner/slide3.png",
          title: "Pharmaceutical ",
          content: [
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions.",
            "By focusing on prevention, treatment, and education, we aim to make a positive impact.",
          ],
        },
      ],
      activeSlide: {
        src: "/partner/slide1.png",
        title: "Hospital",
        content: [
          "Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.",
          "Partner with us to advance cutting-edge biomedical research and enhance patient care together.",
        ],
      },
    };
  },
  mounted() {
    AOS.init();

    this.initializeSwiper(); // Initialize Swiper when the component is mounted
  },
  beforeDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(); // Destroy Swiper before the component is destroyed
    }
  },
  methods: {
    getAosAnimation(index) {
      switch (index % 3) {
        case 0:
          return "fade-right"; // index 1, 4, 7...
        case 1:
          return "fade-left"; // index 2, 5, 8...
        case 2:
          return "fade-down"; // index 3, 6, 9...
        default:
          return "fade-right"; // Fallback
      }
    },
    initializeSwiper() {
      this.swiperInstance = new window.Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: { slidesPerView: 2, spaceBetween: 2 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 4 },
        },
      });
    },
    showSlide(index) {
      this.activeSlide = this.slideImages[index];
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
