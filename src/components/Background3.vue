<template>
  <div :class="$style.background">
    <h1 :class="$style.cennkSluieb">Cenník služieb</h1>
    <h1 :class="$style.hernAs">HERNÝ ČAS</h1>
    <Price1 /><Price1 priceTop="838px" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Price1 from "./Price1.vue";

  export default defineComponent({
    name: "Background3",
    components: { Price1 },
  });
</script>
<style module>
  .cennkSluieb {
    margin: 0;
    position: absolute;
    top: 0px;
    left: 58px;
    font-size: inherit;
    line-height: 24px;
    font-weight: 700;
    font-family: inherit;
    display: flex;
    align-items: center;
  }
  .hernAs {
    margin: 0;
    position: absolute;
    top: 147px;
    left: -22px;
    font-size: inherit;
    line-height: 24px;
    font-weight: 700;
    font-family: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .background {
    align-self: stretch;
    height: 1369px;
    position: relative;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-200);
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1050px) {
    .cennkSluieb {
      font-size: var(--font-size-13xl);
      line-height: 19px;
    }

    .hernAs {
      font-size: var(--font-size-13xl);
      line-height: 19px;
    }
  }
  @media screen and (max-width: 450px) {
    .cennkSluieb {
      font-size: var(--font-size-5xl);
      line-height: 14px;
    }

    .hernAs {
      font-size: var(--font-size-5xl);
      line-height: 14px;
    }
  }
</style>
