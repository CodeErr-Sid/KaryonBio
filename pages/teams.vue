<template>
  <div>
    <section
      class="w-full relative overflow-hidden md:h-auto pb-20 lg:h-[600px]"
      :class="['', isOpen ? ' h-screen ' : ' ']"
    >
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
        class="relative z-10 mt-20 md:mt-28 text-[#F5F7FA] items-center justify-center pt-5 px-4 lg:pt-[63px] md:flex-row md:px-6 xl:px-10"
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
            class="relative overflow-hidden transition-all duration-300 md:h-[600px] md:w-[360px] lg:w-auto xl:w-[400px] rounded-xl shadow-md"
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
              class="flex items-center justify-center w-full gap-4 mb-5 md:absolute bottom-4"
            >
              <a
                class="text-[#3B5998] bg-[#83B0DC] cursor-pointer w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img src="/social-icons/1.svg" alt="linkedin" />
              </a>
            </div>
          </div>

          <transition name="fade-scale">
            <div
              v-if="isModalOpen"
              @click="closeModal"
              class="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black bg-opacity-50"
            >
              <div
                data-aos="fade-down"
                class="relative z-10 w-full p-2 md:h-[350px] transition-transform duration-300 ease-in-out transform scale-95 bg-white shadow-lg md:p-6 md:max-w-4xl rounded-xl"
              >
                <button
                  @click="closeModal"
                  class="absolute w-10 h-10 p-2 font-bold text-red-900 top-2 right-2"
                >
                  <img src="/teams/close.svg" alt="close" />
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
                    <!-- Social Links -->
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
                    <h4
                      class="text-sm mt-2 md:text-lg font-bold text-[#2B3A4B] text-start"
                    >
                      Expertise:
                    </h4>
                    <p class="mt-2 text-xs text-gray-700 md:text-sm text-start">
                      {{ selectedExpert.expertise }}
                    </p>
                    <h4
                      class="text-sm mt-2 md:text-lg font-bold text-[#2B3A4B] text-start"
                    >
                      Role in the Company:
                    </h4>
                    <p
                      class="mt-2 text-xs text-gray-700 md:mt-4 md:text-sm text-start"
                    >
                      {{ selectedExpert.role }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section
      class="flex items-center justify-center mt-4 mb-4 md:mt-10 md:mb-10"
    >
      <div class="md:w-[550px] relative">
        <img src="/partner/jelly.svg " class="relative" alt="" />
        <div class="absolute inset-0 mt-10 md:mt-10">
          <h1
            class="text-xl md:text-[53px] font-bold text-center text-[#307BC4]"
          >
            Don’t Let Your Health Take a Backseat!
          </h1>
          <p class="text-sm md:text-[20px] text-center text-[#307BC4]">
            Schedule an appointment with one of our experienced medical
            professionals today!
          </p>
        </div>
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
      experts: [
        {
          name: "Srinivas Thirunagari, Founder & CEO",
          position: "Founder & CEO",
          image: "/teams/expert1.png",
          description: `Srinivas leverages over two decades of experience in computer vision and AI. With a strong foundation in Biomedical Engineering and Computer Science, Srinivas has expertise that spans AI-driven diagnostics.`,
          fullDescription: `Srinivas Thirunagari brings over two decades of experience in computer vision and AI. With an educational foundation in Biomedical Engineering and Computer Science, he has made significant contributions to AI-driven diagnostics and video processing. His expertise also extends to integrating large language models (LLMs) into healthcare solutions.`,
          expertise: `Srinivas specializes in leveraging AI technologies to transform diagnostic solutions. His work focuses on using computer vision and AI to create non-invasive diagnostic methods, providing innovative healthcare solutions.`,
          role: `As the Founder & CEO of Karyon Bio, Srinivas leads the company's mission to develop AI-powered solutions for the early diagnosis, prognosis, and treatment of liver disorders, specifically NAFLD/NASH.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Eckart Bindewald, Principal Scientist - AI/ML",
          position: "Principal Scientist - AI/ML",
          image: "/teams/expert2.png",
          description: `Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research.`,
          fullDescription: `Dr. Eckart Bindewald holds a Ph.D. in Natural Sciences from the University of Heidelberg, Germany. With over 20 years of experience in bioinformatics and computational biology, he has published more than 30 peer-reviewed papers, specializing in structural bioinformatics and protein structure prediction.`,
          expertise: `Dr. Bindewald has developed advanced computational approaches for protein fold recognition, RNA structure prediction, and genome annotation. His expertise includes biomarker discovery, multi-omics integration, and applying machine learning to biomedical research.`,
          role: `At Karyon Bio, Dr. Bindewald leads the AI/ML initiatives, focusing on biomarker discovery and applying deep learning to enhance diagnostic tool accuracy. His research aims to harness artificial intelligence to discover new biomarkers and therapeutic targets, advancing personalized medicine.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Dhatchana Moorthy, Principal Scientist - Biomarker Research",
          position: "Principal Scientist - Biomarker Research",
          image: "/teams/expert3.png",
          description: `Dr. Dhatchana Moorthy brings over 25 years of expertise in drug discovery, biomarker research, and biotherapeutics, with a focus on gene therapy and targeted small molecules.`,
          fullDescription: `Dr. Dhatchana Moorthy holds a Ph.D. in Pharmaceutical Science and Biochemistry, with over 25 years of experience in drug discovery, biomarker research, and biotherapeutics. He has led numerous research initiatives, particularly in gene therapy and targeted small molecules.`,
          expertise: `Dr. Moorthy is an expert in genomics, computational drug discovery, and AI/ML-driven biomarker research. His contributions have been crucial in developing targeted therapies and advancing the digital transformation of pharmaceutical manufacturing.`,
          role: `As Principal Scientist at Karyon Bio, Dr. Moorthy leads the biomarker research team. He applies his expertise in genomics and machine learning to identify and validate novel biomarkers for liver disorders, particularly NAFLD/NASH, to drive precision medicine forward.`,
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
          description: `Dr. Rajasekaran has a Ph.D. in Computer Science and over 26 years of experience in AI-driven imaging research and clinical diagnostics.`,
          fullDescription: `Dr. Rajasekaran has a Ph.D. in Computer Science and over 26 years of experience in AI-driven imaging research and clinical diagnostics. His career spans both technology and healthcare, with a focus on applying AI/ML to diagnostic imaging.`,
          expertise: `Dr. Rajasekaran specializes in developing AI algorithms for medical imaging, including MRI, CT, and X-ray analysis. His work has significantly advanced diagnostic accuracy and enabled early detection of diseases.`,
          role: `At Karyon Bio, Dr. Rajasekaran leads the imaging research team, developing advanced AI-driven diagnostic tools. His innovations, particularly in cancer diagnostics, have contributed to the precision of the company’s biomarker discovery efforts.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Mahati Munikoti, Senior Research Scientist, Bioinformatics",
          position: "Senior Research Scientist",
          image: "/teams/expert5.png",
          description: `Mahati is an accomplished Bioinformatics Data Scientist with a proven track record in leveraging AI and machine learning for biomarker discovery.`,
          fullDescription: `Mahati is an accomplished Bioinformatics Data Scientist with a proven track record in leveraging AI and machine learning for biomarker discovery. With a Master’s in Bioinformatics from Indiana University and a Bachelor’s in Biotechnology, Mahati excels at applying advanced computational techniques to genetic research.`,
          expertise: `Mahati specializes in predictive models for gene biomarker identification, deep learning applications for disease classification, and enhancing data accessibility through biomedical ontologies. Her work with Next-Generation Sequencing (NGS) supports informed decision-making in drug discovery.`,
          role: `As a Senior Research Scientist at Karyon Bio, Mahati applies advanced AI and machine learning techniques to biomarker discovery. She leads interdisciplinary teams to create innovative AI-driven solutions, improving patient outcomes in precision medicine.`,
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
          description: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized medicine.`,
          fullDescription: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized medicine. At Karyon Bio, Janiel drives innovation by applying advanced machine learning models and deep learning architectures to complex biological data, including genomic and proteomic datasets.`,
          expertise: `Janiel has made significant contributions to biomarker discovery, leveraging NLP, deep learning, and explainable AI. His work is regularly published in top journals and presented at international conferences, focusing on the intersection of AI and biomedical applications.`,
          role: `At Karyon Bio, Janiel is a Senior Research Scientist driving innovation in biomarker discovery. His focus on AI and machine learning techniques is advancing personalized medicine through the analysis of complex biological datasets.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Lipi Singh, Advisor",
          position: "Advisor",
          image: "/teams/expert7.png",
          description: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and healthcare strategy with over 16 years of experience in advancing patient care, clinical research, and therapeutic innovations.`,
          fullDescription: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and healthcare strategy with over 16 years of experience in advancing patient care, clinical research, and therapeutic innovations. Holding a Ph.D. in Pancreatology and Experimental Medicine, along with an MBA in Biotechnology Administration, Dr. Singh has led groundbreaking research in stem cell therapies and chronic disease management.`,
          expertise: `Dr. Singh specializes in stem cell therapy research, chronic disease management, and biotherapeutics. Her work in clinical trials and regenerative medicine has driven advances in patient care and therapeutic innovations.`,
          role: `As an Advisor at Karyon Bio, Dr. Singh guides the integration of AI/ML into biomarker discovery and healthcare strategies. She plays a pivotal role in advancing personalized medicine and therapeutic development, focusing on regenerative medicine and clinical trials.`,
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Dr. Keerthi Harikrishnan, Advisor",
          position: "Advisor",
          image: "/teams/expert8.png",
          description: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug discovery, and clinical research.`,
          fullDescription: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug discovery, and clinical research. Holding a Ph.D. in Biomedical Sciences and currently pursuing an MBA in Digital Business, Dr. Harikrishnan has made significant contributions to the field by developing AI/ML-driven solutions that enhance diagnostic workflows and advance scientific research.`,
          expertise: `Dr. Harikrishnan has developed solutions in computational pathology and omics analysis, improving diagnostic workflows and drug discovery. Her leadership has been instrumental in creating AI-based solutions that enhance clinical accuracy.`,
          role: `As an Advisor at Karyon Bio, Dr. Harikrishnan helps guide AI/ML integration in biomarker discovery and clinical research. Her leadership in advancing oncology and cardiology diagnostics contributes to Karyon Bio's mission of driving personalized medicine through AI-based innovations.`,
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
  mounted() {
    AOS.init();
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
