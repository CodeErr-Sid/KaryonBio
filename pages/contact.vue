<template>
  <div class="text-example">
    <section
      class="w-full relative overflow-hidden md:pb-10 h-[300px] md:h-[700px] bg-gradient-to-l from-[#1f5179] to-[#1f709c]"
    >
      <div>
        <nav
          class="relative z-[9999] md:h-auto flex items-center justify-between px-4 py-2 md:py-6 md:px-10 xl:px-20"
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
              isOpen ? 'block h-screen' : 'hidden',
            ]"
            class="absolute top-0 left-0 w-full transition-all duration-300 bg-custom-gradient md:bg-none md:top-20 md:static md:w-auto md:block"
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
              class="block py-2 lg:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/"
              >Home</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/about"
              >About</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/services"
              >Services</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/casestudies"
              >Casestudies</nuxt-link
            >
            <nuxt-link
              class="block py-2 lg:px-6 md:inline-block hover:text-[#3AD9FF] cursor-pointer"
              to="/contact"
              >Contact</nuxt-link
            >
          </div>
        </nav>
      </div>
      <div>
        <img
          src="/contact/hero.svg"
          class="absolute -top-12 md:top-0 md:inset-0 h-[348px] object-cover w-full md:h-[715px] opacity-30"
          alt="hero-dot"
        />
      </div>

      <div
        class="relative z-10 text-[#F5F7FA] items-center justify-center px-4 md:pt-[63px] md:flex-row md:px-6 xl:px-10"
      >
        <div>
          <!-- Typewriter effect here -->
          <h1
            class="md:text-[35px] text-base lg:text-[52px] font-semibold md:leading-[63px] text-center"
          >
            Contact Us
          </h1>
          <p class="mt-2 text-sm font-normal text-center text-white md:text-xl">
            Kindly reach us to get the fastest response and treatment
          </p>
          <h1
            class="md:text-[48px] text-base font-semibold mt-5 l md:leading-[63px] text-center"
          >
            Our Expertise at Your Fingertips
          </h1>
          <p
            class="mt-2 text-lg md:text-[32px] text-white md:leading-[63px] font-normal text-center"
          >
            Innovative Solutions for Biomarker <br />
            Discovery and Drug Development
          </p>
        </div>
      </div>
    </section>
    <section class="relative z-20">
      <div class="px-4 -mt-10 md:-mt-32 lg:-mt-[180px] scroll-">
        <div class="container mx-auto">
          <div
            class="max-w-4xl p-2 mx-auto bg-white rounded-lg shadow-md md:p-8"
          >
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block text-base font-medium text-[#1F3B60]"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    placeholder="David John"
                    class="w-full p-3 mt-1 border border-[#307BC480] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#307BC480]"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-base font-medium text-[#1F3B60]"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    placeholder="example@gmail.com"
                    class="w-full p-3 mt-1 border border-[#307BC480] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#307BC480]"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="subject"
                  class="block text-base font-medium text-[#1F3B60]"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  placeholder="Your subject"
                  class="w-full p-3 mt-1 border border-[#307BC480] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#307BC480]"
                />
              </div>

              <div class="mt-6">
                <label
                  for="message"
                  class="block text-base font-medium text-[#1F3B60]"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  placeholder="Your message"
                  class="w-full p-3 mt-1 border border-[#307BC480] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#307BC480]"
                ></textarea>
              </div>

              <div
                class="flex items-start justify-start w-full mt-6 text-center"
              >
                <button
                  type="submit"
                  class="inline-block w-full px-6 py-3 font-semibold text-white transition-transform transform rounded-full shadow sm:w-auto bg-gradient-to-r from-[#307BC4] to-[#274760] hover:from-[#307BC4] hover:to-[#274760] hover:scale-105"
                >
                  Submit ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:px-[72px] px-4 mb-4">
      <h1
        class="text-[#274760] mt-10 lg:mt-[152px] text-[25px] md:text-[52px] font-bold leading-[63px]"
      >
        Find Us Here
      </h1>
      <div class="mt-6 md:mt-10 lg:mt-[68px]">
        <div class="flex flex-wrap w-full gap-4">
          <div
            class="flex bg-[#D2EAEF80] p-4 md:p-[30px] lg:w-[300px] xl:w-[350px] w-full rounded-[25px] items-center gap-5"
          >
            <img
              src="/contact/call.svg"
              class="lg:w-[60px] w-8 md:w-12"
              alt="call"
            />
            <div class="flex flex-col justify-center gap-1">
              <h1 class="text-xl font-bold">Phone</h1>
              <p class="text-[#1F3B60] text-base">
                <a href="tel:+91 9985854689">+91 9985854689</a>
              </p>
            </div>
          </div>
          <div
            class="flex bg-[#D2EAEF80] p-4 md:p-[30px] lg:w-[300px] xl:w-[350px] w-full rounded-[25px] items-center gap-5"
          >
            <img
              src="/contact/mail.svg"
              class="lg:w-[60px] w-8 md:w-12"
              alt="call"
            />
            <div class="flex flex-col justify-center gap-1">
              <h1 class="text-xl font-bold">Email</h1>
              <p class="text-[#1F3B60] text-base">
                <a href="mailto:karyonbio@gmail.com">karyonbio@gmail.com</a>
              </p>
            </div>
          </div>
          <div
            class="flex bg-[#D2EAEF80] p-4 md:p-[30px] lg:w-[300px] xl:w-[350px] w-full rounded-[25px] items-center gap-5"
          >
            <img
              src="/contact/loaction.svg"
              class="lg:w-[60px] w-8 md:w-12"
              alt="call"
            />
            <div class="flex flex-col justify-center gap-1">
              <h1 class="text-xl font-bold">Location</h1>
              <p class="text-[#1F3B60] text-base">
                855 Maude Ave, Mountain View, CA 94043
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative z-20 w-full px-4 justify-center mb-4 md:mb-[145px]"
    >
      <div
        class="mt-2 md:mt-10 flex flex-col items-center justify-center lg:mt-[68px] w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31119.76035501348!2d80.04439557778329!3d12.84521129732877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7097f45e5f5%3A0x3d51f5557fe19225!2sGuduvancheri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726648854170!5m2!1sen!2sin"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          class="md:rounded-[35px] rounded md:h-[300px] lg:h-[450px] lg:w-[1100px]"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
definePageMeta({ layout: "primary" });

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },

      isOpen: false,
    };
  },

  methods: {
    submitForm() {
      // Handle form submission logic
      alert(`Message Sent!`);
    },

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.text-example {
  font-family: "FutureW01", sans-serif;
}
</style>
