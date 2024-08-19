<template>
  <div class="incard">
    <slot class="haeder" name="haeder"></slot>
    <slot name="contant"></slot>
    <slot name="footer"></slot>
    <span class="line"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.cards {
  margin-bottom: 25px;
  .incard {
    transition: 0.3s;
    padding: 40px;
    cursor: pointer;
    border: 1px solid #ddd;
    text-align: center;
    height: 400px;
    i,
    h3,
    p {
      transition: 0.3s;
    }
    i {
      font-size: 45px !important;
      color: #444a57;
    }
    h3 {
      color: #2a2d5499;
    }
    p {
      color: #818998;
    }

    span.line {
      display: block;
      width: 42px;
      height: 3px;
      background-color: #4e4ffa;
      margin: auto;
      margin-top: 40px;
    }
    &:hover {
      * {
        color: #ffffff;
      }
      background-color: #4e4ffa;
      span.line {
        background-color: white;
      }
    }
  }
}
</style>
