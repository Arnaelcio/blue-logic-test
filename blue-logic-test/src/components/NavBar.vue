
<template>
  <nav class="navbar">
    <div class="nav_icon" v-on:click="openSidebar()">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="navbar__left">
      <a class="active_link" href="#">Obras</a>
      <a href="#">Notificações</a>
      <a href="#">Cadastros</a>
    </div>
    <div class="navbar__right">
      <input class="navbar__right_input" type="text" />
      <a href="#">
        <i class="fa fa-search" aria-hidden="true"></i>
      </a>
      <a href="#">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
      </a>
      <a href="#">
        <img
          class="avatar"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHaVRZZcihQLw/profile-displayphoto-shrink_200_200/0/1597895372684?e=1616630400&v=beta&t=ogAXmtDPjb5Qz0-Ram1q_hEdbMHuz5knAovpoJnxoDA"
          alt=""
        />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.add("sidebar_responsive");
      console.log(sidebar.classList);
    },
  },
};
</script>

<style>
.navbar {
  background: #ffffff;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid lightgray;
}

.nav_icon {
  display: none;
}

.nav_icon > i {
  font-size: 26px;
  color: #a5aaad;
}

.navbar__left > a {
  margin-right: 30px;
  text-decoration: none;
  color: #a5aaad;
  font-size: 15px;
  font-weight: 700;
}

.navbar__left .active_link {
  color: #265acc;
  border-bottom: 3px solid #265acc;
  padding-bottom: 12px;
}

.navbar__right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__right > a {
  margin-left: 20px;
  text-decoration: none;
}

.navbar__right > a > i {
  color: #a5aaad;
  font-size: 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
  padding: 7px;
}

.navbar__right_input {
  border: none;
  color: #a5aaad;
  font-size: 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
  padding: 7px;
}
.navbar__right_input:focus {
  box-shadow: 2px 2px 20px #d9d9d9, -2px -2px 20px #ffffff;
  border: 0 none;
  outline: 0;
}
</style>
