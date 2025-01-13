<template>
  <div :class="$style.welcome" :style="welcomeStyle">
    <h3 :class="$style.heading6" :style="heading6Style">Welcome To CyberUKF</h3>
    <div :class="$style.heading4">
      <h1 :class="$style.emphasisBrowseContainer">
        <span>OTVORILI SME NOVÚ ARÉNU </span>
        <span :class="$style.vNitre">V NITRE!</span>
      </h1>
    </div>
    <div :class="$style.link" @click="onLinkContainerClick">
      <div :class="$style.viacInfo">Viac info</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Welcome",
    props: {
      welcomeBackgroundImage: { type: String },
      welcomeHeight: { type: [Object, Array, String, Number, Boolean] },
      heading6Margin: { type: [Object, Array, String, Number, Boolean] },
      heading6FontWeight: { type: String },
      onLinkContainerClick: { type: Function },
    },
    computed: {
      welcomeStyle(): CSS.Properties {
        return {
          backgroundImage: this.welcomeBackgroundImage,
          height: this.welcomeHeight,
        };
      },
      heading6Style(): CSS.Properties {
        return {
          margin: this.heading6Margin,
          fontWeight: this.heading6FontWeight,
        };
      },
    },
  });
</script>
<style module>
  .heading6 {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 24px;
    font-weight: 400;
    font-family: inherit;
  }
  .vNitre {
    color: var(--color-fuchsia-100);
  }
  .emphasisBrowseContainer {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 54px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: inherit;
  }
  .heading4 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-26xl);
  }
  .viacInfo {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 21px;
    text-transform: capitalize;
  }
  .link {
    border-radius: var(--br-6xl);
    background-color: var(--color-palevioletred-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-11xl);
    font-size: var(--font-size-sm);
  }
  .welcome {
    border-radius: var(--br-4xl);
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-61xl) var(--padding-41xl) var(--padding-68xl);
    box-sizing: border-box;
    gap: var(--gap-6xl);
    background-image: url("/public/welcome1@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    min-height: 380px;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
    align-self: stretch;
  }
</style>
