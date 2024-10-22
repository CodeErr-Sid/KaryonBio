<template>
  <div class="font-futura">
    <!-- <MouseFollower /> -->
    <section
      class="relative w-full md:h-screen overflow-hidden bg-gradient-to-l from-[#1f3b60] to-[#1f80ae] md:bg-[url('/about/home1.png')] bg-no-repeat md:bg-cover"
      :class="['', isOpen ? '  ' : ' ']"
    >
      <!-- <img
        src="/about/home.svg"
        class="absolute object-cover w-full h-full md:w-auto lg:w-[700px] hidden md:block -left-10 md:-left-[350px] lg:-left-[200px] xl:-left-[100px]"
        alt="hero-dot"
        :class="['', isOpen ? ' hidden' : ' ']"
      />

      <img
        src="/about/home1.svg"
        class="absolute -top-36 lg:w-[700px] hidden md:block -left-10 md:-left-[350px] lg:-left-[200px] xl:-left-[100px]"
        alt="hero-dot"
        :class="['', isOpen ? ' hidden' : ' ']"
      /> -->
      <div
        class="flex flex-col items-center justify-center px-4 mt-20 lg:-mt-10 md:flex-row md:px-6 xl:pl-20"
      >
        <div
          class="relative lg:left-20"
          :class="['', isOpen ? 'hidden ' : 'block']"
        >
          <!-- Typewriter effect here -->
          <h1
            class="text-4xl xl:text-[50px] font-bold z-20 relative text-white leading-[50px] xl:leading-[80px]"
          >
            Empowering Precision Liver Health
          </h1>
          <p
            id="typewriter"
            class="relative z-20 mt-2 text-sm font-semibold text-white md:text-xl"
          ></p>
        </div>
        <!-- <img
          src="/round.png"
          class="md:w-[450px] xl:w-auto"
          alt="round"
          :class="['', isOpen ? ' hidden' : ' ']"
        /> -->
        <div class="relative">
          <img
            data-aos="flip-left"
            src="/liver.svg"
            class="w-[200px] top-28 lg:top-72 left-14 lg:left-[200px] md:right-20 lg:right-0 z-20 absolute"
            alt="liver"
          />

          <div>
            <Spinner />
          </div>
        </div>
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
          class="text-[#274760B3] text-center text-base md:text-[20px] md:text-center lg:w-[450px] xl:w-[538px] md:leading-[34px]"
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
              class="text-[#274760B3] text-center md:text-start text-base md:text-[20px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
            >
              By seamlessly integrating
              <span class="font-semibold text-[#307BC4]">multi-omics data</span
              >, clinical insights, literature mining, and advanced Imaging
              techniques, our non-invasive platform offers early diagnosis,
              accurate prognosis, and personalized treatment strategies for
              <span class="font-semibold text-[#307BC4]">NAFLD/NASH</span> and
              other liver disorder
            </p>
          </div>
          <div class="flex items-start justify-center gap-2 mt-2 md:gap-6">
            <img
              src="/right-arrow.svg"
              class="hidden w-8 mt-2 md:w-12 md:block"
              alt="right-arrow"
            />

            <p
              class="text-[#274760B3] text-center md:text-start text-base md:text-[20px] md:leading-[34px] lg:w-[450px] xl:w-[580px]"
            >
              Our proprietary
              <span class="font-semibold text-[#307BC4]"
                >AI algorithm technology detects NAFLD</span
              >
              at its inception, predicts disease progression, and identifies
              tailored therapeutic options. With a commitment to
              <span class="font-semibold text-[#307BC4]">
                precision medicine</span
              >, Karyon Bio is at the forefront of
              <span class="font-semibold text-[#307BC4]">
                transforming liver care</span
              >, providing patients and healthcare providers with the tools they
              need for better health outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="w-full px-4 md:px-6 bg-gradient-to-r pb-10 from-[#307BC4] to-[#85B1DC]"
    >
      <div
        class="flex lg:flex-row flex-col py-10 md:py-[100px] justify-center items-center"
      >
        <div class="">
          <h1
            class="text-white text-center font-bold text-[25px] md:text-[36px]"
          >
            Why Karyon Bio
          </h1>
          <p
            class="text-[25px] md:text-[30px] font-medium text-[#F5F7FA] mt-2 md:mt-6 md:leading-[46px]"
          >
            Chronic liver disease is the only top ten global killer on the rise
          </p>
          <p
            class="text-[#F5F7FA] text-xl md:text-[20px] font-normal border-l-2 border-[#3AD9FF] mt-2 md:mt-5 pl-2 md:pl-[23px]"
          >
            "Liver disease is the third leading cause of premature death.”
            <span class="text-[19px]"
              >UK Health Security Agency, July 2021</span
            >
          </p>
          <p
            class="text-[#F5F7FA] text-sm md:text-[20px] md:leading-8 mt-[20px]"
          >
            Without effective therapies, the only resort for many patients
            remains a liver transplant. However the supply of healthy donor
            organs cannot meet what’s required, with minorities
            disproportionately disadvantaged. 
          </p>
          <!-- <div class="flex justify-center gap-2 md:gap-6">
            <img src="/play.svg" class="" alt="right-arrow" />
            <p
              class="md:text-[20px] text-sm text-[#F5F7FA] mt-4 md:leading-[26px]"
            >
              Jack O’Meara on how improving outcomes for liver transplant
              patients is a first step towards treating chronic liver disease 
            </p>
          </div> -->
        </div>
      </div>
    </section>
    <section class="px-4 pt-12 bg-gray-100 md:pb-20 md:px-6">
      <div
        class="flex flex-col items-start justify-center gap-2 space-y-6 lg:items-center md:flex-row md:space-y-0"
      >
        <!-- SVG Section -->

        <!-- Text Section -->
        <div class="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <div class="flex flex-col">
            <p
              class="text-base md:text-[20px] md:leading-[34px] text-[#274760B3]"
            >
              An estimated 20% of patients with NASH will develop cirrhosis, and
              NASH is predicted to become the leading indication for liver
              transplants in the US. The mortality rate among patients with NASH
              is substantially higher than the general population or patients
              without this inflammatory subtype of NAFLD
            </p>
            <i
              class="pt-4 text-start cursor-pointer text-[#307BC4] text-[20px] font-semibold"
            >
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32207804/"
                target="_blank"
              >
                Click For Lab Report</a
              ></i
            >
          </div>
        </div>

        <div class="flex justify-center w-full md:w-1/2">
          <!-- Replace this path with the actual path to your SVG file -->
          <img
            src="/percent2.svg"
            alt="90 percent SVG"
            class="w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center h-screen md:h-auto justify-center mt-10 md:mt-0 py-10 md:py-0 bg-[#1F3B60] md:bg-white md:pt-20 last"
      id="zoom-in"
    >
      <h1
        class="text-xl px-4 md:text-4xl text-center font-bold md:-mt-20 text-white md:text-black md:leading-[50px]"
      >
        Empowering Precision Liver Health
      </h1>
      <p
        class="text-white md:text-black text-center mt-4 md:mt-4 md:w-[600px] px-4 md:h-[220px]"
      >
        This project aims to leverage advanced technologies to enhance liver
        health through precise and personalized medical insights and solutions.
      </p>
      <div
        class="bg-gradient-to-r hidden md:block pt-10 md:pt-20 relative from-[#1F80AE] text-[#1F80AE] to-[#1F3B60] w-full h-[150px] md:h-[300px]"
      >
        x
      </div>
      <div
        class="flex items-center justify-center w-full overflow-hidden md:absolute"
      >
        <img src="/zoom.jpg" class="mt-4 rounded-md" alt="Zoom In Image" />
      </div>
    </section>

    <section class="px-4 py-12 bg-gray-100 md:px-6">
      <div
        class="flex flex-col items-start justify-center gap-2 space-y-6 lg:items-center md:flex-row md:space-y-0"
      >
        <!-- SVG Section -->
        <div class="flex justify-center w-full md:w-1/2">
          <!-- Replace this path with the actual path to your SVG file -->
          <img
            src="/percent.svg"
            alt="90 percent SVG"
            class="md:w-[500px] h-auto"
          />
        </div>

        <!-- Text Section -->
        <div class="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <div class="flex flex-col">
            <p
              class="text-base md:text-[20px] md:leading-[34px] text-[#274760B3]"
            >
              Global prevalence of NAFLD is 25.24% (95% CI: 22.10-28.65) with
              highest prevalence in the Middle East and South America and lowest
              in Africa.
            </p>
            <i
              class="pt-4 text-start cursor-pointer text-[#307BC4] text-[20px] font-semibold"
            >
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26707365/"
                target="_blank"
              >
                Click For Lab Report</a
              ></i
            >
          </div>
        </div>
      </div>
    </section>

    <h1
      class="text-xl md:text-[35px] lg:text-[52px] text-black lg:mt-[60px] pt-4 font-semibold leading-[40px] lg:leading-[63px] text-center"
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
                  class="text-sm md:text-[25px] md:w-[800px] md:leading-8 text-start font-semibold"
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
    <div id="wrapper" class="hidden md:h-[1500px] overflow-hidden md:block">
      <div id="content">
        <!-- <div class="spacer"></div> -->
        <div class="px-4 mt-4 md:px-0 xl:mt-40 accordions">
          <div
            v-for="(item, index) in accordions"
            :key="index"
            class="accordion"
          >
            <div class="mb-4 title">{{ item.title }}</div>
            <div class="flex items-start justify-between">
              <p
                class="w-[500px] text-base md:text-[20px] md:leading-[34px] text-white text"
              >
                {{ item.description }}
              </p>
              <p class="text-[200px] font-bold number text-white">
                {{ item.number }}.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="spacer"></div> -->
      </div>
    </div>
    <section
      id="ourTeamTitle"
      class="lg:py-16 relative z-20 bg-[#F5F7FA] px-4 mt-4 mb-4 10 md:mt-0"
    >
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
            v-for="(expert, index) in showAllExperts
              ? experts
              : experts.slice(0, 3)"
            :key="index"
            class="relative overflow-hidden transition-all duration-300 md:h-[650px] pb-4 md:pb-0 md:w-[360px] lg:w-auto xl:w-[400px] rounded-xl shadow-md"
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
                <span> {{ expert.name }}</span> {{ expert.description }}
                <span
                  @click="openModal(index)"
                  class="w-full py-2 text-[#307BC4] underline cursor-pointer"
                >
                  Read More
                </span>
              </p>
            </div>
            <div
              class="flex items-center justify-center w-full gap-4 bottom-2 md:absolute"
            >
              <a
                :href="expert.linkedin"
                target="_blank"
                class="bg-gradient-to-r from-[#1F80AE] to-[#1F3B60] text-white cursor-pointer w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img src="/social-icons/1.svg" alt="linkedin" />
              </a>
            </div>
          </div>

          <transition name="fade-scale">
            <div
              v-if="isModalOpen"
              class="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black bg-opacity-50"
            >
              <div
                data-aos="fade-down"
                class="relative z-10 w-full p-2 md:h-[350px] transition-transform duration-300 ease-in-out transform scale-95 bg-white shadow-lg md:p-6 md:max-w-4xl rounded-xl"
              >
                <button
                  @click="closeModal"
                  class="absolute top-0 p-2 font-bold text-red-900 right-3.5 w-7 h-7"
                >
                  <img src="/close.svg" alt="close" />
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
                    <h3 class="text-sm md:text-xl font-semibold text-[#3B5998]">
                      {{ selectedExpert.name }}
                    </h3>
                    <p class="mb-4 text-gray-500">
                      {{ selectedExpert.position }}
                    </p>
                    <!-- Social Links -->
                    <div class="flex justify-center gap-2 md:gap-4 md:mb-5">
                      <a
                        :href="selectedExpert.linkedin"
                        target="_blank"
                        class="flex gap-2 bg-gradient-to-r from-[#1F80AE] to-[#1F3B60] cursor-pointer px-3 py-2 rounded-full justify-center items-center"
                      >
                        <!-- <img src="/social-icons/1.svg" alt="linkedin" /> -->
                        <p class="font-semibold text-white">linkedin</p>
                      </a>
                    </div>
                  </div>

                  <!-- Expanded Info -->
                  <div
                    class="rounded-lg md:p-4 md:h-64 bg-gray-50 custom-scroll"
                  >
                    <h4
                      class="text-sm md:text-lg font-semibold text-[#3B5998] text-start"
                    >
                      {{ selectedExpert.name }}
                    </h4>
                    <p
                      class="mt-2 text-xs text-gray-700 md:mt-4 md:text-sm text-start"
                    >
                      {{ selectedExpert.fullDescription }}
                    </p>
                    <h4
                      class="text-sm mt-2 md:text-lg font-bold text-[#3B5998] text-start"
                    >
                      Expertise:
                    </h4>
                    <p class="mt-2 text-xs text-gray-700 md:text-sm text-start">
                      {{ selectedExpert.expertise }}
                    </p>
                    <h4
                      class="text-sm mt-2 md:text-lg font-bold text-[#3B5998] text-start"
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
      <div class="flex items-center justify-center w-full mt-5">
        <button
          @click="toggleExperts"
          class="bg-gradient-to-r from-[#1F80AE] to-[#1F3B60] text-white rounded-md font-semibold p-2"
        >
          {{ showAllExperts ? "Show Less" : "Know Our Team" }}
        </button>
      </div>
    </section>
    <section class="relative w-full bg-white pt-80 md:pt-40 md:px-0">
      <div class="absolute bottom-0 flex justify-between w-full mt-4">
        <img src="/partner/sand.svg" class="lg:w-[700px] lg:h-[220px]" alt="" />
        <img src="/partner/sand2.svg" class="hidden -mt-20 lg:block" alt="" />
      </div>
      <section class="lg:h-[600px] px-4 text-center bg-white">
        <div
          class="relative z-20 flex flex-col items-start justify-center h-full gap-12 text-left transition-all duration-500 global-container"
          :style="{
            backgroundImage:
              selectedCountry.country === flags.country // Apply specific image for index 3
                ? 'url(' + flags.image + ')'
                : showBackgroundImage
                ? 'url(' + selectedCountry.image + ')'
                : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10% top 100%',
          }"
        >
          <!-- Country name in the background, hidden on mobile/tablet -->
          <div
            class="absolute text-center -top-20 right-4 -z-10 text-gray-300 font-bold pointer-events-none text-[60px]"
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

          <div class="w-full -mt-72 lg:py-8 lg:w-auto gc-static">
            <h1
              class="w-full text-2xl font-bold text-center lg:text-4xl md:text-start elevate-text"
            >
              Elevate your wealth in biomedical <br class="hidden md:block" />
              research!
            </h1>
            <p class="mt-2 mb-4 text-center md:text-start">
              Team up with us today for an unforgettable service experience
            </p>
            <div
              class="flex flex-wrap items-center justify-center gap-6 mt-2 md:gap-4 md:justify-start md:items-start flag-buttons"
            >
              <div
                v-for="(flag, index) in flags"
                :key="index"
                class="w-16 h-16 md:w-[70px] md:h-[70px] mb-2 transition-transform duration-200 bg-center bg-cover border-2 rounded-full cursor-pointer flag-button"
                :class="{
                  active: selectedCountry.country === flag.country,
                  'border-[#1F3B60]':
                    selectedCountry === flag ||
                    selectedCountry === flags[index], // Add blue border when active
                  'border-gray-300':
                    selectedCountry !== flag &&
                    selectedCountry !== flags[index], // Default border for inactive
                }"
                @click="changeCountry(flag)"
              >
                <img
                  :src="flag.image"
                  alt=""
                  class="w-full h-full rounded-full"
                />
                <p
                  class="mt-2 text-base text-center"
                  :class="{
                    active: selectedCountry.country === flag.country,
                    'font-bold text-[#1F3B60]':
                      selectedCountry === flag ||
                      selectedCountry === flags[index], // Add blue font-bold text when active
                    ' text-black ':
                      selectedCountry !== flag &&
                      selectedCountry !== flags[index], // Default border for inactive
                  }"
                >
                  {{ flag.name }}
                </p>
              </div>
            </div>
          </div>
          <div class="gc-dynamic lg:w-[500px]">
            <h5 class="mb-4 text-2xl font-bold gc-country-name">
              <b>{{ selectedCountry.bgName.toUpperCase() }}</b>
            </h5>
            <div class="gc-address md:w-[600px]">
              <p
                class="text-base md:text-[20px] md:leading-[34px] w-full text-black text"
              >
                {{ selectedCountry.address }}
              </p>
              <p
                class="mb-4 -mt-5 text-base md:text-[20px] md:leading-[34px] text-black text"
              >
                {{ selectedCountry.address1 }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
      async: true,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js",
      async: true,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordions",
        pin: true,
        start: "top 100px",
        end: "bottom 100px top 100px",
        scrub: 1,
        ease: "linear",
      },
    });

    // Hide the text and number classes
    tl.to(".accordion .text, .accordion .number", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    // Reduce card height (accordion margin-bottom)
    tl.to(
      ".accordion",
      {
        marginBottom: -20, // Adjust this value to reduce the gap
        stagger: 0.5,
      },
      "<"
    );
  });
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const { innerWidth, innerHeight } = window;

    // Adjust dimensions based on screen size
    const initialWidth = innerWidth > 768 ? 400 : 200;
    const initialHeight = innerWidth > 768 ? 200 : 0;
    const zoomInWidth = innerWidth > 768 ? 800 : innerWidth * 0.9;
    const zoomInHeight = innerWidth > 768 ? 600 : innerHeight * 0.8;

    // Set the initial width based on the screen size
    const img = document.querySelector("#zoom-in img");
    img.style.width = `${initialWidth}px`;

    gsap.fromTo(
      img,
      {
        width: `${initialWidth}px`,
      },
      {
        width: `${zoomInWidth}px`,
        duration: 1,
        scrollTrigger: {
          trigger: "#zoom-in",
          pin: true,
          end: `+=${innerHeight * 1}`,
          scrub: 1,
          start: "top top",
        },
      }
    );
  }
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
      showAllExperts: false,
      accordions: [
        {
          title: "INNOVATIVE TECHNOLOGY",
          description:
            "Stay ahead in liver disease diagnostics with our cutting-edge AI and multi-omics platform. Our technology enables earlier detection and more precise insights for better outcomes. Partner with us to revolutionize liver health diagnostics.",
          number: "01",
        },
        {
          title: "Diagnostic Labs",
          description:
            "We provide tailored solutions to meet your unique needs. Our approach is personalized, focusing on delivering the most effective outcomes. Let us help you achieve your goals with precision and care.",
          number: "02",
        },
        {
          title: "Hospital",
          description:
            "Together, we can enhance global liver health outcomes through collaboration and innovative solutions. By focusing on prevention, treatment, and education, we aim to make a positive impact. Let's work to promote healthier lives worldwide.",
          number: "03",
        },
      ],

      experts: [
        {
          name: "Srinivas Thirunagari, Founder & CEO",
          position: "Founder & CEO",
          image: "/teams/expert1.png",
          description: `Srinivas leverages over two decades of experience in computer vision and AI. With a strong foundation in Biomedical Engineering and Computer Science, Srinivas has expertise that spans AI-driven diagnostics.`,
          fullDescription: `Srinivas Thirunagari brings over two decades of experience in computer vision and AI. With an educational foundation in Biomedical Engineering and Computer Science, he has made significant contributions to AI-driven diagnostics and video processing. His expertise also extends to integrating large language models (LLMs) into healthcare solutions.`,
          expertise: `Srinivas specializes in leveraging AI technologies to transform diagnostic solutions. His work focuses on using computer vision and AI to create non-invasive diagnostic methods, providing innovative healthcare solutions.`,
          role: `As the Founder & CEO of Karyon Bio, Srinivas leads the company's mission to develop AI-powered solutions for the early diagnosis, prognosis, and treatment of liver disorders, specifically NAFLD/NASH.`,
          linkedin: "https://www.linkedin.com/in/tsrinivas/",
        },
        {
          name: "Dr. Eckart Bindewald, Principal Scientist - AI/ML",
          position: "Principal Scientist - AI/ML",
          image: "/teams/expert2.png",
          description: `Dr. Eckart Bindewald is a seasoned bioinformatics and computational biology expert with over two decades of experience developing cutting-edge AI/ML algorithms for biomedical research.`,
          fullDescription: `Dr. Eckart Bindewald holds a Ph.D. in Natural Sciences from the University of Heidelberg, Germany. With over 20 years of experience in bioinformatics and computational biology, he has published more than 30 peer-reviewed papers, specializing in structural bioinformatics and protein structure prediction.`,
          expertise: `Dr. Bindewald has developed advanced computational approaches for protein fold recognition, RNA structure prediction, and genome annotation. His expertise includes biomarker discovery, multi-omics integration, and applying machine learning to biomedical research.`,
          role: `At Karyon Bio, Dr. Bindewald leads the AI/ML initiatives, focusing on biomarker discovery and applying deep learning to enhance diagnostic tool accuracy. His research aims to harness artificial intelligence to discover new biomarkers and therapeutic targets, advancing personalized medicine.`,
          linkedin: "https://www.linkedin.com/in/eckart-bindewald/",
        },
        {
          name: "Dr. Dhatchana Moorthy, Principal Scientist - Biomarker Research",
          position: "Principal Scientist - Biomarker Research",
          image: "/teams/expert3.png",
          description: `Dr. Dhatchana Moorthy brings over 25 years of expertise in drug discovery, biomarker research, and biotherapeutics, with a focus on gene therapy and targeted small molecules.`,
          fullDescription: `Dr. Dhatchana Moorthy holds a Ph.D. in Pharmaceutical Science and Biochemistry, with over 25 years of experience in drug discovery, biomarker research, and biotherapeutics. He has led numerous research initiatives, particularly in gene therapy and targeted small molecules.`,
          expertise: `Dr. Moorthy is an expert in genomics, computational drug discovery, and AI/ML-driven biomarker research. His contributions have been crucial in developing targeted therapies and advancing the digital transformation of pharmaceutical manufacturing.`,
          role: `As Principal Scientist at Karyon Bio, Dr. Moorthy leads the biomarker research team. He applies his expertise in genomics and machine learning to identify and validate novel biomarkers for liver disorders, particularly NAFLD/NASH, to drive precision medicine forward.`,
          linkedin: "https://www.linkedin.com/in/dhatchanamoorthy/",
        },
        {
          name: "Dr. Rajasekaran - Principal Scientist, Imaging Research",
          position: "Principal Scientist, Imaging Research",
          image: "/teams/expert4.png",
          description: `Dr. Rajasekaran has a Ph.D. in Computer Science and over 26 years of experience in AI-driven imaging research and clinical diagnostics.`,
          fullDescription: `Dr. Rajasekaran has a Ph.D. in Computer Science and over 26 years of experience in AI-driven imaging research and clinical diagnostics. His career spans both technology and healthcare, with a focus on applying AI/ML to diagnostic imaging.`,
          expertise: `Dr. Rajasekaran specializes in developing AI algorithms for medical imaging, including MRI, CT, and X-ray analysis. His work has significantly advanced diagnostic accuracy and enabled early detection of diseases.`,
          role: `At Karyon Bio, Dr. Rajasekaran leads the imaging research team, developing advanced AI-driven diagnostic tools. His innovations, particularly in cancer diagnostics, have contributed to the precision of the company’s biomarker discovery efforts.`,
          linkedin: "https://www.linkedin.com/in/sraja2911/",
        },
        {
          name: "Mahati Munikoti, Senior Research Scientist, Bioinformatics",
          position: "Senior Research Scientist",
          image: "/teams/expert5.png",
          description: `Mahati is an accomplished Bioinformatics Data Scientist with a proven track record in leveraging AI and machine learning for biomarker discovery.`,
          fullDescription: `Mahati is an accomplished Bioinformatics Data Scientist with a proven track record in leveraging AI and machine learning for biomarker discovery. With a Master’s in Bioinformatics from Indiana University and a Bachelor’s in Biotechnology, Mahati excels at applying advanced computational techniques to genetic research.`,
          expertise: `Mahati specializes in predictive models for gene biomarker identification, deep learning applications for disease classification, and enhancing data accessibility through biomedical ontologies. Her work with Next-Generation Sequencing (NGS) supports informed decision-making in drug discovery.`,
          role: `As a Senior Research Scientist at Karyon Bio, Mahati applies advanced AI and machine learning techniques to biomarker discovery. She leads interdisciplinary teams to create innovative AI-driven solutions, improving patient outcomes in precision medicine.`,
          linkedin: "https://www.linkedin.com/in/mahati-munikoti/",
        },
        {
          name: "Janiel Jawahar Kirubakaran, Senior Research Scientist AI/ML",
          position: "Senior Research Scientist AI/ML",
          image: "/teams/expert6.png",
          description: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized medicine.`,
          fullDescription: `Janiel is an AI/ML expert specializing in biomarker discovery and personalized medicine. At Karyon Bio, Janiel drives innovation by applying advanced machine learning models and deep learning architectures to complex biological data, including genomic and proteomic datasets.`,
          expertise: `Janiel has made significant contributions to biomarker discovery, leveraging NLP, deep learning, and explainable AI. His work is regularly published in top journals and presented at international conferences, focusing on the intersection of AI and biomedical applications.`,
          role: `At Karyon Bio, Janiel is a Senior Research Scientist driving innovation in biomarker discovery. His focus on AI and machine learning techniques is advancing personalized medicine through the analysis of complex biological datasets.`,
          linkedin:
            "https://www.linkedin.com/in/janiel-jawahar-kirubakaran-9b8433138/",
        },
        {
          name: "Dr. Lipi Singh, Advisor",
          position: "Advisor",
          image: "/teams/expert7.png",
          description: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and healthcare strategy with over 16 years of experience in advancing patient care, clinical research, and therapeutic innovations.`,
          fullDescription: `Dr. Lipi Singh is a distinguished expert in regenerative medicine and healthcare strategy with over 16 years of experience in advancing patient care, clinical research, and therapeutic innovations. Holding a Ph.D. in Pancreatology and Experimental Medicine, along with an MBA in Biotechnology Administration, Dr. Singh has led groundbreaking research in stem cell therapies and chronic disease management.`,
          expertise: `Dr. Singh specializes in stem cell therapy research, chronic disease management, and biotherapeutics. Her work in clinical trials and regenerative medicine has driven advances in patient care and therapeutic innovations.`,
          role: `As an Advisor at Karyon Bio, Dr. Singh guides the integration of AI/ML into biomarker discovery and healthcare strategies. She plays a pivotal role in advancing personalized medicine and therapeutic development, focusing on regenerative medicine and clinical trials.`,
          linkedin: "https://www.linkedin.com/in/dr-lipi-singh-b1434939/",
        },
        {
          name: "Dr. Keerthi Harikrishnan, Advisor",
          position: "Advisor",
          image: "/teams/expert8.png",
          description: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug discovery, and clinical research.`,
          fullDescription: `Dr. Keerthi Harikrishnan is a seasoned domain expert with over a decade of experience in healthcare R&D, specializing in oncology, cardiology, drug discovery, and clinical research. Holding a Ph.D. in Biomedical Sciences and currently pursuing an MBA in Digital Business, Dr. Harikrishnan has made significant contributions to the field by developing AI/ML-driven solutions that enhance diagnostic workflows and advance scientific research.`,
          expertise: `Dr. Harikrishnan has developed solutions in computational pathology and omics analysis, improving diagnostic workflows and drug discovery. Her leadership has been instrumental in creating AI-based solutions that enhance clinical accuracy.`,
          role: `As an Advisor at Karyon Bio, Dr. Harikrishnan helps guide AI/ML integration in biomarker discovery and clinical research. Her leadership in advancing oncology and cardiology diagnostics contributes to Karyon Bio's mission of driving personalized medicine through AI-based innovations.`,
          linkedin: "https://www.linkedin.com/in/keerthi-harikrishnan-4013a37/",
        },
      ],
      isModalOpen: false,
      selectedExpert: null,
      autoChangeInterval: null,
      selectedCountry: {},
      userClicked: false,
      windowWidth: 0,
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
          address: `prove trial precision and efficiency with our AI based bio   markers, offering  accurate patient 
selection and monitoring.`,
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
  mounted() {
    AOS.init();
    this.updateWindowWidth(); // Set initial window width
    window.addEventListener("resize", this.updateWindowWidth);

    // Initialize automatic change interval
    this.startAutoChange();

    // Call the typewriter effect after the component is mounted
    this.typeWriterEffect(
      " AI-Driven Novel Biomarker Discovery for Enhanced Diagnosis, Personalized Treatment Strategies, and Improved Clinical Outcomes",
      "typewriter",
      100
    );
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
    clearInterval(this.autoChangeInterval); // Clean up interval on destroy
  },
  methods: {
    toggleExperts() {
      this.showAllExperts = !this.showAllExperts;

      if (!this.showAllExperts) {
        // Scroll to the "Our Team" section
        this.$nextTick(() => {
          const ourTeamTitle = this.$el.querySelector("#ourTeamTitle");
          if (ourTeamTitle) {
            ourTeamTitle.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    },
    changeCountry(flag) {
      this.selectedCountry = flag; // Manual country change
    },
    updateWindowWidth() {
      if (typeof window !== "undefined") {
        this.windowWidth = window.innerWidth; // Update the window width
      }
    },
    // Automatic country change every 5 seconds
    changeCountry(flag) {
      this.selectedCountry = flag; // Change to the clicked country
      this.userClicked = true; // User clicked, so we set this flag

      // Clear current auto-change interval
      clearInterval(this.autoChangeInterval);

      // Restart auto-change after 10 seconds
      setTimeout(() => {
        this.userClicked = false;
        this.startAutoChange(); // Restart auto-change
      }, 5000); // 10 seconds pause after user click
    },

    startAutoChange() {
      let currentIndex = this.flags.indexOf(this.selectedCountry);
      // Clear any existing interval to prevent overlap
      clearInterval(this.autoChangeInterval);

      this.autoChangeInterval = setInterval(() => {
        // Skip auto-change if user has clicked and is within the 10-second pause
        if (this.userClicked) return;

        currentIndex = (currentIndex + 1) % this.flags.length;
        this.selectedCountry = this.flags[currentIndex];
      }, 3000); // Auto-change every 5 seconds
    },

    // Typewriter effect method (as is)
    typeWriterEffect(text, elementId, speed) {
      let i = 0;
      const element = document.getElementById(elementId);
      const typeWriter = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      };
      typeWriter();
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

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleSection(section) {
      this.expandedSection = this.expandedSection === section ? null : section;
    },
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
/* Tailwind transition classes for smooth animations */
#style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-2::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
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

/* WebKit browsers (Chrome, Safari) */
.custom-scroll::-webkit-scrollbar {
  width: 6px; /* Slim scrollbar width */
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent; /* Scrollbar track background */
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #83b0dc; /* Scrollbar thumb color */
  border-radius: 10px; /* Rounded scrollbar thumb */
}

/* Firefox */
.custom-scroll {
  scrollbar-width: thin; /* Slim scrollbar */
  scrollbar-color: #83b0dc transparent; /* Thumb color and track background */
}

#jelly-svg {
  transition: transform 0.5s ease, filter 0.3s ease;
  cursor: pointer;
}

#jelly-svg:hover {
  transform: scale(1.05) skewX(2deg);
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
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

.title {
  font-size: max(2vw, 24px);
  font-weight: 800;
  line-height: 1.1;
  padding-bottom: 0.4em;
  color: #ffffff;

  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.text {
  padding-bottom: 40px;
}

.accordions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
  height: auto; /* Ensure the container resizes with its content */
  overflow: hidden;
}

.accordion {
  background: linear-gradient(120deg, #1f5179, #1f709c);
  width: 100%; /* Make accordion take full width */
  max-width: 100%; /* Ensure the max-width is the full container width */
  padding: 25px 30px 10px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-bottom: 40px;
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 1024px) {
  .accordion {
    max-width: 100%; /* Ensure max-width is 100% after 1024px */
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
.future-text {
  font-family: "Future", sans-serif;
}
</style>
