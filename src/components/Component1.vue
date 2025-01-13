<template>
  <div :class="$style.component2">
    <div :class="$style.component2Child" />
    <h2 :class="$style.text1">{{text1}}</h2>
    <b :class="$style.text2" :style="text21Style">{{text2}}</b>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Component1",
    props: {
      text1: { type: String },
      text2: { type: String },
      text2Height: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      text21Style(): CSS.Properties {
        return {
          height: this.text2Height,
        };
      },
    },
  });
</script>
<style module>
  .component2Child {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-100);
    z-index: 0;
  }
  .text1 {
    margin: 0;
    width: 334px;
    height: 18px;
    position: relative;
    font-size: inherit;
    line-height: 18px;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    z-index: 3;
  }
  .text2 {
    width: 324.1px;
    height: 18px;
    position: relative;
    font-size: var(--font-size-xl);
    line-height: 18px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 2;
  }
  .component2 {
    height: 158px;
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl-8) var(--padding-2xs-9) var(--padding-60xl-7)
      var(--padding-5xl-1);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-2xl-5);
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
