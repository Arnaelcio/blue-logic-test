<template>
      <div class="main__cards">
        <div class="card">
          <i
            class="fa fa-clipboard fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div class="card_inner">
            <p class="text-primary-p">Relatórios</p>
            <span class="font-bold text-title">2</span>
          </div>
        </div>
        <div class="card">
          <i class="fa fa-list fa-2x text-red" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Atividades</p>
            <span class="font-bold text-title">0</span>
          </div>
        </div>

        <div class="card">
          <i
            class="fa fa-exclamation-circle fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div class="card_inner">
            <p class="text-primary-p">Ocorrências</p>
            <span class="font-bold text-title">0</span>
          </div>
        </div>

        <div class="card">
          <i class="fa fa-comment fa-2x text-green" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Comentários</p>
            <span class="font-bold text-title">6</span>
          </div>
        </div>
        <div class="card">
          <i class="fa fa-camera fa-2x text-green" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Fotos</p>
            <span class="font-bold text-title">4</span>
          </div>
        </div>

        <div class="card">
          <i class="fa fa-video-camera fa-2x text-green" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Vídeos</p>
            <span class="font-bold text-title">2</span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  
}
</script>


<style>
.main__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 9px 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
  cursor: pointer;
}


.card_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_inner > span {
  font-size: 25px;
}

</style>