<template>
  <div class="text-example">
    <section
      class="relative w-full overflow-hidden bg-gradient-to-r from-[#1F80AE] to-[#1F3B60]"
    >
      <nav class="relative z-10 flex items-center justify-between px-20 py-6">
        <img src="/logo.svg" alt="logo" class="w-28 h-28" />
        <div class="flex gap-6 text-[#F5F7FA] text-[20px]">
          <nuxt-link class="hover:text-[#3AD9FF] cursor-pointer" to="/"
            >Home</nuxt-link
          >
          <nuxt-link class="hover:text-[#3AD9FF] cursor-pointer" to="/about"
            >About</nuxt-link
          >
          <nuxt-link class="hover:text-[#3AD9FF] cursor-pointer" to="/blog"
            >Services</nuxt-link
          >
          <nuxt-link class="hover:text-[#3AD9FF] cursor-pointer" to="/blog"
            >Casestudies</nuxt-link
          >
          <nuxt-link class="hover:text-[#3AD9FF] cursor-pointer" to="/contact"
            >Contact</nuxt-link
          >
        </div>
      </nav>

      <!-- SVG background image -->
      <img
        src="/hero-dot.svg"
        class="absolute top-0 opacity-50 -left-28"
        alt="hero-dot"
      />

      <div class="flex items-center justify-between px-10">
        <div>
          <!-- Typewriter effect here -->
          <h1 class="text-4xl font-bold text-white leading-[50px]">
            Empowering Precision Liver Health
          </h1>
          <p id="typewriter" class="mt-2 text-xl font-semibold text-white"></p>
        </div>
        <img src="/round.png" alt="round" />
      </div>
    </section>
    <section class="px-10 mt-10">
      <h1 class="text-[52px] font-bold text-center text-[#274760]">About Us</h1>
      <p class="text-[25px] font-semibold text-center text-[#307BC4]">
        PRO HEALTH
      </p>
      <div class="flex justify-center mt-10">
        <p
          class="text-[#274760B3] text-[24.47px] text-center w-[538px] leading-[34px]"
        >
          At Karyon Bio, we revolutionize liver disease management with our
          innovative, AI-powered biomarker and drug discovery solutions.
        </p>
      </div>
      <div class="mt-[30px] flex justify-between">
        <img src="/about.png" alt="hero" />
        <div class="flex flex-col mt-[62px]">
          <div class="flex items-start justify-center gap-6">
            <img src="/right-arrow.svg" class="mt-2" alt="right-arrow" />

            <p class="text-[#274760B3] text-[24.47px] w-[580px]">
              By seamlessly integrating multi-omics data, clinical insights,
              literature mining, and advanced imaging techniques, our
              non-invasive platform offers early diagnosis, accurate prognosis,
              and personalized treatment strategies for NAFLD/NASH and other
              liver disorder
            </p>
          </div>
          <div class="flex items-start justify-center gap-6">
            <img src="/right-arrow.svg" class="mt-2" alt="right-arrow" />

            <p class="text-[#274760B3] text-[24.47px] w-[580px]">
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
    <section class="w-full px-6 bg-gradient-to-r from-[#307BC4] to-[#85B1DC]">
      <div class="flex pt-[100px] justify-between">
        <div class="w-[718px]">
          <h1 class="text-[#3AD9FF] font-semibold text-[36px]">WHY</h1>
          <p class="text-[36px] font-medium text-[#F5F7FA] mt-6 leading-[46px]">
            Chronic liver disease is the only top ten global killer on the rise
          </p>
          <p
            class="text-[#F5F7FA] text-[29px] font-normal border-l-2 border-[#3AD9FF] mt-5 pl-[23px]"
          >
            "Liver disease is the third leading cause of premature death.”
            <span class="text-[19px]"
              >UK Health Security Agency, July 2021</span
            >
          </p>
          <p class="text-[#F5F7FA] text-2xl mt-[20px]">
            Without effective therapies, the only resort for many patients
            remains a liver transplant. However the supply of healthy donor
            organs cannot meet what’s required, with minorities
            disproportionately disadvantaged. 
          </p>
          <div class="flex justify-center gap-6">
            <img src="/play.svg" class="" alt="right-arrow" />
            <p class="text-[20px] text-[#F5F7FA] mt-4 leading-[26px]">
              Jack O’Meara on how improving outcomes for liver transplant
              patients is a first step towards treating chronic liver disease 
            </p>
          </div>
        </div>
        <img src="/graph.png" class="h-[383px] mt-20" alt="why" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // Call the typewriter effect after the component is mounted
    this.typeWriterEffect(
      " AI-Driven Novel Biomarker Discovery",
      "typewriter",
      100
    );
  },
  methods: {
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
