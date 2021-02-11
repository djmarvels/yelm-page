<template lang="pug">
- const items = [ 'О нас', 'Кейсы', 'Возможности', 'Интеграции', 'Блог', 'Цены', 'F.A.Q', 'Контакты' ];
.navbar.navbar--fixed
  a.navbar-brand
    span Конструктор мобильных приложений
  ul.navbar-menu
    each item in items
      li.navbar-menu__item
        a.navbar-menu__link= item
  .navbar-actions
    a.navbar-actions__link Войти
    button.navbar-actions__link Попробовать бесплатно
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>