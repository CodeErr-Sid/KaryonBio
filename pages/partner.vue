<template>
  <div>
    <section
      class="relative w-full h-screen md:h-auto lg:h-screen overflow-hidden bg-gradient-to-r from-[#1F5179] to-[#1F709C] md:bg-none xl:bg-gradient-to-r xl:from-[#1F5179] xl:to-[#1F709C]"
      :class="['', isOpen ? '  ' : ' ']"
    >
      <!-- SVG background image -->
      <img
        src="/partner/hero.svg"
        class="absolute top-0 hidden md:block xl:opacity-10"
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
      class="text-xl md:text-[35px] lg:text-[52px] text-black md:mt-[60px] pt-4 font-semibold leading-[40px] lg:leading-[63px] text-center"
    >
      Why Partner with Karyon Bio?
    </h1>
    <section
      class="w-full md:hidden py-4 md:py-0 bg-gradient-to-r from-[#0C264A] to-[#1F3B60]"
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
    <div id="wrapper" class="hidden md:block">
      <div id="content">
        <!-- <div class="spacer"></div> -->
        <div class="px-4 mt-4 xl:mt-40 accordions">
          <div class="accordion">
            <div class="title">INNOVATIVE TECHNOLOGY</div>
            <div class="text">
              Stay ahead in liver disease diagnostics with our cutting-edge AI
              and multi-omics platform. Our technology enables earlier detection
              and more precise insights for better outcomes. Partner with us to
              revolutionize liver health diagnostics.
            </div>
          </div>
          <div class="accordion">
            <div class="title">Diagnostic Labs</div>
            <div class="text">
              We provide tailored solutions to meet your unique needs. Our
              approach is personalized, focusing on delivering the most
              effective outcomes. Let us help you achieve your goals with
              precision and care
            </div>
          </div>
          <div class="accordion">
            <div class="title">Hospital</div>
            <div class="text">
              Together, we can enhance global liver health outcomes through
              collaboration and innovative solutions. By focusing on prevention,
              treatment, and education, we aim to make a positive impact. Let’s
              work to promote healthier lives worldwide.
            </div>
          </div>
        </div>
        <!-- <div class="spacer"></div> -->
      </div>
    </div>
    <section class="relative z-30 w-full px-4 bg-white">
      <section class="h-full text-center bg-white">
        <div
          class="relative z-20 flex flex-col items-start justify-center h-full gap-12 text-left transition-all duration-500 md:-mt-40 global-container"
          :style="{
            backgroundImage: showBackgroundImage
              ? 'url(' + selectedCountry.image + ')'
              : 'none',
            backgroundSize: '400px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10% top 20%',
          }"
        >
          <!-- Country name in the background, hidden on mobile/tablet -->
          <div
            class="absolute text-center -top-20 right-0 -z-10 text-gray-300 font-bold pointer-events-none text-[60px]"
            v-if="windowWidth >= 1024"
          >
            <b
              class="w-full text-center"
              :class="{
                'pr-28': selectedCountry.country.toUpperCase() === 'HOSPITAL',
              }"
              v-html="selectedCountry.country.toUpperCase()"
            ></b>
          </div>

          <div class="w-full lg:py-8 lg:w-auto gc-static">
            <h1
              class="w-full text-2xl font-bold text-center lg:text-4xl md:text-start elevate-text"
            >
              Elevate your wealth in biomedical <br class="hidden md:block" />
              research!
            </h1>
            <p class="mt-2 text-center md:text-start">
              Team up with us today for an unforgettableservice experience
            </p>
            <div
              class="flex flex-wrap items-center justify-center gap-4 mt-2 md:justify-start md:items-start flag-buttons"
            >
              <div
                v-for="(flag, index) in flags"
                :key="index"
                class="w-16 h-16 mb-2 transition-transform duration-200 bg-center bg-cover border-2 border-gray-300 rounded-full cursor-pointer flag-button"
                :class="{ active: selectedCountry.country === flag.country }"
                @click="changeCountry(flag)"
              >
                <img
                  :src="flag.image"
                  alt=""
                  class="w-full h-full rounded-full"
                />
                <p class="w-16 text-center">{{ flag.name }}</p>
              </div>
            </div>
          </div>
          <div class="gc-dynamic lg:w-[500px]">
            <h5 class="text-lg font-bold gc-country-name">
              <b>{{ selectedCountry.bgName.toUpperCase() }}</b>
            </h5>
            <div class="gc-address">
              <p class="mb-4">
                {{ selectedCountry.address }}
              </p>
              <p style="margin-top: 8px">
                {{ selectedCountry.address1 }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="flex justify-between mt-4 md:mt-0 xl:mt-10">
      <img src="/partner/sand.svg" class="md:w-[400px]" alt="" />
      <img src="/partner/sand2.svg" class="hidden md:block" alt="" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, nextTick } from "vue";

useHead({
  script: [
    {
      src: "https://unpkg.co/gsap@3/dist/gsap.min.js",
    },
    {
      src: "https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js",
    },
  ],
});

onMounted(() => {
  nextTick(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof ScrollSmoother !== "undefined") {
      ScrollSmoother.create({
        content: "#content",
        wrapper: "#wrapper",
        smooth: true,
        effects: false,
        normalizeScroll: true,
      });
    } else {
      console.error("ScrollSmoother is not defined");
    }

    // The rest of your animation code...

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordions",
        pin: true,
        start: "top 100px", // Start when the top of .accordions is 20px from the top of the viewport
        end: "bottom top",
        scrub: 1,
        ease: "linear",
      },
    });

    tl.to(".accordion .text", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    tl.to(
      ".accordion",
      {
        marginBottom: -15,
        stagger: 0.5,
      },
      "<"
    );
  });
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
          bgName: "Hospital",
          name: "Hospital",
          image: "/partner/slide3.svg",
          address: `Partner with us for an exceptional, personalized service experience that drives success and innovation. Let's ignite progress together.`,
          address1: `Partner with us to advance cutting-edge biomedical research and enhance patient care together.`,
          email: "info@aibotproperties.com",
          phone: "+971-58-599-7430",
        },
        {
          bgName: "Diagnostic Labs",
          country: "Diagnostic <br/> Labs",
          name: " Labs",
          image: "/partner/slide2.svg",
          address:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes.",
          address1: `Let us help you achieve your goals with precision and care.`,
          email: "info@parisbotproperties.com",
          phone: "+33-1-2345-6789",
        },
        {
          country: "Pharmaceutical",
          bgName: "Pharmaceutical",
          name: "Pharma",
          image: "/partner/slide4.svg",
          address:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions.",
          address1: `By focusing on prevention, treatment, and education, we aim to make a positive impact.`,
          email: "info@genevabotproperties.com",
          phone: "+41-22-1234-5678",
        },
        {
          country: "Clinical Trial <br/> Organizations",
          bgName: "Clinical Trial Organizations",
          name: "Clinical ",
          image: "/partner/slide1.svg",
          address: `prove trial precision and efficiency with our AI based bio=arkers, offering =ore accurate patient 
selection and =onitoring.`,
          address1: `Partner Oith us to advance cutting-edge biomedical 
research and enhance patients together.`,
          email: "info@aibotproperties.com",
          phone: "+971-58-599-7430",
        },
      ],
      selectedCountry: {
        country: "Hospital",
        bgName: "Hospital",
        name: "Hospital",
        image: "/partner/slide3.svg",
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

.title {
  font-size: max(2vw, 24px);
  line-height: 1.1;
  padding-bottom: 0.4em;
  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.text {
  font-size: max(1vw, 15px);
  line-height: 1.4;
  overflow: hidden;
  padding-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.accordions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
}

.accordion {
  background: linear-gradient(120deg, #1f5179, #1f709c);
  width: max(750px, 380px);
  padding: 25px 30px 10px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 1024px) {
  .accordion {
    max-width: 800px; /* Set max-width to 800px after 1024px */
  }
}

.accordion:nth-child(2) {
  background: linear-gradient(120deg, #1f5179, #1f709c);
}

.accordion:nth-child(3) {
  background: linear-gradient(120deg, #1f5179, #1f709c);
}

/* .spacer {
  height: 70vh;
} */

@media (max-width: 480px) {
  .accordion {
    padding: 15px 20px 8px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
