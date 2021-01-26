<template>
  <div class="main__cards">
    <div v-on:mouseover="changeColorOnhover()" class="card">
      <i class="fa fa-clipboard fa-2x text-gray" aria-hidden="true"></i>
      <div class="card_inner">
        <span class="font-bold text-title">2</span>
        <p class="text-primary-p">Relatórios</p>
      </div>
    </div>

    <div class="card">
      <i class="fa fa-list fa-2x text-gray" aria-hidden="true"></i>
      <div class="card_inner">
        <span class="font-bold text-title">0</span>
        <p class="text-primary-p">Atividades</p>
      </div>
    </div>

    <div class="card">
      <i
        class="fa fa-exclamation-circle fa-2x text-gray"
        aria-hidden="true"
      ></i>
      <div class="card_inner">
        <span class="font-bold text-title">0</span>
        <p class="text-primary-p">Ocorrências</p>
      </div>
    </div>

    <div class="card">
      <i class="fa fa-comment fa-2x text-gray" aria-hidden="true"></i>
      <div class="card_inner">
        <span class="font-bold text-title">6</span>
        <p class="text-primary-p">Comentários</p>
      </div>
    </div>
    <div class="card">
      <i class="fa fa-camera fa-2x text-gray" aria-hidden="true"></i>
      <div class="card_inner">
        <span class="font-bold text-title">4</span>
        <p class="text-primary-p">Fotos</p>
      </div>
    </div>

    <div class="card">
      <i class="fa fa-video-camera fa-2x text-gray" aria-hidden="true"></i>
      <div class="card_inner">
        <span class="font-bold text-title">2</span>
        <p class="text-primary-p">Vídeos</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>


<style>
.main__cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 9px 0;
  /* background-color: aqua; */
}

.card {
  border: 1px solid #c2c3c3;
  border-top: 3px solid red;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 8px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  width: 100%;
}

.card_inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.card_inner > span {
  font-size: 25px;
}
</style>