
<template>
  <nav class="navbar">
    <div class="nav_icon" v-on:click="openSidebar()">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div href="#" class="navbar__left">
      <h4 class="navbar__title">BLUELOGIC</h4>
      <a href="#">Obras</a>
      <a href="#">Notificações</a>
      <a href="#">Cadastros</a>
    </div>
    <div class="navbar__right">
      <button class="navbar__right_button" type="text">+ADICIONAR</button>
      <div class="avatar__div active_link">
        <a href="#">
          <img
            class="avatar"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHaVRZZcihQLw/profile-displayphoto-shrink_200_200/0/1597895372684?e=1616630400&v=beta&t=ogAXmtDPjb5Qz0-Ram1q_hEdbMHuz5knAovpoJnxoDA"
            alt=""
          />
        </a>
        <div class="avatar__div__info">
          <h3>Gomes</h3>
          <a href="">arnaelcio@gmail.com</a>
        </div>
        <div class="dropdown-arrow"></div>
      </div>
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
  background: #3e56b2;
  grid-area: nav;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 30px;
  border-bottom: 1px solid lightgray;
}

.nav_icon {
  display: none;
}

.nav_icon > i {
  font-size: 26px;
  color: #a5aaad;
}
.navbar__left {
  display: flex;
  align-items: baseline;
}
.navbar__left > a {
  margin-right: 30px;
  text-decoration: none;
  color: #ffff;
  font-size: 15px;
  font-weight: 700;
}
.navbar__title {
  color: #ffff;
  margin-right: 10px;
}

.navbar__right {
  height: inherit;
  width: 50%;
  justify-content: flex-end;
  display: flex;
  /* justify-content: center; */
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

.navbar__right_button {
  margin-right: 10px;
  border: none;
  font-weight: 900;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
  background: #fda92d;
  width: 25%;
  height: 35px;
}
.avatar__div {
  overflow: hidden;
  display: flex;
  width: 35%;
  height: inherit;
}
.avatar__div.active_link {
  background-color: #3c4da0;
}
.avatar__div a {
  align-self: center;
  margin: 10px;
}
.avatar__div__info h3{
  font-size: 15px;
  color: #ffffff;
  margin: 6px 0 0 4px;
}
.avatar__div__info a{
  color: #ffffff;
  font-size: 12px;
  margin: 6px 0 0 4px;
}
.dropdown-arrow {
  height: 0;
  width: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #ffffff;
  position: relative;
  top: 50%;
  margin-left:auto; 
  margin-right: auto;
}
</style>
