<template>
  <main class="main-page">
    <header class="header">
      <div class="logo">
        <img class="logo-img" draggable="false" src="/images/logo.svg" />
      </div>
      <button class="link link-1">
        <CommonButton text="Sign Up" transparent />
      </button>

      <button class="link">
        <CommonButton text="Log In" />
      </button>
    </header>
    <img
      class="inner-media bg-desk"
      draggable="false"
      src="/images/desk-bg.png"
    />
    <!-- <img
      class="inner-media bg-mob"
      draggable="false"
      src="/images/mob-bg.png"
    /> -->

    <div class="content">
      <p class="title-1">ape first.</p>
      <p class="title-2">trade smarter.</p>
      <p class="descr">the memecoin trading terminal that keeps you ahead.</p>

      <button class="btn" disabled>
        <CommonButton text="Launch Soon" />
      </button>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-page {
  position: relative;
  height: 100lvh;
  color: var(--c-white);
}
.title-1,
.title-2 {
  text-align: center;
  font-family: var(--c-bold);
  font-size: 7.5rem;
  line-height: 6.5rem; /* 86.667% */
  letter-spacing: -0.225rem;

  @include mobile {
    font-size: 3.25rem;
    line-height: 3.25rem;
    letter-spacing: -0.0975rem;
  }
}
.title-2 {
  color: var(--c-yellow);
}
.content {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  padding-top: 3rem;
}
.descr {
  margin-top: 1.5rem;
  line-height: 1.25rem;
  @include mobile {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
.btn {
  display: inline-flex;
  margin-top: 2rem;
}

.header {
  position: fixed;
  top: 1.375rem;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 0 2px 0 rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(10px);
  width: 19.75rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  padding-left: 1rem;

  @include mobile {
    width: 18.75rem;
  }
}
.logo-img {
  width: 4.6875rem;
}
.link-1 {
  margin-left: auto;
  margin-right: 0.25rem;
}
.bg-mob {
  display: none;
  @include mobile {
    display: block;
  }
}
.bg-desk {
  display: block;
  @include mobile {
    display: none;
  }
}
.btn:deep(.btn-template) {
  @include mobile {
    padding: 0.75rem 1rem;
  }
}
</style>
