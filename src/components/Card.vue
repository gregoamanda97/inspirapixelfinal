<script setup>
defineProps(["imagem"]);

const like = ref(false);


</script>

<template>
  <div class="card">
    <button @click= "like = !like" class="heart-btn">
     
      {{ like ? "❤️" : "🤍"  }}
  
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
  padding: 0;
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
