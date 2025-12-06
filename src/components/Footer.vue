<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-section">
        <h4>Contato</h4>
        <p>contato@inspirariens.com</p>
        <a href="#">Central de ajuda</a>
        <p>Rio de Janeiro – Brasil</p>
      </div>

      <div class="footer-section">
        <h4>Sobre</h4>
        <a href="#">Políticas</a>
        <a href="#">Políticas de privacidade</a>
        <a href="#">Blog</a>
      </div>

      <div class="footer-newsletter">
        <h4>Assine nossa newsletter</h4>
        <input type="email" placeholder="Seu email" />
        <button>Inscrever-se</button>
      </div>

    </div>

    <div class="footer-social">
      <img src="https://i.postimg.cc/yx5x7qtp/facebook.png" />
      <img src="https://i.postimg.cc/SR5Rm033/Twitter.png" />
      <img src="https://i.postimg.cc/cCjCdq2j/email.png" />
    </div>
  </footer>
</template>

<style scoped lang="css">


footer {
  background: #fff;
  padding: 4rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 0 1rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: .4rem;
  min-width: 200px;

  h4 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: .5rem;
  }

  a {
    margin: 0;
    font-size: .9rem;
    text-decoration: none;
    color: #e43070;

    &:hover {
      color: #ee96b5;
    }
  }

  p {
    font-size:0.9rem;
    font-style: italic;
  }
}

.footer-newsletter {
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: .7rem;

  input {
    width: 100%;
    padding: .7rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background: #e43070;
    color: white;
    border: none;
    padding: .7rem;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
}

.footer-social {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: .2s;

    &:hover {
      opacity: .7;
    }
  }
}



/* 📱 MOBILE — 1 COLUNA */
@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .footer-section,
  .footer-newsletter {
    min-width: 100%;
  }

  .footer-newsletter input {
    width: 100%;
  }

  .footer-newsletter button {
    width: 100%;
  }
}



/* 📲 TABLET — 2 COLUNAS */
@media (min-width: 601px) and (max-width: 1024px) {
  .footer-container {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-section,
  .footer-newsletter {
    width: 45%;
  }
}

/* 🖥 DESKTOP — 3 COLUNAS (padrão) */
@media (min-width: 1025px) {
  .footer-container {
    flex-wrap: nowrap;
  }

  .footer-section {
    width: auto;
  }

  .footer-newsletter {
    width: 300px;
  }
}


</style>