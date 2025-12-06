<script setup>
defineProps(["imagem"]);

import { ref } from "vue";

const liked = ref(false);

function toggleLike() {
  liked.value = !liked.value;
}

</script>

<template>
  <div class="card">
    <button @click="toggleLike" class="heart-btn">❤
      <i class="fas fa-heart" :class="{ liked }"></i>
    </button>

    <img :src="imagem" alt="Praia de São Conrado" />
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 30vw;
  height: 50vh;
  position: relative;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}

/* Botão do coração */
.heart-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 26px;
  color: white;
  padding: 0;

  &:hover {
    color: #f049c2;
  }
}

/* Ícone */
.liked {
  color: #e43070 !important;
}



/* Mobile */
@media (max-width: 600px) {
  .card {
    width: 90vw;
    height: 35vh;

    .heart-btn {
      font-size: 1.2rem;
      right: 8px;
      top: 8px;
    }
  }
}

/* Tablet */
@media (min-width: 601px) and (max-width: 1024px) {
  .card {
    width: 45vw;
    height: 40vh;

    .heart-btn {
      font-size: 1.4rem;
    }
  }
}
</style>
