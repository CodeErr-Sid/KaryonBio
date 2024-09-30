<template>
  <div class="mil-preloader" v-if="!isLoaded">
    <div class="mil-preloader-animation">
      <div class="mil-pos-abs mil-animation-1">
        <p class="mil-h3 mil-thin font-weight-600">Transforming</p>
        <p class="font-bold mil-h3 text-gradient">Liver Care</p>
        <p class="mil-h3 mil-thin font-weight-600">Through AI</p>
      </div>
      <div class="mil-pos-abs mil-animation-2">
        <div class="mil-reveal-frame">
          <p class="mil-reveal-box"></p>
          <p class="flex flex-col items-center justify-center mil-h3 mil-thin">
            <img src="/logo2.svg" class="w-[250px]" alt="logo" />
            karyon-bio-omega.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.initPreloader();
  },
  methods: {
    initPreloader() {
      const timeline = gsap.timeline();
      timeline.to(".mil-preloader-animation", {
        opacity: 1,
      });
      timeline.fromTo(
        ".mil-animation-1 .mil-h3",
        {
          y: "30px",
          opacity: 0,
        },
        {
          y: "0px",
          opacity: 1,
          stagger: 0.4,
        }
      );
      timeline.to(
        ".mil-animation-1 .mil-h3",
        {
          opacity: 0,
          y: "-30",
        },
        "+=0.3"
      );
      timeline.fromTo(
        ".mil-reveal-box",
        0.1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          x: "-30",
        }
      );
      timeline.to(
        ".mil-reveal-box",
        0.45,
        {
          width: "100%",
          x: 0,
        },
        "+=0.1"
      );
      timeline.to(".mil-reveal-box", {
        right: "0",
      });
      timeline.to(".mil-reveal-box", 0.3, {
        width: "0%",
      });
      timeline.fromTo(
        ".mil-animation-2 .mil-h3",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=0.5"
      );
      timeline.to(
        ".mil-animation-2 .mil-h3",
        0.6,
        {
          opacity: 0,
          y: "-30",
        },
        "+=0.5"
      );
      timeline.to(
        ".mil-preloader",
        0.8,
        {
          opacity: 0,
          ease: "sine",
        },
        "+=0.2"
      );
      timeline.fromTo(
        ".mil-up",
        0.8,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
          ease: "sine",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          onComplete: () => {
            this.isLoaded = true;
            this.$emit("preloader-complete"); // Emit the event here
          },
        },
        "-=1"
      );
    },
  },
};
</script>

<style scoped>
.mil-preloader {
  position: fixed;
  z-index: 9999999999999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255); /* Set background to white */
}

.mil-preloader .mil-preloader-animation {
  opacity: 0;
  position: relative;
  height: 100vh;
  color: rgb(0, 0, 0); /* Set text color to black */
}

.mil-preloader .mil-preloader-animation .mil-pos-abs {
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mil-preloader .mil-preloader-animation .mil-pos-abs p {
  opacity: 0;
  margin-right: 15px;
}

@media screen and (max-width: 992px) {
  .mil-preloader .mil-preloader-animation .mil-pos-abs {
    flex-direction: column;
  }
  .mil-preloader .mil-preloader-animation .mil-pos-abs p {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
  position: relative;
  padding: 0 30px;
}

.mil-preloader
  .mil-preloader-animation
  .mil-pos-abs
  .mil-reveal-frame
  .mil-reveal-box {
  z-index: 4;
  position: absolute;
  opacity: 0;
  height: 100%;
  background: linear-gradient(
    to right,
    #1f80ae,
    #1f3b60
  ); /* Background gradient for reveal box */
}

.font-weight-600 {
  font-weight: 600;
}
.font-bold {
  font-weight: 800;
}
.text-gradient {
  background: linear-gradient(to right, #1f80ae, #1f3b60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* This keeps the text gradient */
}

.mil-preloader.mil-hidden {
  pointer-events: none;
}
</style>
``
