<template>
  <div class="perant p-3">
    <form action="">
      <div>
        <label for="year">select year</label>
        <input placeholder="Year" type="text" name="" id=" year" />

        <label for="make">select make</label>
        <input placeholder="Make" type="text" name="" id=" make" />
      </div>

      <div>
        <label for="price">select price</label>
        <input placeholder="Price" type="text" name="" id="price" />

        <label for="style">body style </label>
        <input placeholder="Style" type="text" name="" id="style" />
      </div>
      <div>
        <label for="condition">car condition </label>
        <input placeholder="Condition" type="text" name="" id="condition" />

        <label for="price">select price </label>
        <input placeholder="Price" type="text" name="" id="price" />
      </div>
      <div class="button">
        <input class="Primrybutton" type="button" value="serarch " />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap/scss/bootstrap" as *;
div.perant {
  position: absolute;
  top: 100%;
  z-index: 5;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  max-width: 1100px;
  min-width: 80%;
  box-shadow: 0 10px 40px 0px rgba(38, 40, 64, 0.2);
  form {
    display: flex;
    justify-content: space-evenly;

    flex-wrap: wrap;
    div {
      flex-basis: 16%;
      padding: 10px;
      label {
        text-transform: capitalize;
        color: #757589;
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
      input {
        padding: 21px 10px;
        border: none;
        //#757589
        background-color: #f8f8f8;
      }
      &.button {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          border-radius: 5px;
          width: 170px;
        }
      }
    }
  }
  @include media-breakpoint-down("lg") {
    & {
      width: 90%;
      form {
        flex-direction: column;
        div {
          flex-basis: 100%;
          display: flex;
          flex-direction: column;
          &.button {
            input {
              width: 250px;
            }
          }
        }
      }
    }
  }
}
</style>
