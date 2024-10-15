<template>
  <div class="font-futura">
    <section
      class="w-full relative overflow-hidden md:pb-10 md:h-[700px]"
      :class="[
        '',
        isOpen
          ? ' h-screen   '
          : ' h-[300px] bg-gradient-to-l from-[#1f5179] to-[#1f709c]',
      ]"
    >
      <div>
        <img
          src="/contact/hero.svg"
          class="absolute -top-12 md:top-0 md:inset-0 object-cover w-full md:h-[715px]"
          alt="hero-dot"
          :class="['', isOpen ? ' h-screen  ' : 'h-[348px] opacity-30 ']"
        />
      </div>

      <div
        class="relative z-10 mt-20 md:mt-28 text-[#F5F7FA] items-center justify-center px-4 md:pt-[63px] md:flex-row md:px-6 xl:px-10"
      >
        <div :class="['', isOpen ? ' hidden ' : ' ']">
          <!-- Typewriter effect here -->
          <h1
            class="text-[35px] text-base mt-4 md:mt-0 lg:text-[52px] font-semibold md:leading-[63px] text-center"
          >
            Contact Us
          </h1>
          <p class="mt-4 text-sm text-center text-white md:text-xl">
            Kindly reach us to get the <br class="md:hidden" />
            fastest response and treatment
          </p>
          <h1
            class="lg:text-[48px] text-sm md:text-base font-semibold mt-2 md:mt-5 l lg:leading-[63px] text-center"
          >
            Our Expertise at Your Fingertips
          </h1>
          <p
            class="text-sm md:text-[32px] text-white md:leading-[53px] font-normal text-center"
          >
            Innovative Solutions for Biomarker <br class="hidden lg:block" />
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
            v-for="(contact, index) in contacts"
            :key="index"
            class="flex bg-[#D2EAEF80] p-4 md:p-[16px] lg:w-[300px] xl:w-[350px] w-full rounded-[25px] items-center gap-5"
          >
            <img
              :src="contact.icon"
              class="lg:w-[40px] w-8 md:w-12"
              alt="contact"
            />
            <div class="flex flex-col justify-center gap-1">
              <h1 class="text-xl font-bold">{{ contact.type }}</h1>
              <p class="text-[#1F3B60] text-base">
                <a :href="contact.link" v-if="contact.link">{{
                  contact.value
                }}</a>
                <span v-else>{{ contact.value }}</span>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.729981692729!2d-122.05178922413414!3d37.39621747208313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb70548de66fd%3A0x19d323945972ea61!2s855%20Maude%20Ave%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sin!4v1727097725585!5m2!1sen!2sin"
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
      contacts: [
        {
          type: "Phone",
          value: "+91 9985854689",
          link: "tel:+919985854689",
          icon: "/contact/call.svg",
        },
        {
          type: "Email",
          value: "karyonbio@gmail.com",
          link: "mailto:karyonbio@gmail.com",
          icon: "/contact/mail.svg",
        },
        {
          type: "Location",
          value: "855 Maude Ave, Mountain View, CA 94043",
          icon: "/contact/location.svg",
        },
      ],
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
