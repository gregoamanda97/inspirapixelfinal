<script setup></script>

<template>
  <section class="hero">
    <div>
      <h2>Onde a paisagem vira <span>inspiração</span>.</h2>
      <p>
        Explore paisagens, cores e luzes que inspiram novas histórias através da
        fotografia.
      </p>
    </div>

    <img src="../assets/fotografo.png" alt="Imagem ilustrativa" />
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;

  h2 {
    font-size: 2rem;
  }

  span {
    font-size: 2.7rem;
    color: #e1306c;
    font-style: italic;
  }

  img {
    width: 40vw;
  }
}



/* 📱 MOBILE (até 600px) */
@media (max-width: 600px) {
  .hero {
    flex-direction: column;
    text-align: center;
    margin: 1.5rem 1rem;

    h2 {
      font-size: 1.8rem;
    }

    span {
      font-size: 2.2rem;
    }

    p {
      max-width: 100%;
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    img {
      width: 80vw;
      max-width: 350px;
      margin-top: 1rem;
    }
  }
}

/* 📱📲 TABLET (601px–1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .hero {
    margin: 2rem 1.5rem;
    gap: 1.5rem;

    h2 {
      font-size: 2.2rem;
    }

    span {
      font-size: 2.8rem;
    }

    p {
      max-width: 60vw;
      font-size: 1.1rem;
    }

    img {
      width: 45vw;
    }
  }
}
</style>
