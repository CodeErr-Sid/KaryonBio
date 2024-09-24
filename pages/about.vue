<template>
  <div class="text-example">
    <section class="w-full relative overflow-hidden md:pb-10 md:h-[700px]">
      <div>
        <img
          src="/about/hero.png"
          class="absolute -top-12 md:top-0 md:inset-0 object-cover w-full md:h-[715px]"
          alt="hero-dot"
        />
      </div>

      <div
        class="relative z-10 flex mt-20 md:mt-28 text-[#F5F7FA] items-center justify-center px-4 md:pt-[163px] md:flex-row md:px-6 xl:px-10"
      >
        <div class="w-[674px]">
          <h1
            class="text-[35px] text-base mt-4 md:mt-0 lg:text-[52px] font-semibold md:leading-[63px] text-center"
          >
            The future of drug design
          </h1>
          <p class="mt-4 text-sm text-center text-white md:text-xl">
            RECEPTOR.AI provides an end-to-end small molecule drug discovery
            platform for precision and personalised medicine to achieve ultimate
            selectivity between highly similar off-target proteins.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="relative flex flex-col items-center justify-center p-10 bg-white md:flex-row"
      >
        <div class="w-full text-start p-4 md:w-[600px]">
          <div
            class="p-1 rounded-lg border-[#2078A7] md:h-[454px] border shadow-lg"
          >
            <h2 class="text-[32px] font-bold text-[#1F3B60]">Our mission</h2>
            <p class="mt-4 text-[24px] text-gray-700">
              RECEPTOR.AI's mission is to create superior drugs, which are safe,
              efficient and successful in clinical trials by developing a next
              generation drug discovery platform based on the synergy of AI,
              computational chemistry and biology.
            </p>
            <p class="mt-4 text-[24px] text-gray-700">
              We aim to improve access to AI drug discovery via our AI platform
              which is integrated with wet labs to make the drug discovery
              process more efficient.
            </p>
          </div>
        </div>

        <img
          src="/about/capsule.png"
          class="absolute w-[274px]"
          alt="capsule"
        />
        <div class="w-full text-end p-4 mt-6 md:w-[600px] md:mt-0">
          <div
            class="p-1 rounded-lg border-[#2078A7] md:h-[454px] border shadow-lg"
          >
            <h2 class="text-[32px] font-bold text-[#1F3B60]">Our vision</h2>
            <p class="mt-4 text-[24px] text-gray-700">
              We dream about a world where new drugs are developed so fast, that
              new diseases have no chances to spread.
            </p>
            <p class="mt-4 text-[24px] text-gray-700">
              We envision radical minimization of drug testing on animals and
              humans with improvement of their safety and efficiency by
              combining advanced AI with novel biomimetic technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
definePageMeta({ layout: "primary" });

export default {
  head() {
    return {
      title: "About Us",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Karyon Bio is a biotechnology company that specializes in developing and manufacturing high-quality, innovative products for the life sciences industry.",
        },
      ],
    };
  },
};
</script>
