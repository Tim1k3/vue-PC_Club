<template>
  <div :class="$style.background">
    <div :class="$style.container">
      <div :class="$style.link">
        <div :class="$style.discoverPopular">Discover Popular</div>
      </div>
      <div :class="$style.heading4Parent">
        <div :class="$style.heading4">
          <h2 :class="$style.emphasisMostContainer">
            <span>Naše</span>
            <span :class="$style.span"> </span>
            <span :class="$style.zariadenia">zariadenia</span>
          </h2>
        </div>
        <div :class="$style.deviceGrid">
          <Zariadenia popular01jpg="/popular01jpg@2x.png" pC="PC" /><Zariadenia
            popular01jpg="/popular01jpg@2x.png"
            pC="Monitory"
            text2Height="unset"
          /><Zariadenia
            popular01jpg="/popular01jpg@2x.png"
            pC="Stoličky a stoly"
            text2Height="unset"
          />
        </div>
      </div>
      <div :class="$style.deviceGrid1">
        <Zariadenia
          popular01jpg="/popular01jpg@2x.png"
          pC="Headsety"
          text2Height="unset"
        /><Zariadenia
          popular01jpg="/popular01jpg@2x.png"
          pC="Klávesnice"
          text2Height="unset"
        /><Zariadenia
          popular01jpg="/popular01jpg@2x.png"
          pC="Konzoly"
          text2Height="18px"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Zariadenia from "./Zariadenia.vue";

  export default defineComponent({
    name: "Background1",
    components: { Zariadenia },
  });
</script>
<style module>
  .discoverPopular {
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
  }
  .span {
    color: var(--color-palevioletred-100);
  }
  .zariadenia {
    color: var(--color-fuchsia-200);
  }
  .emphasisMostContainer {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 40.8px;
    font-weight: 700;
    font-family: inherit;
  }
  .heading4 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .deviceGrid {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-34xl);
    max-width: 100%;
    font-size: var(--font-size-17xl);
  }
  .heading4Parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-15xl);
  }
  .deviceGrid1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-34xl);
    max-width: 100%;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs) var(--padding-12xl-2);
    box-sizing: border-box;
    gap: var(--gap-16xl);
    max-width: 1140px;
  }
  .background {
    align-self: stretch;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-200);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-lg);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1325px) {
    .deviceGrid {
      flex-wrap: wrap;
    }

    .deviceGrid1 {
      flex-wrap: wrap;
    }

    .container {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1125px) {
    .deviceGrid {
      justify-content: center;
      grid-template-columns: repeat(2, minmax(252px, 437px));
    }

    .deviceGrid1 {
      justify-content: center;
      grid-template-columns: repeat(2, minmax(252px, 437px));
    }

    .background {
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .emphasisMostContainer {
      font-size: var(--font-size-8xl);
      line-height: 33px;
    }

    .deviceGrid {
      gap: var(--gap-7xl);
      grid-template-columns: minmax(252px, 1fr);
    }

    .deviceGrid1 {
      gap: var(--gap-7xl);
      grid-template-columns: minmax(252px, 1fr);
    }

    .container {
      gap: var(--gap-mid);
    }
  }
  @media screen and (max-width: 450px) {
    .emphasisMostContainer {
      font-size: var(--font-size-xl);
      line-height: 24px;
    }
  }
</style>
