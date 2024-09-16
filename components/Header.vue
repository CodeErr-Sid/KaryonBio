<template>
  <div class="bg-custom-gradient">
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
              'md:flex gap-6 text-[#F5F7FA] text-[20px]',
              isOpen ? 'block' : 'hidden',
            ]"
            class="absolute left-0 w-full transition-all duration-300 bg-custom-gradient md:bg-none top-11 md:top-20 md:static md:w-auto md:block"
          >
            <nuxt-link
              class="block py-2 px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/"
              >Home</nuxt-link
            >
            <nuxt-link
              class="block py-2 px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/about"
              >About</nuxt-link
            >
            <nuxt-link
              class="block py-2 px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/services"
              >Services</nuxt-link
            >
            <nuxt-link
              class="block py-2 px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/casestudies"
              >Casestudies</nuxt-link
            >
            <nuxt-link
              class="block py-2 px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
