<template>
  <div :class="$style.background" data-scroll-to="backgroundContainer">
    <div :class="$style.heading4Wrapper">
      <div :class="$style.heading4">
        <h2 :class="$style.emphasisYourContainer">
          <span>Naše </span>
          <span :class="$style.vhody">výhody</span>
        </h2>
      </div>
    </div>
    <div :class="$style.link">
      <div :class="$style.viewYourLibrary">View Your Library</div>
    </div>
    <div :class="$style.component2Parent">
      <Component1 text1="Prvý Club" text2="V Nitre" /><Component1
        text1="Herné spektrum 1"
        text2="Vyber si jednu z tisíc hier ako na počítači, tak aj na PS5"
        text2Height="36px"
      /><Component1
        text1="Špeciálne ponuky"
        text2="Najlepšie ceny pre najlepších hráčov"
        text2Height="36px"
      />
    </div>
    <div :class="$style.component2Group">
      <Component1
        text1="Komunita gamerov"
        text2="Nájdeš u nás nových Kamarátov"
        text2Height="36px"
      /><Component1
        text1="Turnaje"
        text2="Súťaže a špeciálne podujatia každý týždeň"
        text2Height="36px"
      /><Component1
        text1="Lounge zone"
        text2="Oddýchni si od hrania v našej relaxačnej zóne s drinkami a jedlom z našej ponuky"
        text2Height="unset"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component1 from "./Component1.vue";

  export default defineComponent({
    name: "Background2",
    components: { Component1 },
  });
</script>
<style module>
  .vhody {
    color: var(--color-fuchsia-100);
  }
  .emphasisYourContainer {
    margin: 0;
    position: relative;
    font-size: inherit;
    text-decoration: underline;
    line-height: 40.8px;
    font-weight: 700;
    font-family: inherit;
  }
  .heading4 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .heading4Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
  }
  .viewYourLibrary {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 21px;
    text-transform: capitalize;
  }
  .link {
    border-radius: var(--br-6xl);
    background-color: var(--color-palevioletred-200);
    overflow: hidden;
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-10xl);
    white-space: nowrap;
    text-align: center;
    font-size: var(--font-size-sm);
  }
  .component2Parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl-5);
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .component2Group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl-5);
    max-width: 100%;
  }
  .background {
    align-self: stretch;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-200);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-sm) var(--padding-42xl-8);
    box-sizing: border-box;
    gap: var(--gap-11xl-9);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-15xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1325px) {
    .component2Parent {
      flex-wrap: wrap;
    }

    .component2Group {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 800px) {
    .emphasisYourContainer {
      font-size: var(--font-size-8xl);
      line-height: 33px;
    }

    .background {
      gap: var(--gap-mini);
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-21xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .emphasisYourContainer {
      font-size: var(--font-size-xl);
      line-height: 24px;
    }
  }
</style>
