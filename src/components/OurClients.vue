<template>
  <div class="cont">
    <div class="div1">
      <div class="text">
        <h3>Hamid Al-Naamani</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          similique
        </p>
      </div>
    </div>
    <div class="div2">
      <div class="text">
        <h3>Hamid Al-Naamani</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          similique
        </p>
      </div>
    </div>
    <div class="div3">
      <div class="text">
        <h3>Hamid Al-Naamani</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          similique
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap/scss/bootstrap" as *;
.cont {
  display: flex;
  margin-top: 150px;
  gap: 40px;

  div.div1,
  .div2,
  .div3 {
    flex-basis: calc(100% / 3);
    padding: 20px;
    position: relative;
    height: 750px;
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;
    &.div1 {
      background-image: url("../assets/images/clients/c4 (1).jpg");
    }
    &.div2 {
      background-image: url("../assets/images/clients/c5.jpg");
    }
    &.div3 {
      background-image: url("../assets/images/clients/c6.jpg");
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.3s;
      background-color: transparent;
      top: 0;

      left: 0;
    }
    div.text {
      color: white;
      position: absolute;
      width: 100%;
      z-index: 10;
      opacity: 0;
      left: 50%;
      transition: 0.3s;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 0px 20px;
    }
    &:hover {
      &::before {
        background-color: #4e4eface;
      }
      div.text {
        opacity: 1;
      }
    }
  }
  @include media-breakpoint-down("lg") {
    & {
      flex-wrap: wrap;
      justify-content: center;
      div.div1,
      .div2,
      .div3 {
        flex-basis: 80%;
      }
    }
  }
}
</style>
