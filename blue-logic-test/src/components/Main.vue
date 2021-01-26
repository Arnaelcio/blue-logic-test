
<template>
  <main>
    <div class="main__container">
      <mainCards></mainCards>
      <div class="container_info">
        <div class="container_info__left">
          <div class="container_info__left__title">
            <div class="text-title">
              <h1>Relatórios recentes</h1>
            </div>
          </div>
          <hr />
          <div class="grid__title__rel">
            <p>Data</p>
            <p>Nº</p>
            <p>Status</p>
          </div>
          <hr />
          <div class="grid__info__rel">
            <p class="grid__info__rel__calendar">13/01/2021</p>
            <p class="grid__info__rel__number">1</p>
            <p class="grid__info__rel__status">Preenchendo Relatório</p>
          </div>
        </div>

        <div class="container_info__fotos">
          <div class="container_info__fotos__title">
            <div class="text-title">
              <h1>Fotos recentes</h1>
            </div>
          </div>
          <hr />
          <div class="container_info__fotos_img">
            <img src="../../src/images/no-image.png" alt="" />
            <h2>Nenhuma imagem encontrada</h2>
            <h3 class="text-gray">Adicione novas fotos e acompanahe a evolução da obra</h3>
          </div>
          <!--             <p>Data</p>
            <p>Nº</p>
            <p>Status</p>
          </div>
          <hr />
          <div class="grid__info__rel">
            <p class="grid__info__rel__calendar">13/01/2021</p>
            <p class="grid__info__rel__number">1</p>
            <p class="grid__info__rel__status">fotos de rell</p>
          </div> -->
        </div>

        <div class="container_info__full">
          <div class="container_info__full__title">
            <div class="text-title">
              <h1>Informações da obra</h1>
              <hr />
            </div>
          </div>
          <div class="container_info__full__grid">
            <p class="container_info__full__grid__title__status">Status</p>
            <p class="container_info__full__grid__info__status">Em Andamento</p>
            <p class="container_info__full__grid__title__number">
              Nº do Contrato
            </p>
            <p class="container_info__full__grid__info__number">1</p>
            <p class="container_info__full__grid__title__term__bar">
              Prazo decorrido
            </p>
            <div class="container_info__full__grid__info__term__bar">
              <p>38%</p>
            </div>
            <p class="container_info__full__grid__title__address">Endereço</p>
            <p class="container_info__full__grid__info__address">
              Rua de teste
            </p>
            <p class="container_info__full__grid__title__contractual__term">
              Prazo Contratual
            </p>
            <p class="container_info__full__grid__info__contractual__term">
              18 dias
            </p>
            <p class="container_info__full__grid__title__elapsed__time">
              Prazo Decorrido
            </p>
            <p class="container_info__full__grid__info__elapsed__time">
              7 dias
            </p>
            <p class="container_info__full__grid__title__deadline">
              Prazo à vencer
            </p>
            <p class="container_info__full__grid__info__deadline">11 dias</p>
            <p class="container_info__full__grid__title__accountable">
              Responsável
            </p>
            <p class="container_info__full__grid__info__accountable">Teste</p>
            <p class="container_info__full__grid__title__hired">Contratada</p>
            <p class="container_info__full__grid__info__hired">Teste</p>
            <p class="container_info__full__grid__title__start__date">
              Data de início
            </p>
            <p class="container_info__full__grid__info__start__date">
              13/01/2021
            </p>
            <p class="container_info__full__grid__title__end__date">
              Data de término
            </p>
            <p class="container_info__full__grid__info__end__date">
              30/01/2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import mainCards from "./MainCards";

export default {
  methods: {},

  components: {
    mainCards,
  },
};
</script>

<style>
/* .container_info__full__title {
  grid-column: 1 / 6;
  margin-top: 4px;
  margin-left: 10px;
} */

main {
  background: #c1c1c1;
  grid-area: main;
  overflow-y: auto;
  height: fit-content;
}

.main__container {
  padding: 15px 25px;
}

.container_info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 20px;
  margin-top: 20px;
}
.container_info__left {
  padding: 20px 0px 0px 0px;
  border-radius: 5px;
  background: #ffffff;
}
.container_info__left__title {
  display: flex;
}
.container_info__left__title > div {
  width: 100%;
}
.container_info__left__title > div > h1 {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
}
.grid__title__rel {
  font-weight: 900;
  display: grid;
  grid-template-columns: 0.8fr 0.5fr 1fr;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 4px;
  margin-left: 10px;
}
.grid__info__rel {
  font-weight: 500;
  display: grid;
  grid-template-columns: 0.8fr 0.5fr 1fr;
  grid-template-rows: 50px;
  align-items: center;
  margin-top: 4px;
  margin-left: 10px;
}

.grid__info__rel__status {
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  background-color: #fda92d;
  color: #ffffff;
  width: 80%;
}

.container_info__fotos {
  padding: 20px 0px 0px 0px;
  border-radius: 5px;
  background: #ffffff;
}
.container_info__fotos__title {
  display: flex;
}
.container_info__fotos__title > div {
  width: 100%;
}
.container_info__fotos__title > div > h1 {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
}

.container_info__fotos_img {
  text-align: center;
  width: 100%;
  height: 50%;
}
.container_info__fotos_img img {
  width: 50%;
  height: 100%;
}
.container_info__fotos_img h2 {
  text-align: center;
}

.container_info__full {
  padding: 20px 0px 0px 0px;
  border-radius: 5px;
  background: #ffffff;
  grid-column: 1 / 3;
}

.container_info__full__title {
  display: flex;
}
.container_info__full__title > div {
  width: 100%;
}
.container_info__full__title > div > h1 {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
}

.container_info__full__grid {
  font-weight: 900;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 37px 37px 37px 37px 37px 37px;
}
.container_info__full__grid__title__status {
  margin-top: 4px;
  grid-column: 1;
  grid-row: 1;
  margin-left: 10px;
}
.container_info__full__grid__info__status {
  margin-top: 4px;
  grid-column: 1;
  grid-row: 2;
  margin-left: 10px;
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  background-color: #fda92d;
  color: #ffffff;
  width: 70%;
}
.container_info__full__grid__title__number {
  grid-column: 2;
  grid-row: 1;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__number {
  grid-column: 2;
  grid-row: 2;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__term__bar {
  grid-column: 3 / 6;
  grid-row: 1;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__term__bar {
  background-color: #e9ebef;
  border-radius: 4px;
  width: 95%;
  height: fit-content;
  grid-column: 3 / 6;
  grid-row: 2;
  /* margin-top: 4px; */
  margin-left: 10px;
}

.container_info__full__grid__info__term__bar > p {
  background-color: #3e56b2;
  border: 2px solid aqua;
  color: #ffffff;
  width: 40%;
  border-radius: 4px;
  text-align: center;
}

.container_info__full__grid__title__address {
  grid-column: 1;
  grid-row: 3;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__address {
  grid-column: 1;
  grid-row: 4;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__contractual__term {
  grid-column: 3;
  grid-row: 3;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__contractual__term {
  grid-column: 3;
  grid-row: 4;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__elapsed__time {
  grid-column: 4;
  grid-row: 3;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__elapsed__time {
  grid-column: 4;
  grid-row: 4;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__deadline {
  grid-column: 5;
  grid-row: 3;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__deadline {
  grid-column: 5;
  grid-row: 4;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__accountable {
  grid-column: 1;
  grid-row: 5;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__accountable {
  grid-column: 1;
  grid-row: 6;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__hired {
  grid-column: 2;
  grid-row: 5;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__hired {
  grid-column: 2;
  grid-row: 6;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__title__start__date {
  grid-column: 3;
  grid-row: 5;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__start__date {
  grid-column: 3;
  grid-row: 6;
  margin-top: 4px;
  margin-left: 10px;
}

.container_info__full__grid__title__end__date {
  grid-column: 4;
  grid-row: 5;
  margin-top: 4px;
  margin-left: 10px;
}
.container_info__full__grid__info__end__date {
  grid-column: 4;
  grid-row: 6;
  margin-top: 4px;
  margin-left: 10px;
}

/* .grid__title__full_term {
  /* background-color: aqua; 

}*/

/* .grid__title__full_number {
  grid-column: 2;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 1fr 1fr 1fr;
  align-items: center;
  margin-top: 4px; 
} */

/* .container_info__full__title > div {
  width: 100%;
}

.container_info__left__title > div > h1,
.container_info__full__title > div > h1 {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
}*/
</style>
 