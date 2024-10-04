<template>
  <div
    class="bg-[#0F1F35] py-4 md:py-16 px-4 md:px-10 bg-[url('/footer1.png')] md:bg-[url('/footer.png')] bg-cover bg-no-repeat"
  >
    <div
      class="container grid grid-cols-1 gap-2 mx-auto text-white md:gap-8 md:grid-cols-3"
    >
      <!-- Left section: Message -->
      <div class="text-center md:text-start">
        <h3 class="mb-4 text-sm font-bold md:text-2xl">
          We would love to hear from you
        </h3>
        <p class="mb-6 text-[#A3A3A3]">
          Feel free to reach out if you want to collaborate with us, or simply
          have a chat.
        </p>
        <button
          class="bg-white text-[#0F1F35] px-2 md:px-6 py-2 font-semibold rounded hover:bg-gray-200"
        >
          Get In Touch
        </button>
      </div>

      <!-- Middle section: Contact info -->
      <div class="text-center md:text-start">
        <h3 class="mb-4 text-sm font-bold md:text-2xl">Contact us</h3>
        <ul class="space-y-2 text-[#A3A3A3]">
          <li>karyonbio@gmail.com</li>
          <li>+91 9985854689</li>
          <li>855 Maude Ave, Mountain View, CA 94043</li>
        </ul>
      </div>

      <!-- Right section: Follow us -->
      <div class="text-center md:text-start">
        <h3 class="mb-4 text-sm font-bold md:text-2xl">Follow us</h3>
        <ul class="space-y-4 text-[#A3A3A3]">
          <!-- <li>
            <a
              href="#"
              class="transition duration-300 ease-in-out hover:text-white"
              >Instagram ↗</a
            >
          </li> -->
          <!-- <li>
            <a
              href="#"
              class="transition duration-300 ease-in-out hover:text-white"
              >Facebook ↗</a
            >
          </li> -->
          <li>
            <a
              href="https://www.linkedin.com/company/karyon-bio/"
              target="_blank"
              class="transition duration-300 ease-in-out hover:text-white"
              >Linkedin ↗</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="text-center mt-4 md:mt-16 text-[#A3A3A3] text-sm">
      All rights reserved <a href="#" class="hover:underline">Privacy Policy</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
