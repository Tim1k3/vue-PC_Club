<template>
  <div
    :class="$style.onasComponent"
    v-if="showBackground"
    :style="onasComponentStyle"
  >
    <h1 :class="$style.oNs">O nás</h1>
    <h3 :class="$style.jedinenZitokZContainer">
      <p :class="$style.jedinenZitokZ">
        Jedinečný zážitok z Ešportu, úplne prvý moderný počítačový klub v
        strednej Európe, herné nastavenia aké si len viete predstaviť, úžasný
        dizajn a dokonalé služby - to všetko je naša kybernetická športová aréna
        CyberUKF.  Radi privítame všetky typy hráčov, všetkých vekových kategórií
        a môžete si byť istí, že sa stanete súčasťou našej komunity.
      </p>
      <p :class="$style.jedinenZitokZ">&nbsp;</p>
      <p :class="$style.jedinenZitokZ">
        Ešport a všetko okolo toho zbožňujeme natoľko, že podporíme akékoľvek
        vaše začiatky, či už ide o amatérsky alebo profi tím Ešportu, alebo ak
        ste dobrí v streamovaní.  Ako tím nájdete BootCamp - špeciálnu miestnosť
        pre 5 hráčov, takže nikto nemôže rozptyľovať vašu pozornosť.
      </p>
      <p :class="$style.jedinenZitokZ">&nbsp;</p>
      <p :class="$style.jedinenZitokZ">
        Okrem oddychového hrania vieme zabezpečiť obrovské množstvo turnajov ako
        na PC, tak aj na konzolách a v rôznych disciplínach.
      </p>
    </h3>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Background",
    props: {
      showBackground: { type: Boolean },
      backgroundAlignSelf: { type: String },
      backgroundPosition: { type: String },
      backgroundTop: { type: [Object, Array, String, Number, Boolean] },
      backgroundLeft: { type: [Object, Array, String, Number, Boolean] },
      backgroundWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      onasComponentStyle(): CSS.Properties {
        return {
          alignSelf: this.backgroundAlignSelf,
          position: this.backgroundPosition,
          top: this.backgroundTop,
          left: this.backgroundLeft,
          width: this.backgroundWidth,
        };
      },
    },
  });
</script>
<style module>
  .oNs {
    margin: 0;
    position: absolute;
    top: 29px;
    left: 0px;
    font-size: inherit;
    line-height: 24px;
    font-weight: 700;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .jedinenZitokZ {
    margin: 0;
  }
  .jedinenZitokZContainer {
    margin: 0;
    position: absolute;
    top: 118px;
    left: 48px;
    font-size: var(--font-size-xl);
    line-height: 24px;
    font-weight: 700;
    font-family: inherit;
    text-align: left;
  }
  .onasComponent {
    align-self: stretch;
    height: 506px;
    position: relative;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-200);
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1050px) {
    .oNs {
      font-size: var(--font-size-13xl);
      line-height: 19px;
    }
  }
  @media screen and (max-width: 450px) {
    .oNs {
      font-size: var(--font-size-5xl);
      line-height: 14px;
    }

    .jedinenZitokZContainer {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
