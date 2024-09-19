<template>
  <div class="text-example">
    <section
      class="relative w-full overflow-hidden bg-gradient-to-r from-[#1F80AE] to-[#1F3B60]"
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
              'md:flex gap-6 text-[#F5F7FA] items-center justify-center text-[20px]',
              isOpen ? 'block h-screen' : 'hidden',
            ]"
            class="absolute top-0 left-0 w-full transition-all duration-300 bg-custom-gradient md:bg-none md:top-20 md:static md:w-auto md:block"
          >
            <div class="w-full">
              <button
                @click="toggleMenu"
                class="flex items-end justify-end w-full px-4 mt-4 text-white md:hidden focus:outline-none"
              >
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
            <nuxt-link
              class="block py-2 xl:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/"
              >Home</nuxt-link
            >
            <nuxt-link
              class="block py-2 xl:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/about"
              >About</nuxt-link
            >
            <nuxt-link
              class="block py-2 xl:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/services"
              >Services</nuxt-link
            >
            <nuxt-link
              class="block py-2 xl:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/casestudies"
              >Casestudies</nuxt-link
            >
            <nuxt-link
              class="block py-2 xl:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/contact"
              >Contact</nuxt-link
            >
          </div>
        </nav>
      </div>

      <!-- SVG background image -->
      <img
        src="/hero-dot.svg"
        class="absolute top-0 opacity-50 -left-10 md:-left-28"
        alt="hero-dot"
      />

      <div
        class="flex flex-col items-center justify-between px-4 md:flex-row md:px-6 xl:px-10"
      >
        <div>
          <!-- Typewriter effect here -->
          <h1 class="text-4xl font-bold text-white leading-[50px]">
            Empowering Precision Liver Health
          </h1>
          <p id="typewriter" class="mt-2 text-xl font-semibold text-white"></p>
        </div>
        <img src="/round.png" class="md:w-[450px] xl:w-auto" alt="round" />
      </div>
    </section>
    <section class="mt-4 mb-4 md:mt-10 md:px-10">
      <h1
        class="text-[25px] md:text-[52px] font-bold text-center text-[#274760]"
      >
        About Us
      </h1>
      <p
        class="text-base md:text-[25px] font-semibold text-center text-[#307BC4]"
      >
        PRO HEALTH
      </p>
      <div class="flex justify-center px-4 mt-4 md:mt-10 md:px-0">
        <p
          class="text-[#274760B3] text-base md:text-[24.47px] md:text-center lg:w-[450px] xl:w-[538px] md:leading-[34px]"
        >
          At Karyon Bio, we revolutionize liver disease management with our
          innovative, AI-powered biomarker and drug discovery solutions.
        </p>
      </div>
      <div
        class="md:mt-[30px] px-4 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between"
      >
        <img
          src="/about.png"
          class="object-contain xl:object-none md:w-[450px]"
          alt="hero"
        />
        <div class="flex flex-col mt-4 md:mt-[62px]">
          <div class="flex items-start justify-center gap-2 md:gap-6">
            <img
              src="/right-arrow.svg"
              class="w-8 mt-2 md:w-12"
              alt="right-arrow"
            />

            <p
              class="text-[#274760B3] text-base md:text-[24.47px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
            >
              By seamlessly integrating multi-omics data, clinical insights,
              literature mining, and advanced imaging techniques, our
              non-invasive platform offers early diagnosis, accurate prognosis,
              and personalized treatment strategies for NAFLD/NASH and other
              liver disorder
            </p>
          </div>
          <div class="flex items-start justify-center gap-2 md:gap-6">
            <img
              src="/right-arrow.svg"
              class="w-8 mt-2 md:w-12"
              alt="right-arrow"
            />

            <p
              class="text-[#274760B3] text-base md:text-[24.47px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
            >
              Our proprietary AI algorithm technology detects NAFLD at its
              inception, predicts disease progression, and identifies tailored
              therapeutic options. With a commitment to precision medicine,
              Karyon Bio is at the forefront of transforming liver care,
              providing patients and healthcare providers with the tools they
              need for better health outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="w-full px-4 md:px-6 bg-gradient-to-r pb-4 from-[#307BC4] to-[#85B1DC]"
    >
      <div
        class="flex lg:flex-row flex-col pt-10 md:pt-[100px] justify-between"
      >
        <div class="xl:w-[718px]">
          <h1 class="text-[#3AD9FF] font-semibold text-[25px] md:text-[36px]">
            WHY
          </h1>
          <p
            class="ttext-[25px] md:text-[36px] font-medium text-[#F5F7FA] mt-2 md:mt-6 md:leading-[46px]"
          >
            Chronic liver disease is the only top ten global killer on the rise
          </p>
          <p
            class="text-[#F5F7FA] text-xl md:text-[29px] font-normal border-l-2 border-[#3AD9FF] mt-2 md:mt-5 pl-2 md:pl-[23px]"
          >
            "Liver disease is the third leading cause of premature death.”
            <span class="text-[19px]"
              >UK Health Security Agency, July 2021</span
            >
          </p>
          <p class="text-[#F5F7FA] text-sm md:text-2xl mt-[20px]">
            Without effective therapies, the only resort for many patients
            remains a liver transplant. However the supply of healthy donor
            organs cannot meet what’s required, with minorities
            disproportionately disadvantaged. 
          </p>
          <div class="flex justify-center gap-2 md:gap-6">
            <img src="/play.svg" class="" alt="right-arrow" />
            <p
              class="md:text-[20px] text-sm text-[#F5F7FA] mt-4 md:leading-[26px]"
            >
              Jack O’Meara on how improving outcomes for liver transplant
              patients is a first step towards treating chronic liver disease 
            </p>
          </div>
        </div>
        <img
          src="/graph.png"
          class="w-full lg:w-[450px] md:h-[383px] mt-4 md:mt-20"
          alt="why"
        />
      </div>
    </section>
    <section class="lg:py-16 lg:px-10 bg-[#F5F7FA] px-4">
      <div class="container mx-auto text-center">
        <!-- Section Title -->
        <h2 class="text-4xl font-bold text-[#2B3A4B] mb-12">Our Experts</h2>

        <!-- Expert Cards -->
        <div class="grid grid-cols-1 md:gap-4 lg:gap-8 md:grid-cols-3">
          <!-- Use v-for to loop through the experts array -->
          <div
            v-for="(expert, index) in experts"
            :key="index"
            class="bg-white shadow-md md:rounded-xl"
          >
            <div class="bg-[#EDF6FB] rounded-t-xl">
              <img
                :src="expert.image"
                :alt="expert.name"
                class="h-[378px] mx-auto"
              />
            </div>

            <div class="md:px-4 lg:px-8">
              <div
                class="bg-[#307BC4] text-[#F5F7FA] py-2 px-2 lg:px-4 rounded-t-2xl font-semibold text-sm lg:text-lg mb-4"
              >
                {{ expert.position }}
              </div>
            </div>
            <h3
              class="lg:text-2xl text-sm md:px-4 lg:px-8 font-bold text-[#2B3A4B] mb-2"
            >
              {{ expert.name }}
            </h3>
            <p class="text-[#7A7A7A] md:px-4 lg:px-8 mb-6">
              {{ expert.description }}
            </p>
            <div class="flex justify-center gap-4">
              <a
                :href="expert.social.facebook"
                class="text-[#3B5998] hover:text-[#365492]"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                :href="expert.social.twitter"
                class="text-[#00ACEE] hover:text-[#0084D1]"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                :href="expert.social.linkedin"
                class="text-[#0077B5] hover:text-[#0061A8]"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
definePageMeta({ layout: "primary" });
export default {
  data() {
    return {
      isOpen: false,
      experts: [
        {
          name: "Srinivas Thirunagari, Founder & CEO",
          position: "Founder & CEO",
          image: "/expert1.png",
          description:
            "Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine. She has a special interest in critical care and trauma management.",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Eckart Bindewald, Principal Scientist - AI/ML",
          position: "Principal Scientist - AI/ML",
          image: "/expert2.png",
          description:
            "Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research. He holds a Ph.D. in Natural Sciences.",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Dhatchana Moorthy, Principal Scientist - Biomarker Research",
          position: "Principal Scientist-Biomark.Res",
          image: "/expert3.png",
          description:
            "Dr. Dhatchana Moorthy is a pharmaceutical scientist with over 25 years of experience in drug discovery, biomarker research, and biotherapeutics. With a Ph.D. in Pharmaceutical Science and Biochemistry.",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
      ],
    };
  },
  mounted() {
    // Call the typewriter effect after the component is mounted
    this.typeWriterEffect(
      " AI-Driven Novel Biomarker Discovery",
      "typewriter",
      100
    );
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    typeWriterEffect(text, elementId, speed) {
      let i = 0;
      const element = document.getElementById(elementId);
      const typeWriter = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed); // Continue typing
        }
      };
      typeWriter(); // Start typing
    },
  },
};
</script>
<style scoped>
.text-example {
  font-family: "FutureW01", sans-serif;
}
</style>
