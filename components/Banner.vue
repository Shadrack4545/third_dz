<template>
    <div class="banner">This is a Banner</div>
  </template>
  
  <style lang="scss" scoped>
  @use '@/assets/styles/mixins.scss' as *;
  
  .banner {
    @include card-style(lightblue);
    font-family: 'Open Sans', sans-serif; 
  }
  </style>
  