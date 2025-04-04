<script setup>
import Header from '~/components/Header.vue'
import Banner from '~/components/Banner.vue'
import Card from '~/components/Card.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <Header />
  <Banner />
  <main class="content">
    <h1>Привет, Нана </h1>
    <p>Coding is great!</p>
    <div class="cards">
      <Card>Here</Card>
      <Card>And here</Card>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.content {
  text-align: center;
  padding: 20px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
