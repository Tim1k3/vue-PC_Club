<template>
  <div :class="$style.reservation">
    <section :class="$style.credentialsInput">
      <a :class="$style.name">Name</a>
      <div :class="$style.fieldInputs">
        <div :class="$style.yourName">your name</div>
      </div>
    </section>
    <section :class="$style.credentialsInput1">
      <div :class="$style.email">Email</div>
      <div :class="$style.fieldInputs">
        <div :class="$style.yourEmail">your email</div>
      </div>
    </section>
    <section :class="$style.credentialsInput1">
      <div :class="$style.email">Password</div>
      <div :class="$style.fieldInputs">
        <div :class="$style.yourName">your password</div>
      </div>
    </section>
    <div :class="$style.button">
      <div :class="$style.reserve">reserve</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Website",
    props: {
      onClose: {
        type: Function as unknown as
          | (() => (e?: MouseEvent) => void)
          | undefined,
      },
    },
  });
</script>
<style module>
  .name {
    text-decoration: none;
    width: 248px;
    position: relative;
    line-height: 20px;
    color: inherit;
    display: flex;
    align-items: center;
  }
  .yourName {
    position: relative;
    line-height: 20px;
  }
  .fieldInputs {
    align-self: stretch;
    height: 54px;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-100);
    border: 2px solid var(--color-dimgray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xs);
    color: var(--color-dimgray);
  }
  .credentialsInput {
    width: 287px;
    height: 87px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mini);
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .email {
    align-self: stretch;
    position: relative;
    line-height: 20px;
  }
  .yourEmail {
    position: relative;
    line-height: 20px;
    display: inline-block;
    min-width: 129px;
  }
  .credentialsInput1 {
    width: 287px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .reserve {
    flex: 1;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 21px;
    text-transform: capitalize;
  }
  .button {
    width: 201px;
    margin: 0 !important;
    position: absolute;
    bottom: 70px;
    left: calc(50% - 100.5px);
    border-radius: var(--br-6xl);
    background-color: var(--color-palevioletred-200);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) 62px;
    box-sizing: border-box;
  }
  .reservation {
    position: relative;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 70px 50px var(--padding-186xl);
    box-sizing: border-box;
    gap: var(--gap-41xl);
    line-height: normal;
    letter-spacing: normal;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
