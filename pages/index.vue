<template>
  <div class="text-example">
    <section
      class="relative w-full overflow-hidden bg-gradient-to-r from-[#1F80AE] to-[#1F3B60]"
      :class="['', isOpen ? ' h-screen ' : ' ']"
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
              'md:flex lg:gap-6 gap-6 mt-20 md:mt-0 text-[#F5F7FA]   text-[20px]',
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
        src="/hero-dot.svg"
        class="absolute top-0 hidden opacity-50 md:block -left-10 md:-left-28"
        alt="hero-dot"
        :class="['', isOpen ? ' hidden' : ' ']"
      />

      <div
        class="flex flex-col items-center justify-between px-4 md:flex-row md:px-6 xl:px-10"
      >
        <div :class="['', isOpen ? 'hidden ' : 'block']">
          <!-- Typewriter effect here -->
          <h1 class="text-4xl font-bold text-white leading-[50px]">
            Empowering Precision Liver Health
          </h1>
          <p id="typewriter" class="mt-2 text-xl font-semibold text-white"></p>
        </div>
        <img
          src="/round.png"
          class="md:w-[450px] xl:w-auto"
          alt="round"
          :class="['', isOpen ? ' hidden' : ' ']"
        />
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
          class="text-[#274760B3] text-center text-base md:text-[24.47px] md:text-center lg:w-[450px] xl:w-[538px] md:leading-[34px]"
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
              class="hidden w-8 mt-2 md:w-12 md:block"
              alt="right-arrow"
            />

            <p
              class="text-[#274760B3] text-center text-base md:text-[24.47px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
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
              class="hidden w-8 mt-2 md:w-12 md:block"
              alt="right-arrow"
            />

            <p
              class="text-[#274760B3] text-center text-base md:text-[24.47px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
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
    <section class="lg:py-16 bg-[#F5F7FA] px-4 mt-4 mb-4 md:mt-0">
      <div class="container mx-auto text-center">
        <!-- Section Title -->
        <h2 class="text-4xl font-bold pt-10 text-[#2B3A4B] mb-2 md:mb-12">
          Our Team
        </h2>

        <div
          class="grid items-center justify-center w-full grid-cols-1 gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <!-- Card (for each team member) -->
          <div
            v-for="(expert, index) in experts"
            :key="index"
            class="relative overflow-hidden transition-all duration-300 h-[600px] md:w-[360px] lg:w-auto xl:w-[400px] rounded-xl shadow-md"
          >
            <!-- Image and Basic Info -->
            <div class="">
              <div
                class="flex flex-col items-center pt-4 px-4 md:px-6 justify-center mx-auto bg-[#EDF6FB]"
              >
                <img
                  :src="expert.image"
                  :alt="expert.name"
                  class="w-[200px] rounded-full 0"
                />
                <div class="flex items-center justify-center px-4 mt-2">
                  <p
                    class="bg-[#307BC4] text-[#F5F7FA] w-[292px] py-2 px-2 lg:px-4 rounded-t-2xl font-semibold text-sm lg:text-lg"
                  >
                    {{ expert.position }}
                  </p>
                </div>
              </div>

              <h3
                class="lg:text-lg text-sm px-4 mt-2 lg:px-6 text-satrt font-bold text-[#2B3A4B] mb-2"
              >
                {{ expert.name }}
              </h3>
            </div>

            <!-- Expand button -->
            <div>
              <p
                class="text-[#9CABB6] px-2 md:px-4 lg:px-[35px] text-balance mb-2"
              >
                <span>Hi, I'm {{ expert.name }}</span> {{ expert.description }}
                <span
                  @click="openModal(index)"
                  class="w-full py-2 text-[#307BC4] underline cursor-pointer"
                >
                  Read More
                </span>
              </p>
            </div>
            <div
              class="absolute flex items-center justify-center w-full gap-4 mb-5 bottom-4"
            >
              <a
                class="text-[#3B5998] bg-[#83B0DC] cursor-pointer w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img src="/social-icons/1.svg" alt="linkedin" />
              </a>
            </div>
          </div>

          <!-- Full-Screen Modal -->
          <!-- Full-Screen Modal -->
          <!-- Full-Screen Modal -->
          <transition name="fade-scale">
            <div
              v-if="isModalOpen"
              class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div
                class="relative z-10 w-full p-2 md:h-[350px] transition-transform duration-300 ease-in-out transform scale-95 bg-white shadow-lg md:p-6 md:max-w-4xl rounded-xl"
              >
                <button
                  @click="closeModal"
                  class="absolute w-10 h-10 p-2 font-bold text-red-900 top-2 right-2"
                >
                  X
                </button>
                <!-- Modal Content -->
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <!-- Small Card -->
                  <div class="p-2 rounded-lg md:p-4 bg-gray-50">
                    <div
                      class="flex items-center justify-center w-24 h-24 mx-auto bg-gray-100 rounded-full md:mb-4"
                    >
                      <img
                        :src="selectedExpert.image"
                        :alt="selectedExpert.name"
                        class="w-24 h-24 rounded-full"
                      />
                    </div>
                    <h3 class="text-sm md:text-xl font-semibold text-[#2B3A4B]">
                      {{ selectedExpert.name }}
                    </h3>
                    <p class="mb-4 text-gray-500">
                      {{ selectedExpert.position }}
                    </p>
                    <!-- LinkedIn Button -->
                    <div class="flex justify-center gap-2 md:gap-4 md:mb-5">
                      <a
                        class="text-[#3B5998] bg-[#83B0DC] cursor-pointer md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        <img src="/social-icons/2.svg" alt="facebook" />
                      </a>
                      <a
                        class="text-[#3B5998] bg-[#83B0DC] cursor-pointer md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        <img src="/social-icons/1.svg" alt="linkedin" />
                      </a>
                      <a
                        class="text-[#3B5998] bg-[#83B0DC] cursor-pointer md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        <img src="/social-icons/3.svg" alt="twitter" />
                      </a>
                    </div>
                  </div>

                  <!-- Expanded Info -->
                  <!-- Expanded Info -->
                  <div
                    class="rounded-lg md:p-4 md:h-64 bg-gray-50 custom-scroll"
                  >
                    <h4
                      class="text-sm md:text-lg font-semibold text-[#2B3A4B] text-start"
                    >
                      Hi, I'm {{ selectedExpert.name }}
                    </h4>
                    <p
                      class="mt-2 text-xs text-gray-700 md:mt-4 md:text-sm text-start"
                    >
                      {{ selectedExpert.fullDescription }}
                    </p>
                  </div>
                </div>

                <!-- Close Button -->
              </div>
            </div>
          </transition>
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
          image: "/teams/expert1.png",
          description: `Srinivas leverages over two decades of experience in computer
           vision and AI. With a strong foundation in Biomedical Engineering and Computer
            Science, Srinivas has expertise that spans AI-driven diagnostics,`,
          fullDescription: `Srinivas leverages over two decades of experience in computer
           vision and AI. With a strong foundation in Biomedical Engineering and Computer
            Science, Srinivas has expertise that spans AI-driven diagnostics, video processing,
             and the integration of LLMs into healthcare solutions.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Principal Scientist - AI/ML",
          position: "Dr. Eckart Bindewald, Principal Scientist - AI/ML",
          image: "/teams/expert2.png",
          description:
            "Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research. He holds a Ph.D. in Natural Sciences from the ",
          fullDescription: `Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research. He holds a Ph.D. in Natural Sciences from the University of Heidelberg, Germany, specializing in structural bioinformatics and protein structure prediction.
Dr. Eckart Bindewald has more than 30 peer reviewed publications in the areas of bioinformatics and machine learning. He developed computational approaches for protein fold recognition, RNA structure prediction and design, nucleic acid nanotechnology as well as genome annotation.  He taught courses in  bioinformatics, mathematics, machine learning and AI.
Dr. Bindewald has made significant contributions to the field of biomarker discovery, mainly through integrating multi-omics data and advanced machine-learning techniques. His work has been pivotal in advancing the understanding of RNA and protein structures and developing novel computational tools for RNA and DNA structure prediction and design.
At Karyon Bio, Dr. Bindewald leads the AI/ML initiatives, driving innovations in biomarker discovery by leveraging his extensive experience in generative AI, deep learning, and data mining. His research efforts are focused on harnessing the power of artificial intelligence to uncover new biomarkers and therapeutic targets, ultimately advancing personalized medicine.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Dhatchana Moorthy, Principal Scientist - Biomarker Researchi",
          position: "Principal Scientist - Biomarker Research",
          image: "/teams/expert3.png",
          description:
            "Dr. Eckart Bindewald is a seasoned bioinformatics and computational.",
          fullDescription: `Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research. He holds a Ph.D. in Natural Sciences from the University of Heidelberg, Germany, specializing in structural bioinformatics and protein structure prediction.`,
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
    openModal(index) {
      document.body.style.overflow = "hidden";

      this.selectedExpert = this.experts[index];
      this.isModalOpen = true;
    },
    closeModal() {
      document.body.style.overflow = "auto";
      this.isModalOpen = false;
      this.selectedExpert = null;
    },
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
