<template>
  <div 
    class="container"
  >
    <side-bar />
    <all-tasks />
  </div>
</template>

<script>
import AllTasks from './components/AllTasks'
import SideBar from './components/SideBar'


export default {
  name: 'App',
  components: {
    SideBar,
    AllTasks,
  },

  mounted() {
    this.$store.dispatch('setTasksFromStorage')
    this.$store.dispatch('setCategoriesFromStorage')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  // line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
// article > * + * {
//   margin-top: 1em;
// }

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Red Hat Display';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  
}

.container {
  background: rgb(108,39,126);
background: linear-gradient(90deg, rgba(108,39,126,1) 0%, rgba(65,9,121,1) 50%, rgba(81,1,182,1) 100%);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

</style>
