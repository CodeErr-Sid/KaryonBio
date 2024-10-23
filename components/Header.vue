<template>
  <div class="bg-custom-gradient">
    <Preloader @preloader-complete="handlePreloaderComplete" />
    <div v-if="headerVisible">
      <nav
        v-if="headerVisible"
        class="fixed z-[99999] flex items-center justify-between px-4 py-2 md:py-1 md:px-10 xl:px-20 transition-all duration-300"
        :class="[
          isOpen ? 'w-[150px]' : 'w-full',
          isScrolled
            ? 'bg-white bg-opacity-30 backdrop-filter md:backdrop-blur-lg text-white'
            : '',
        ]"
      >
        <!-- Show logo based on scroll state -->
        <img
          :src="isScrolled ? '/logo2.svg' : '/logo.svg'"
          alt="logo"
          class="w-20 md:w-28"
          :class="isOpen ? 'hidden' : ''"
        />
        <div class="md:hidden" :class="isOpen ? 'hidden' : ''">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <!-- Hamburger Icon -->
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
            <!-- Close Icon -->
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

        <!-- Navigation Links -->
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
          <div class="px-4 mt-2 md:hidden">
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
                class="w-6 h-6"
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
            class="flex flex-col items-center justify-center mt-10 md:mt-0 md:flex-row"
            @click="closeMenu"
          >
            <img
              :src="'/logo2.svg'"
              alt="logo"
              class="w-20 md:hidden md:w-28"
            />
            <nuxt-link
              class="block px-2 py-2 text-sm cursor-pointer md:inline-block lg:text-xl"
              to="/"
              >Home</nuxt-link
            >
            <nuxt-link
              class="block px-2 py-2 text-sm cursor-pointer md:inline-block lg:text-xl"
              to="/about"
              >About</nuxt-link
            >
            <nuxt-link
              class="block px-2 py-2 text-sm cursor-pointer md:inline-block lg:text-xl"
              to="#"
              >Technology</nuxt-link
            >
            <!-- <nuxt-link
              class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
              to="/partner"
              >Partner</nuxt-link
            > -->
            <!-- <nuxt-link
              class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
              to="/teams"
              >Our Experts</nuxt-link
            > -->
            <!-- <nuxt-link
              class="block py-2 px-2 md:inline-block text-sm lg:text-xl hover:text-[#3AD9FF] cursor-pointer"
              to="/contact"
              >Contact</nuxt-link
            > -->
          </div>
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
      headerVisible: true, // Start with header visible
      lastScrollPosition: 0, // Track the last scroll position
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.path !== "/") {
      this.preloaderComplete = true; // Skip preloader if not on the home page
    }
  },
  methods: {
    closeMenu() {
      this.isOpen = false; // Close the navigation menu
    },
    handlePreloaderComplete() {
      this.headerVisible = true; // Show the header once preloader is complete
    },
    toggleMenu() {
      this.isOpen = !this.isOpen; // Toggle the navigation menu
    },
    handleScroll() {
      const currentScrollPosition = window.scrollY;

      // Detect scroll direction
      if (
        currentScrollPosition > this.lastScrollPosition &&
        currentScrollPosition > 100
      ) {
        // User is scrolling down and past 100px, hide the header
        this.headerVisible = false;
      } else {
        // User is scrolling up, show the header
        this.headerVisible = true;
      }

      // Change logo when scrolled past 50px
      this.isScrolled = currentScrollPosition > 50;

      // Update the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  watch: {
    // React to route changes and show preloader on every route change
    $route(to, from) {
      this.preloaderComplete = false; // Reset preloader on route change
      // Optionally, you could trigger your preloader here
      // You might want to implement a timeout to simulate loading time
      setTimeout(() => {
        this.preloaderComplete = true; // Complete preloader after some time
      }, 500); // Adjust the timeout as needed
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up event listener
  },
};
</script>

<style scoped>
/* Add any additional styles you need here */
</style>
