<template>
  <div id="sidebar">
    <div class="sidebar__title">
      <div class="sidebar__img">
        <i class="fa fa-clipboard"></i>
      </div>
      <i
        v-on:click="closeSidebar()"
        class="fa fa-times"
        id="sidebarIcon"
        aria-hidden="true"
      ></i>
    </div>

    <div class="sidebar__menu">
      <div class="sidebar__link">
        <div class="sidebar_navbar__left">
          <a href="#">Obras</a>
          <a href="#">Notificações</a>
          <a href="#">Cadastros</a>
        </div>
      </div>
      <div class="sidebar__link active_menu_link">
        <i class="fa fa-th-large" aria-hidden="true"></i>
        <a v-on:click="say('oi')" href="#">Visão Geral</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-clipboard"></i>
        <a href="#">Relatórios</a>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-filter"></i>
        <a v-on:click="toggleSidebarSubMenu()" href="#">Filtro de buscar</a
        ><br /><br />
        <div id="sidebar_sub_menu">
          <div class="sidebar__link">
            <i class="fa fa-camera"></i>
            <a href="#">Galeria de fotos</a>
          </div>

          <div class="sidebar__link">
            <i class="fa fa-video-camera"></i>
            <a href="#">Vídeos</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-tasks"></i>
            <a href="#">Atividades</a>
          </div>

          <div class="sidebar__link">
            <i class="fa fa-exclamation-circle"></i>
            <a href="#">Ocorrências</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-comment"></i>
            <a href="#">Comentários</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-thermometer-empty"></i>
            <a href="#">Condição Climática</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-money"></i>
            <a href="#">Histograma mão de obra</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-cogs"></i>
            <a href="#">Histograma equipamentos</a>
          </div>
        </div>
      </div>
      <div class="sidebar__link">
        <i class="fa fa-cog"></i>
        <a v-on:click="toggleSidebarSubMenu2()" href="#">Editar Obra</a
        ><br /><br />
        <div id="sidebar_sub_menu2">
          <div class="sidebar__link">
            <i class="fa fa-pencil-square-o"></i>
            <a href="#">Cadastro da obra</a>
          </div>

          <div class="sidebar__link">
            <i class="fa fa-file-excel-o"></i>
            <a href="#">Personalizar relatórios</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-users"></i>
            <a href="#">Usuários acesso</a>
          </div>

          <div class="sidebar__link">
            <i class="fa fa-files-o"></i>
            <a href="#">Documentos da obra</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    say: function (message) {
      alert(message);
    },
    closeSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.remove("sidebar_responsive");
    },
    toggleSidebarSubMenu() {
      const sidebarSubMenu = document.getElementById("sidebar_sub_menu");
      sidebarSubMenu.classList.toggle("show");
    },
    toggleSidebarSubMenu2() {
      const sidebarSubMenu2 = document.getElementById("sidebar_sub_menu2");
      sidebarSubMenu2.classList.toggle("show");
    },
  },
};
</script>

<style>
#sidebar {
  background: #ffffff;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 20px 20px 20px 0px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  /* height: fit-content; */
}

.sidebar__title {
  display: flex;
  justify-content: center;
  color: #f3f4f6;
  margin: 1px 1px 0px 20px;
  background-color: #c1c1c1;
  height: 150px;
}

.sidebar__img {
  font-size: 110px;
  color: #a0a0a0;
  display: flex;
  align-items: center;
}

.sidebar__title > div > img {
  width: 75px;
  object-fit: contain;
}

.sidebar__title > div > h1 {
  font-size: 18px;
  display: inline;
}

.sidebar__title > i {
  font-size: 18px;
  display: none;
}

.sidebar__menu > h2 {
  color: #000000;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
}
.sidebar__link h2 {
  color: #000000;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
}

.sidebar__link {
  padding: 10px;
  /* border-radius: 3px; */
  margin-bottom: 5px;
}

.active_menu_link {
  width: 100%;
  background:#c1c1c1;
  color: #3e56b2;
}

.active_menu_link a {
  color: #3e56b2 !important;
}
.sidebar_navbar__left {
  display: none;
}
.sidebar__link > a {
  text-decoration: none;
  color: #000000;
  font-weight: 700;
}

.sidebar__link > i {
  margin-right: 10px;
  font-size: 18px;
}

.sidebar_responsive {
  display: inline !important;
  z-index: 9999 !important;
  left: 0 !important;
  position: absolute;
}
#sidebar_sub_menu {
  display: none;
}
#sidebar_sub_menu2 {
  display: none;
}
.show {
  display: inline !important;
  z-index: 9999 !important;
}
</style>
