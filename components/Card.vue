<template>
    <div class="card">
      <slot>This is a Card</slot>
    </div>
  </template>
  
  <style lang="scss" scoped>
  @use '@/assets/styles/mixins.scss' as *;
  
  .card {
    @include card-style(lightgreen);
    font-family: 'Open Sans', sans-serif;  
  }
  </style>
  