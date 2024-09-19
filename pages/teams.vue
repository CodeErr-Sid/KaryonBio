<template>
  <div>
    <section
      class="w-full relative overflow-hidden md:h-auto pb-20 lg:h-[600px]"
      :class="['', isOpen ? ' h-screen ' : ' ']"
    >
      <div>
        <nav
          class="relative z-[9999] md:h-auto flex items-center justify-between px-4 py-2 md:py-6 md:px-4 xl:px-20"
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
              'md:flex lg:gap-6 gap-6 text-[#F5F7FA]   text-[20px]',
              isOpen ? 'block ' : 'hidden',
            ]"
            class="absolute top-0 left-0 w-full transition-all duration-300 -z-40 md:bg-none md:top-20 md:static md:w-auto md:block"
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
              >MyTeam</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 px-4 md:px-0 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/contact"
              >Contact</nuxt-link
            >
          </div>
        </nav>
      </div>
      <div>
        <img
          src="/teams/rotate.png"
          class="absolute object-contain w-full md:hidden -top-12 m o"
          alt="hero-dot"
        />
        <img
          src="/teams/hero.svg"
          class="absolute hidden object-contain w-full md:block -top-12 m o"
          alt="hero-dot"
        />
      </div>

      <div
        class="relative z-10 text-[#F5F7FA] items-center justify-center pt-5 px-4 lg:pt-[63px] md:flex-row md:px-6 xl:px-10"
      >
        <div :class="['', isOpen ? ' hidden ' : 'block ']">
          <!-- Typewriter effect here -->
          <h1
            class="text-[35px] lg:text-[52px] font-semibold leading-[40px] lg:leading-[63px] text-center"
          >
            Introduce You to <br class="hidden lg:block" />Our Experts
          </h1>

          <h1
            class="md:text-xl text-base font-semibold mt-5 lg:mt-10 l md:leading-[30px] text-center"
          >
            The list of our team with years of <br />
            professional experiences
          </h1>
        </div>
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
            class="relative overflow-hidden transition-all duration-300 h-[700px] md:h-[670px] lg:h-[750px] md:w-[360px] lg:w-auto xl:w-[400px] rounded-xl shadow-md"
          >
            <!-- Image and Basic Info -->
            <div class="">
              <div
                class="flex flex-col items-center pt-10 px-4 md:px-10 justify-center mx-auto bg-[#EDF6FB]"
              >
                <img
                  :src="expert.image"
                  :alt="expert.name"
                  class="w-[400px] rounded-full 0"
                />
                <div class="flex items-center justify-center px-4">
                  <p
                    class="bg-[#307BC4] text-[#F5F7FA] w-[292px] py-2 px-2 lg:px-4 rounded-t-2xl font-semibold text-sm lg:text-lg"
                  >
                    {{ expert.position }}
                  </p>
                </div>
              </div>

              <h3
                class="lg:text-2xl text-sm px-4 mt-2 lg:px-9 text-satrt font-bold text-[#2B3A4B] mb-2"
              >
                {{ expert.name }}
              </h3>
            </div>

            <!-- Expand button -->
            <div>
              <p
                class="text-[#9CABB6] px-2 md:px-4 lg:px-[45px] text-balance mb-2"
              >
                <span>Hi, I'm {{ expert.name }}</span> {{ expert.description }}
                <span
                  @click="openModal(index)"
                  class="w-full py-2 text-[#307BC4] cursor-pointer"
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
                <img src="/social-icons/2.svg" alt="facebook" />
              </a>
              <a
                class="text-[#3B5998] bg-[#83B0DC] cursor-pointer w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img src="/social-icons/1.svg" alt="linkedin" />
              </a>
              <a
                class="text-[#3B5998] bg-[#83B0DC] cursor-pointer w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img src="/social-icons/3.svg" alt="facebook" />
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
        {
          name: "Dr. Rajasekaran - Principal Scientist, Imaging Research",
          position: "Principal Scientist, Imaging Research",
          image: "/teams/expert4.png",
          description: `Dr. Rajasekaran, with over 26 years of experience in the technology and healthcare 
sectors, is a seasoned expert in AI-driven imaging research and clinical`,
          fullDescription: `Dr. Rajasekaran, with over 26 years of experience in the technology and healthcare sectors, is a seasoned expert in AI-driven imaging research and clinical diagnostics. Holding a Ph.D. in Computer Science, Dr. Raj has led high-value programs across various geographies, specializing in imaging platforms and AI/ML applications in healthcare.
At Karyon Bio, Dr. Raj spearheads the imaging research initiatives, focusing on the development 
of advanced imaging pipelines and AI/ML-driven diagnostic tools for biomarker discovery. His expertise includes digitizing tissue biopsy, radiology imaging, and applying deep learning models to analyze complex imaging data, enhancing the precision of non-invasive diagnostics.
Dr. Raj’s work is distinguished by his ability to integrate AI technologies with clinical workflows, leading to significant advancements in cancer diagnostics, including a patented AI-driven breast cancer diagnostic workflow. His leadership in imaging research continues to drive innovation at Karyon Bio, contributing 
to the development of next-generation biomarker discovery tools that are set to revolutionize patient care.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Mahati Munikoti, Senior Research Scientist, Bioinformatics",
          position: "Senior Research Scientisth",
          image: "/teams/expert5.png",
          description: `Mahati is an accomplished Bioinformatics Data Scientist with a 
          proven track record in leveraging AI and machine learning for biomarker discover`,
          fullDescription: `Mahati is an accomplished Bioinformatics Data Scientist with a 
          proven track record in leveraging AI and machine learning for biomarker discovery. With a Master’s in Bioinformatics from Indiana University and a Bachelor’s in Biotechnology, Mahati excels at applying advanced computational techniques to genetic research.
Previously, she developed predictive models for gene biomarker identification, significantly
 advancing the classification of diseases like cancer and diabetic retinopathy using deep
  learning. Mahati also enhanced data accessibility through biomedical ontologies and NLP,
   and her expertise in Next-Generation Sequencing (NGS) supports informed decision-making in drug discovery.
Proficient in Python, R, TensorFlow, and PyTorch, Mahati is adept at leading interdisciplinary
 teams to create innovative AI-driven solutions. Her work is driven by a passion for precision medicine and improving patient outcomes through cutting-edge bioinformatics.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Janiel Jawahar Kirubakaran, Senior Research Scientist AI/ML",
          position: "Senior Research Scientist AI/ML",
          image: "/teams/expert6.png",
          description: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized
           medicine. At KaryonBio, Janiel drives innovation `,
          fullDescription: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized
           medicine. At KaryonBio, Janiel drives innovation by applying advanced machine learning models 
           and deep learning architectures to complex biological data, including genomic and proteomic 
           datasets. His work in natural language processing (NLP) and explainable AI (XAI) has significantly
            advanced the field, enabling the discovery of novel biomarkers and enhancing the transparency of AI predictions in healthcare.
Janiel is currently pursuing his PhD focused on applying Explainable AI and Deep Learning for anticancer drug
 response prediction using pharmacogenomics and environmental data. He has published research in top journals
  and presented at international conferences, showcasing his ability to bridge AI technology with practical biomedical applications.
Janiel excels in cross-functional collaboration, working closely with biologists, chemists, 
and software engineers to integrate AI solutions into research workflows. His commitment to advancing 
personalized medicine is reflected in his continuous contributions to the scientific community, mentoring 
young scientists, and participating in open-source projects.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Lipi Singh, Advisor",
          position: " Advisor",
          image: "/teams/expert7.png",
          description: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and
           healthcare strategy with over 16 years of experience in advancing patient care, clinical 
           research, and therapeutic innovations. Holding a Ph.D. in Pancreatology and Experimental 
           Medicine, along with an`,
          fullDescription: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and
           healthcare strategy with over 16 years of experience in advancing patient care, clinical 
           research, and therapeutic innovations. Holding a Ph.D. in Pancreatology and Experimental 
           Medicine, along with an MBA in Biotechnology Administration and Management, Dr. Singh has
            led groundbreaking research in stem cell therapies and chronic disease management.
          As an Advisor at Karyon Bio, Dr. Singh brings her extensive expertise in biomedical research,
         data analytics, and strategic leadership to support the development of AI/ML-driven biomarker
        discovery. Her work focuses on integrating multi-omics data and leveraging advanced computational 
        tools to uncover novel therapeutic targets and enhance the precision of medical treatments.
       Dr. Singh's career is marked by her contributions to clinical trials, quality control in 
       biotherapeutics, and the commercialization of regenerative medicine products. Her advisory 
      role at Karyon Bio is complemented by her commitment to fostering innovation in healthcare 
        through cutting-edge`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Keerthi Harikrishnan, Advisor",
          position: "Advisor",
          image: "/teams/expert7.png",
          description: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over 
          a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug
           discovery, and clinical research.`,
          fullDescription: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over 
          a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug
           discovery, and clinical research. Holding a Ph.D. in Biomedical Sciences and currently
            pursuing an MBA in Digital Business, Dr. Harikrishnan has made significant contributions
             to the field by developing AI/ML-driven solutions that enhance diagnostic workflows and 
             advance scientific research.
As an advisor at Karyon Bio, Dr. Harikrishnan leverages her deep expertise in computational 
pathology, omics analysis, and healthcare data standards to guide the integration of AI/ML 
in biomarker discovery. Her leadership in building domain-centric solutions and strategic
 partnerships has been instrumental in driving innovation and improving diagnostic accuracy
  in clinical settings.
Dr. Harikrishnan’s work is characterized by her ability to translate complex scientific 
concepts into actionable insights, leading to impactful outcomes in drug discovery and precision
 medicine. Her role at Karyon Bio is crucial in advancing the company's mission to revolutionize 
 healthcare through cutting-edge AI/ML applications.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
      ],
      isModalOpen: false,
      selectedExpert: null, // Track the selected expert for full description
    };
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
  },
};
</script>

<style scoped>
/* Tailwind transition classes for smooth animations */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter,
.fade-scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

.fade-scale-leave-active {
  opacity: 0;
}

.custom-scroll {
  overflow-y: auto; /* Enable vertical scrolling */
  height: 16rem; /* Adjust height as needed */
}

/* Hide scrollbar for WebKit browsers (Chrome, Safari) */
.custom-scroll::-webkit-scrollbar {
  display: none; /* Hide scrollbar */
}

/* Hide scrollbar for Firefox */
.custom-scroll {
  scrollbar-width: none; /* Hide scrollbar */
}
</style>
