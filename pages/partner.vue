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
    <section
      style="
        width: 100%;
        background-color: white;
        z-index: 3;
        position: relative;
      "
    >
      <section
        style="background-color: white; height: 100%; text-align: center"
        class="border-top-radius"
      >
        <div
          class="global-container border-top-radius"
          :style="{
            backgroundImage: showBackgroundImage
              ? 'url(' + selectedCountry.image + ')'
              : 'none',
            backgroundSize: '400px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10% top 20%',
          }"
        >
          <!-- Country name in the background -->
          <div class="background-country-name">
            {{ selectedCountry.country.toUpperCase() }}
          </div>

          <div class="gc-static">
            <h2 class="responsive-heading">
              Elevate your wealth in biomedical research!
            </h2>
            <p>Team up with us today for an unforgettable service experience</p>
            <div class="flag-buttons" style="margin-top: 10px">
              <div
                v-for="(flag, index) in flags"
                :key="index"
                class="flag-button"
                :class="{ active: selectedCountry.country === flag.country }"
                @click="changeCountry(flag)"
              >
                <img :src="flag.image" alt="" />
                <p class="text-center" style="align-items: center; width: 60px">
                  {{ flag.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="gc-dynamic">
            <h5 class="gc-country-name">
              <b>{{ selectedCountry.country.toUpperCase() }}</b>
            </h5>
            <div class="gc-address w">
              <p class="mb-4" style="width: 500px">
                {{ selectedCountry.address }}
              </p>
              <p class="" style="margin-top: 8px; width: 500px">
                {{ selectedCountry.address1 }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="flex justify-between -mt-4 md:-mt-10">
        <img src="/partner/sand.svg" class="w-[300px]" alt="" />
        <img src="/partner/sand2.svg" class="w-[300px] hidden" alt="" />
      </div>
    </section>
  </div>
</template>

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
      windowWidth: null,
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
      flags: [
        {
          country: "Hospital",
          name: "Hospital",
          image: "/partner/swip1.svg",
          address: `Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.`,
          address1: `Partner with us to advance cutting-edge biomedical research and enhance patient care together.`,
          email: "info@aibotproperties.com",
          phone: "+971-58-599-7430",
        },
        {
          country: "Diagnostic Labs",
          name: " Labs",
          image: "/partner/swip2.svg",
          address:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes.",
          address1: `Let us help you achieve your goals with precision and care.`,
          email: "info@parisbotproperties.com",
          phone: "+33-1-2345-6789",
        },
        {
          country: "Pharmaceutical",
          name: "Pharma",
          image: "/partner/swip3.svg",
          address:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions.",
          address1: `By focusing on prevention, treatment, and education, we aim to make a positive impact.`,
          email: "info@genevabotproperties.com",
          phone: "+41-22-1234-5678",
        },
        {
          country: "Hospital",
          name: "Hospital",
          image: "/partner/swip1.svg",
          address: `Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.`,
          address1: `Partner with us to advance cutting-edge biomedical research and enhance patient care together.`,
          email: "info@aibotproperties.com",
          phone: "+971-58-599-7430",
        },
        {
          country: "Diagnostic Labs",
          name: " Labs",
          image: "/partner/swip2.svg",
          address:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes.",
          address1: `Let us help you achieve your goals with precision and care.`,
          email: "info@parisbotproperties.com",
          phone: "+33-1-2345-6789",
        },
        {
          country: "Pharmaceutical",
          name: "Pharma",
          image: "/partner/swip3.svg",
          address:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions.",
          address1: `By focusing on prevention, treatment, and education, we aim to make a positive impact.`,
          email: "info@genevabotproperties.com",
          phone: "+41-22-1234-5678",
        },
      ],
      selectedCountry: {
        country: "Hospital",
        name: "Hospital",
        image: "/partner/swip1.svg",
        address: `Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.`,
        address1: `Partner with us to advance cutting-edge biomedical research and enhance patient care together.`,
        email: "info@aibotproperties.com",
        phone: "+971-58-599-7430",
      },
    };
  },
  computed: {
    showBackgroundImage() {
      return this.windowWidth >= 1024; // Show image if width is >= 1024px
    },
  },
  methods: {
    changeCountry(flag) {
      this.selectedCountry = flag;
    },
    updateWindowWidth() {
      if (typeof window !== "undefined") {
        this.windowWidth = window.innerWidth; // Update the window width
      }
    },
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

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleSection(section) {
      this.expandedSection = this.expandedSection === section ? null : section;
    },
  },
  mounted() {
    AOS.init();
    this.updateWindowWidth(); // Set initial window width
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth); // Clean up the event listener
  },
};
</script>
<style scoped>
/* Country name in the background */
.background-country-name {
  position: absolute;
  top: 20%;
  right: 5%;
  z-index: 1; /* Make sure it’s behind the content */
  font-size: 100px; /* Make it large */
  color: rgba(0, 0, 0, 0.1); /* Light gray for background effect */
  font-weight: bold;
  transform: translateY(-50%); /* Center it vertically */
  pointer-events: none; /* Make sure it doesn’t interfere with interactions */
}

.flag-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 0.9rem;
}

.flag-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.global-container {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 3rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 0.5s linear;
  position: relative;
  z-index: 2; /* Main content on top of the background text */
}

.gc-static h2 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .responsive-heading {
    width: 600px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .responsive-heading {
    width: 500px;
  }
}

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
