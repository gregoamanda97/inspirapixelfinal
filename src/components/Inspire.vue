<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
// Ele nos permite buscar dados de APIs externas de forma simples.
import axios from "axios";

// Criamos uma variável reativa que vai guardar a lista de imagens.
const imagens = ref([]);

async function carregarImagens() {
  const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=12");
  imagens.value = res.data;
  console.log(res);
}

carregarImagens();

</script>

<template>
  <section>
    <h2>Inspire-se</h2>

    <section class="cards">
      <Card v-for="img in imagens" :imagem="img.download_url" />
    </section>
  </section>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content:center;
}

h2 {
  text-align: center;
  margin: 9rem 0 3rem 0; // Aumenta o espaço acima e mantém espaço abaixo
  font-size: 1.8rem;
  font-weight: 800;
}

.h2  {
  background: #fff;
  color: #333;
}

.dark .h2 {
  background: #121212;
  color: #eaeaea;
}

// 
@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 1.6rem;
  }
}

/* TABLET */
@media (min-width: 601px) and (max-width: 1024px) {
  .cards {
    justify-content: center;
    gap: 1.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }
}
</style>
