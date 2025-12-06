<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <img src="../assets/logo.png" alt="Logo" />

    <nav>
      <ul>
        <li>
          <a href="">
            <Icon icon="material-symbols:search" width="24" height="24" />
          </a>
        </li>
        <li><a href="">Início</a></li>
        <li><a href="">Galeria</a></li>
        <li><a href="">Favoritos</a></li>
        <li>
          <a href=""
            ><Icon
              icon="material-symbols:person-outline"
              width="24"
              height="24"
          /></a>
        </li>
        <li><a href=""><Icon icon="material-symbols:sunny-outline-rounded" width="24" height="24" /></a></li>
        </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
  transition: color 0.3s ease;

  &:hover {
    color: #e1306c;
  }
  }

  img {height: 6vh;
    width:3vw;}
}

/* Mobile */
@media (max-width: 600px) {
  header {
    margin: 1rem;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 20vw;
      height: auto;
    }

    nav ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;

      li {
        font-size: 0.9rem;
      }
    }

    a {
      font-size: 0.9rem;
    }
  }
}

/*Tablets*/
@media (min-width: 601px) and (max-width: 1024px) {
  header {
    margin: 1.5rem;

    img {
      width: 10vw;
      height: auto;
    }

    nav ul {
      gap: 0.8rem;

      li {
        font-size: 1rem;
      }
    }
  }
}
</style>
