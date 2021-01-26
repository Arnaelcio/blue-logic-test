<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="../src/index.css" />
      <title>Projec For Job</title>
    </head>
    <body id="body">
      <div class="container">
        <navBar></navBar>
        <div id="back__bar">
           voltar
        </div>
        <myMain></myMain>
        <mySideBar></mySideBar>
      </div>
    </body>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import myMain from "./components/Main";
import mySideBar from "./components/SideBar";

export default {
  components: {
    NavBar,
    myMain,
    mySideBar,
  },
};
</script>


                    <!-- <vue-ellipse-progress
                      :data="circles"
                      :progress="progress"
                      :angle="-90"
                      color="blue"
                      :colorFill="colorFillGradient"
                      emptyColor="#8ec5fc"
                      :emptyColorFill="emptyColorFillGradient"
                      :size="300"
                      :thickness="10"
                      emptyThickness="10%"
                      lineMode="in 10"
                      :legend="true"
                      :legendValue="180"
                      :legendFormatter="
                        ({ currentValue }) =>
                          new Intl.NumberFormat('de-DE').format(currentValue)
                      "
                      legendClass="legend-custom-style"
                      dash="60 0.9"
                      animation="reverse 700 400"
                      :noData="false"
                      :loading="false"
                      fontColor="white"
                      :half="false"
                      :gap="10"
                      dot="10 blue"
                      reverse
                      fontSize="5rem"
                    >
                      <span slot="legend-value">/200</span>
                      <p slot="legend-caption">GOOD JOB</p>
                    </vue-ellipse-progress> -->