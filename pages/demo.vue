<template>
  <div id="wrapper">
    <div id="content">
      <div class="spacer"></div>
      <div class="accordions">
        <div class="accordion">
          <div class="title">INNOVATIVE TECHNOLOGY</div>
          <div class="text">
            Stay ahead in liver disease diagnostics with our cutting-edge AI and
            multi-omics platform. Our technology enables earlier detection and
            more precise insights for better outcomes. Partner with us to
            revolutionize liver health diagnostics.
          </div>
        </div>
        <div class="accordion">
          <div class="title">Diagnostic Labs</div>
          <div class="text">
            We provide tailored solutions to meet your unique needs. Our
            approach is personalized, focusing on delivering the most effective
            outcomes. Let us help you achieve your goals with precision and care
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
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "primary" });

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

import { onMounted, nextTick } from "vue";

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
        start: "top top",
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

<style scoped>
body {
  margin: 0;
  background: linear-gradient(120deg, #5c2fa6 13.57%, #5a36c0 98.38%);
  font-family: sans-serif;
  scroll-behavior: none;
}

.title {
  font-size: max(2vw, 24px);
  line-height: 1.1;
  padding-bottom: 0.4em;
  color: rgb(255, 255, 255);
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
  background: linear-gradient(
    200deg,
    rgb(29, 145, 252) 13.57%,
    rgb(90, 54, 192) 98.38%
  );
  width: max(50vw, 280px);
  padding: 25px 30px 10px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
}

.accordion:nth-child(2) {
  background: linear-gradient(
    200deg,
    rgb(242, 136, 133) 13.57%,
    rgb(233, 79, 102) 98.38%
  );
}

.accordion:nth-child(3) {
  background: linear-gradient(
    200deg,
    rgb(101, 187, 118) 13.57%,
    rgb(70, 111, 171) 98.38%
  );
}

.accordion:nth-child(4) {
  background: linear-gradient(200deg, #c215d1 13.57%, #9813a1 98.38%);
}

.spacer {
  height: 70vh;
}

@media (max-width: 480px) {
  .accordion {
    padding: 15px 20px 8px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
