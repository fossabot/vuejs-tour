<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="container">
        <h1>
          <router-link to="/">
            <slot>
              <img
                src="../assets/logo.png"
                width="64"
                height="64"
                class="nav-logo">
            </slot>
          </router-link>
        </h1>
        <ul class="nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/editor"
              exact>Editor</router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/katex"
              exact>Katex</router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/file"
              exact>File</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  height: 80px;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;

  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }

  .nav-lang-spe {
    color: #888;
  }

  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;

    a {
      color: #333;
      text-decoration: none;
      display: block;
    }

    span {
      font-size: 12px;
      display: inline-block;
      width: 34px;
      height: 18px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      text-align: center;
      line-height: 18px;
      vertical-align: middle;
      margin-left: 10px;
      border-radius: 3px;
    }
  }

  .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;

    &::before,
    &::after {
      display: table;
      content: '';
    }

    &::after {
      clear: both;
    }
  }

  .nav-gap {
    position: relative;
    width: 1px;
    height: 80px;
    padding: 0 20px;

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 8px);
      width: 1px;
      height: 16px;
      background: #ebebeb;
    }
  }

  .nav-logo {
    vertical-align: sub;
  }

  .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;

    &:last-child {
      cursor: default;
      span {
        opacity: 0.8;
      }
    }

    a {
      text-decoration: none;
      color: #1989fa;
      opacity: 0.5;
      display: block;
      padding: 0 22px;

      &.active,
      &:hover {
        opacity: 1;
      }

      &.active::after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        width: 30px;
        height: 2px;
        background: #409eff;
      }
    }
  }
}

@media (max-width: 850px) {
  .header {
    .nav-logo {
      display: none;
    }
    .nav-item {
      margin-left: 6px;

      &.lang-item,
      &:last-child {
        margin-left: 10px;
      }

      a {
        padding: 0 5px;
      }
    }
  }
}

@media (max-width: 700px) {
  .header {
    .container {
      padding: 0 12px;
    }

    .nav-item {
      a {
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
}
</style>
