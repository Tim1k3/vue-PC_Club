<template>
  <div :class="$style.zariadenia">
    <img :class="$style.popular01jpgIcon" alt="" :src="popular01jpg" />
    <div :class="$style.heading4" />
    <div :class="$style.pcWrapper">
      <h2 :class="$style.pc">{{pC}}</h2>
    </div>
    <div :class="$style.text2" :style="text2Style">
      <ul :class="$style.geforceRtx4080Super">
        <li :class="$style.asusDualRtx">Intel core i5</li>
      </ul>
      <p :class="$style.blankLine">&nbsp;</p>
      <ul :class="$style.geforceRtx4080Super">
        <li :class="$style.asusDualRtx">ASUS DUAL RTX 3070</li>
      </ul>
      <p :class="$style.blankLine">&nbsp;</p>
      <ul :class="$style.geforceRtx4080Super">
        <li>GeForce RTX 4080 SUPER</li>
      </ul>
    </div>
    <div :class="$style.list">
      <div :class="$style.item">
        <div :class="$style.symbol"></div>
        <div :class="$style.div">4.8</div>
      </div>
      <div :class="$style.item1">
        <div :class="$style.symbol1"></div>
        <div :class="$style.m">2.3M</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Zariadenia",
    props: {
      popular01jpg: { type: String },
      pC: { type: String },
      text2Height: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      text2Style(): CSS.Properties {
        return {
          height: this.text2Height,
        };
      },
    },
  });
</script>
<style module>
  .popular01jpgIcon {
    width: 306px;
    position: relative;
    border-radius: var(--br-4xl);
    height: 177.7px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    display: none;
  }
  .heading4 {
    width: 66px;
    display: none;
  }
  .pc {
    margin: 0;
    height: 18px;
    width: 305px;
    position: relative;
    font-size: inherit;
    line-height: 18px;
    font-weight: 700;
    font-family: inherit;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .pcWrapper {
    width: 321px;
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-mid);
    box-sizing: border-box;
    z-index: 4;
  }
  .blankLine {
    margin: 0;
  }
  .asusDualRtx {
    margin-bottom: 0px;
  }
  .geforceRtx4080Super {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-8xl);
  }
  .text2 {
    width: 322px;
    position: relative;
    font-size: var(--font-size-xl);
    line-height: 18px;
    color: var(--color-fuchsia-100);
    display: inline-block;
    z-index: 3;
  }
  .symbol {
    height: 14px;
    width: 16px;
    position: relative;
    line-height: 14px;
    display: flex;
    align-items: center;
  }
  .div {
    height: 21px;
    width: 25px;
    position: relative;
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-white);
    display: flex;
    align-items: center;
  }
  .item {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .symbol1 {
    height: 14px;
    width: 14px;
    position: relative;
    line-height: 14px;
    display: flex;
    align-items: center;
  }
  .m {
    height: 21px;
    width: 36px;
    position: relative;
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-white);
    display: flex;
    align-items: center;
  }
  .item1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: -0.5px;
    color: var(--color-palevioletred-100);
  }
  .list {
    width: 124px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-yellow);
    font-family: var(--font-font-awesome-5-free);
  }
  .zariadenia {
    height: 303px;
    width: 336px;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-98xl) var(--padding-mini);
    box-sizing: border-box;
    gap: var(--gap-59xl);
    z-index: 2;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
