<template>
  <div class="container">
    <div class="side-bar">
      <div class="menu__header">
        <img src="..//public/image/Manager.svg" alt="">
        <span class="menu__title">To Do Manager</span>
      </div>
      <ul class="menu">
        <li class="menu__item">
          <!-- <img class="menu__icon" src="..//public/image/grid.png" alt=""> -->
          <span>All Tasks</span>
        </li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/star.png" alt=""><span>Starred</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/Oval.png" alt=""><span>Important</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/check-circle.png" alt=""><span>Completed</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/trash-2.png" alt=""><span>Deleted</span></li>
      </ul>

      <ul>
        <li class="menu__item">categories</li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/blue.svg" alt=""><span>Work</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/yellow.svg" alt=""><span>Personal</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/orange.svg" alt=""><span>Shopping</span></li>
        <li class="menu__item"><img class="menu__icon" src="..//public/image/green.svg" alt=""><span>Education</span></li>
      </ul>
      <button class="menu__button" type="button"><img src="..//public/image/plus.svg" alt="">Add Task</button>
    </div>
    <div class="tasks">
      <div class="tasks__header">
        <h1 class="tasks__title">All Tasks</h1>
        <input class="tasks__search" type="text" placeholder="Search">
      </div>
      <div class="tasks__subtitle">
        <span class="tasks__subtitle-part">Task</span>
        <span class="tasks__subtitle-part">Categories</span>
        <span class="tasks__subtitle-part">Actions</span>
      </div>
      <div class="tasks__item">

        <div class="tasks__item-box">
          <input class="tasks__checkbox" type="checkbox"  id="task" name="task" value="yes">
          <label for="task"></label>
          <div class="tasks__item-task">
            <p class="tasks__item-name">Task title will be placed here</p>
            <p class="tasks__item-data">24  April 2020</p>
          </div>
        </div>
        <p class="tasks__item-category">
          <img src="..//public/image/orange.svg" alt="">
          Shopping
        </p>
        <div class="tasks__item-icons">
          <img src="..//public/image/editTask.svg" alt="">
          <img src="..//public/image/dott.svg" alt="">
        </div>
      </div>
      
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {

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
  background: rgb(202, 202, 202);
  padding: 20px;
  display: flex;
  gap: 16px;
}

.side-bar {
  width: 288px;
  height: 952px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
}

.menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;

    &__header {
      display: flex;
      align-items: center;
      padding: 24px;
      gap: 12px;
    }
    &__title {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color:#120E21; 
      // padding: 24px 0px;
    }

    &__item {
      display: flex;
      align-items: center;
      padding: 8px 24px;
      gap: 12px;
    }

    &__item:hover {
      background: #F9F9FB;
    }

    &__icon {

    }

    &__button {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 44px;
      gap: 8px;
      background: #9378FF;
      color: #FFFFFF;
      box-shadow: 0px 100px 80px rgba(147, 120, 255, 0.07), 0px 41.7776px 33.4221px rgba(147, 120, 255, 0.0503198), 0px 22.3363px 17.869px rgba(147, 120, 255, 0.0417275), 0px 12.5216px 10.0172px rgba(147, 120, 255, 0.035), 0px 6.6501px 5.32008px rgba(147, 120, 255, 0.0282725), 0px 2.76726px 2.21381px rgba(147, 120, 255, 0.0196802);
      border-radius: 20px;
    }
}

.tasks {
  width: 1304px;
  height: 952px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
  padding: 40px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }

  &__search {
    font-size: 14px;
    line-height: 24px;
    color: #808080;
    width: 324px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D6D6D6;
    border-radius: 24px;
    padding-left: 16px;
  }

  &__search::placeholder {
    background: url(..//public/image/search.svg) no-repeat left 2px bottom 6px;
    background-size: 20px;
    height: 24px;
    padding-left: 32px;
  }

  &__subtitle {
    display: grid;
    grid-template-columns: 33% auto 20%;
    padding: 20px 14px 
  }

  &__subtitle-part {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #808080;
  }

  &__subtitle-part:first-child {
    padding-left: 20px;

  }
  &__subtitle-part:last-child {
    text-align: end;

  }

  &__item {
    display: grid;
    grid-template-columns: 33% auto 20%;
    padding: 16px 0px;
    box-shadow: inset 0px -1px 0px #E9E9E9, inset 0px 1px 0px #E9E9E9;
  }


  &__item-box {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checkbox+label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #B3B3B3;
    border-radius: 50%;
    background-position: center center;
  }

  &__checkbox:checked+label::before {
    border-color: #9378FF;
    background-image: url(..//public/image/Active.svg)
}

  &__item-task {
    padding: 0px 0px 0px 16px;
  }
  &__checkbox {
    
  }

  &__item-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #120E21;
  }

  &__item-category {
    display: flex;
    align-items: center;
  }

  &__item-icons {
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }
}

</style>
