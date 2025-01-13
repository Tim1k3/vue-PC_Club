<template>
  <div :class="$style.priceComponent" :style="priceComponentStyle">
    <div :class="$style.priceComponentChild" />
    <h2 :class="$style.mainArena">Main Arena</h2>
    <b :class="$style.rtx3070165">RTX 3070, 165 Hz, 27</b>
    <b :class="$style.h3h5h"> 1h 3h 5h 1h 3h 5h “full night”</b>
    <b :class="$style.separator"
      >08:00-17:00/08:00-16:00/08:00-14:00/17:00-08:00/16:00-21:00/14:00-20:00/22:00-08:00</b
    >
    <b :class="$style.weekdays">Weekdays</b>
    <b :class="$style.weekend">Weekend</b>
    <div :class="$style.parent">
      <b :class="$style.b">5€ </b>
      <b :class="$style.b1">15€ </b>
      <b :class="$style.b2">25€ </b>
      <b :class="$style.b3">30€ </b>
      <b :class="$style.b4">6€ </b>
      <b :class="$style.b5">20€ </b>
      <b :class="$style.b6">13€ </b>
    </div>
    <div :class="$style.group">
      <b :class="$style.b">6€ </b>
      <b :class="$style.b1">18€ </b>
      <b :class="$style.b2">30€ </b>
      <b :class="$style.b3">35€ </b>
      <b :class="$style.b4">7€ </b>
      <b :class="$style.b5">25€ </b>
      <b :class="$style.b6">15€ </b>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Price1",
    props: {
      priceTop: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      priceComponentStyle(): CSS.Properties {
        return {
          top: this.priceTop,
        };
      },
    },
  });
</script>
<style module>
  .priceComponentChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-4xl);
    background-color: var(--color-gray-100);
  }
  .mainArena {
    margin: 0;
    position: absolute;
    top: 6.74%;
    left: 6.53%;
    font-size: var(--font-size-17xl);
    line-height: 18px;
    font-weight: 700;
    font-family: inherit;
    display: flex;
    align-items: center;
  }
  .rtx3070165 {
    position: absolute;
    top: 19.58%;
    left: 6.53%;
    font-size: var(--font-size-17xl);
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  .h3h5h {
    position: absolute;
    top: 34.55%;
    left: calc(50% - 459.5px);
    font-size: var(--font-size-5xl);
    line-height: 18px;
    display: flex;
    color: var(--color-fuchsia-100);
    white-space: pre-wrap;
    align-items: center;
  }
  .separator {
    position: absolute;
    top: 45.98%;
    left: calc(50% - 459.5px);
    line-height: 18px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .weekdays {
    position: absolute;
    top: 53.68%;
    left: calc(50% - 58.5px);
    line-height: 18px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-width: 117px;
  }
  .weekend {
    position: absolute;
    top: 72.88%;
    left: calc(50% - 53.5px);
    line-height: 18px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-width: 106.1px;
  }
  .b {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 0%;
    left: 0%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b1 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 0%;
    left: 59.52%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b2 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 0%;
    left: 74.4%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b3 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 0%;
    left: 89.28%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b4 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 11.51%;
    left: 44.64%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b5 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 11.51%;
    left: 29.76%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .b6 {
    position: absolute;
    height: 88.49%;
    width: 10.72%;
    top: 0%;
    left: 14.88%;
    line-height: 18px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
  .parent {
    position: absolute;
    height: 12.25%;
    width: 84.94%;
    top: 62.04%;
    right: 7.49%;
    bottom: 25.71%;
    left: 7.57%;
    text-align: center;
    color: var(--color-fuchsia-100);
  }
  .group {
    position: absolute;
    height: 12.25%;
    width: 84.94%;
    top: 82.74%;
    right: 7.49%;
    bottom: 5.01%;
    left: 7.57%;
    text-align: center;
    color: var(--color-fuchsia-100);
  }
  .priceComponent {
    position: absolute;
    top: 280px;
    left: 57px;
    width: 1057px;
    height: 475px;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1050px) {
    .mainArena {
      font-size: var(--font-size-10xl);
      line-height: 14px;
    }

    .rtx3070165 {
      font-size: var(--font-size-10xl);
      line-height: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    .mainArena {
      font-size: var(--font-size-3xl);
      line-height: 11px;
    }

    .rtx3070165 {
      font-size: var(--font-size-3xl);
      line-height: 11px;
    }

    .h3h5h {
      font-size: var(--font-size-lgi);
      line-height: 14px;
    }

    .separator {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .weekdays {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .weekend {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b1 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b2 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b3 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b4 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b5 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }

    .b6 {
      font-size: var(--font-size-base);
      line-height: 14px;
    }
  }
</style>
