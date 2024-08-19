<template>
  <div :class="elClass">
    <h3 class="h3carvilla">carvilla</h3>
    <p class="carvillaP">
      Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim
      ad minim veniam.
    </p>
  </div>
  <div class="links" :class="elClass">
    <h3>about devloon</h3>
    <ul>
      <li><a href="">about us</a></li>
      <li><a href="">career</a></li>
      <li><a href="">terms of service</a></li>
      <li><a href="">privacy policy</a></li>
    </ul>
  </div>
  <div :class="elClass">
    <h3>top brands</h3>
    <div class="barnds d-flex row">
      <ul class="col">
        <li><a href="">lamborghini </a></li>
        <li><a href="">camaro</a></li>
        <li><a href="">audi</a></li>
        <li><a href="">infiniti</a></li>
        <li><a href="">ferrari</a></li>
        <li><a href="">land rover</a></li>
      </ul>
      <ul class="col">
        <li>
          <a href="">camaro</a>
        </li>
        <li><a href="">nissan</a></li>
        <li><a href="">porsche</a></li>
        <li><a href="">aston martin</a></li>
        <li><a href="">mersedes</a></li>
        <li><a href="">opel</a></li>
      </ul>
    </div>
  </div>
  <div :class="elClass">
    <h3>news letter</h3>
    <p class="newsP">Subscribe to get latest news update and informations</p>
    <input placeholder="add Email" type="text" />
  </div>

  <div
    class="col-12 py-3 mt-5 copyright d-flex border-top justify-content-between"
  >
    <p>© copyright.designed by themesine Re-developed by Haithem</p>
    <ul>
      <li>
        <a href=""><i class="bi bi-instagram"></i></a>
      </li>
      <li>
        <a href=""><i class="bi bi-facebook"></i></a>
      </li>
      <li>
        <a href=""><i class="bi bi-linkedin"></i></a>
      </li>
      <li>
        <a href=""><i class="bi bi-pinterest"></i></a>
      </li>
      <li>
        <a href=""><i class="bi bi-behance"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["elClass"],
};
</script>

<style lang="scss" scoped>
h3,
.carvillaP {
  color: white;
}
.carvillaP {
  line-height: 1.5;
}
h3 {
  font-size: 15px;
  margin-bottom: 40px;
  text-transform: uppercase;
}
.h3carvilla {
  font-size: 25px;
}
a,
i,
.newsP {
  color: #cfd0e3;
}
.links {
  a {
    padding: 5px;
    display: block;
    transition: 0.3s;
    &:hover {
      padding-left: 10px;
    }
  }
}
.barnds {
  ul {
    padding: 0;
    margin: 0;
    li {
      a {
        padding: 5px;
        display: block;
        transition: 0.3s;
        &:hover {
          padding-left: 10px;
        }
      }
    }
  }
}
.copyright {
  border-top-color: #cfd0e3;
  p {
    color: #cfd0e3;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    a {
      padding: 0 5px;
      i {
        transition: 0.3s;
      }
      &:hover {
        i {
          color: white;
        }
      }
    }
  }
}
</style>
