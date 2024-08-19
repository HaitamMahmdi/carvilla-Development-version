<template>
  <main>
    <div class="container">
      <form @submit.prevent action="">
        <label for="email">Email</label>
        <input
          placeholder="example@gmail.com"
          required
          type="email"
          name=""
          id="email"
        />
        <label for="textArea"> Youer Message </label>
        <textarea
          placeholder=" Youer Message Content"
          required
          name=""
          id="textArea"
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />
      </form>
    </div>
  </main>
  <footer>
    <div class="container d-flex row m-auto">
      <Footer-com-vue elClass="col" />
    </div>
  </footer>
</template>

<script>
import FooterComVue from "@/components/FooterCom.vue";
export default {
  components: { FooterComVue },
};
</script>

<style scoped lang="scss">
main {
  padding-top: 210px;
  padding-bottom: 100px;
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 25px;
    max-width: 500px;
    padding: 20px 40px;
    background-color: #3f51b5;
    margin: auto;
    label {
      color: white;
      font-size: 20px;
      padding: 15px;
      margin: 5px 0px;
    }
    input[required],
    textarea {
      border: none;
      padding: 10px;
      background-color: #2e3c8f;
      color: white;
    }
    input[type="submit"],
    input[type="reset"] {
      width: 250px;
      margin: auto;
      padding: 15px;
      background-color: #4e4ffa;
      border: none;
      color: white;
      margin-top: 25px;
    }
  }
}
</style>
