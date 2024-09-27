<template>
  <div class="bg-custom-gradient">
    <Preloader
      v-if="!preloaderComplete"
      @preloader-complete="preloaderCompleteHandler"
    />
    <div v-if="preloaderComplete">
      <nav
        class="fixed z-[99999] flex items-center justify-between px-4 py-2 md:py-1 md:px-10 xl:px-20 transition-all duration-300"
        :class="[
          isOpen ? 'w-[150px]' : 'w-full',
          isScrolled
            ? 'bg-white bg-opacity-30 backdrop-filter md:backdrop-blur-lg text-white'
            : '',
        ]"
      >
        <img
          src="/logo.svg"
          alt="logo"
          class="w-20 md:w-28"
          :class="isOpen ? 'hidden' : ''"
        />
        <div class="md:hidden" :class="isOpen ? 'hidden' : ''">
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
        <div
          :class="[
            'md:flex gap-2 lg:gap-6 text-[#1F3B60] font-semibold text-[20px]',
            isOpen
              ? 'block font-semibold bg-opacity-30 backdrop-filter backdrop-blur-lg bg-white h-screen w-[150px]'
              : 'hidden',
            isScrolled ? 'md:text-[#1F3B60]' : 'md:text-white',
          ]"
          class="absolute top-0 left-0 w-full transition-all duration-300 md:bg-none md:top-20 md:static md:w-auto md:block"
        >
          <div class="flex items-center justify-center mt-2 md:hidden">
            <button
              @click="toggleMenu"
              class="text-[#1F3B60] focus:outline-none"
            >
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
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="/"
            >Home</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="/about"
            >About</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="#"
            >Technology</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="/partner"
            >Partner</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="/teams"
            >Our Experts</nuxt-link
          >
          <nuxt-link
            class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
            to="/contact"
            >Contact</nuxt-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isScrolled: false, // Track scroll state
      preloaderComplete: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.path !== "/") {
      this.preloaderComplete = true;
    }
  },
  methods: {
    preloaderCompleteHandler() {
      this.preloaderComplete = true; // Show layout once preloader is done
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Change 50 to any scroll position where the effect should start
    },
  },
  watch: {
    $route(to, from) {
      if (this.isOpen) {
        this.toggleMenu(); // Close menu on route change
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
