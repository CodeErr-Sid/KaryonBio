<template>
  <div>
    <section class="wrapper">
      <div class="spinner">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <!-- Centered SVG -->
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

section.wrapper {
  padding: 40px 0;
}

section.wrapper.dark {
  background: #313134;
}
div.spinner {
  animation: rotate 10s infinite linear;
  position: relative;
  display: block;
  margin: auto;

  /* Default size for larger screens */
  width: 600px;
  height: 600px;
}

/* Media query for mobile screens */
@media (max-width: 768px) {
  div.spinner {
    /* Adjusted size for mobile screens */
    width: 300px;
    height: 300px;
  }
}

div.spinner i {
  animation: rotate-inner 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
  transform-origin: 50% 100% 0;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  border: solid 6px transparent;
  border-bottom: none;
}

/* Center the SVG inside the spinner and prevent it from rotating */
div.center-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px; /* Adjust width to fit your design */
  height: 120px; /* Adjust height to fit your design */
  z-index: 2; /* Make sure it stays on top */
  animation: none; /* Prevent any animation */
  transform-origin: none; /* Prevent any origin-based transformation */
}

div.center-svg img {
  width: 100%;
  height: 100%;
  animation: none; /* Ensure no animation on the SVG itself */
  transform: none; /* Ensure no transform on the SVG itself */
}

/* Adjusting the size and colors to match the image */
div.spinner i:nth-child(1) {
  animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  width: 180px;
  height: 90px;
  margin-top: -90px;
  margin-left: -90px;
  border-color: #00cfff; /* Light blue */
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}

div.spinner i:nth-child(2) {
  animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
  width: 210px;
  height: 105px;
  margin-top: -105px;
  margin-left: -105px;
  border-color: #6de3d8; /* Light cyan */
  border-top-left-radius: 105px;
  border-top-right-radius: 105px;
}

div.spinner i:nth-child(3) {
  animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
  width: 240px;
  height: 120px;
  margin-top: -120px;
  margin-left: -120px;
  border-color: #9faab5; /* Light gray */
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
}

div.spinner i:nth-child(4) {
  animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
  width: 270px;
  height: 135px;
  margin-top: -135px;
  margin-left: -135px;
  border-color: #b1c1cb; /* Lighter gray */
  border-top-left-radius: 135px;
  border-top-right-radius: 135px;
}

div.spinner i:nth-child(5) {
  animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
  width: 300px;
  height: 150px;
  margin-top: -150px;
  margin-left: -150px;
  border-color: #5082c1; /* Darker blue */
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
}

/* Rotation animation for outer spinner */
@keyframes rotate {
  to {
    transform: rotateZ(360deg);
  }
}

/* Continuous rotation for inner elements */
@keyframes rotate-inner {
  to {
    transform: rotate(360deg);
  }
}
</style>
