import { ref } from "vue";

export const darkMode = ref(false);

export function toggleDarkMode() {
  darkMode.value = !darkMode.value;

  document.documentElement.classList.toggle("dark", darkMode.value);

  localStorage.setItem("darkMode", darkMode.value);
}

// Carrega o tema salvo
if (localStorage.getItem("darkMode") === "true") {
  darkMode.value = true;
  document.documentElement.classList.add("dark");
}
