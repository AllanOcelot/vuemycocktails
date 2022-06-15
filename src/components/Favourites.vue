<template>
  <b-dropdown text="Your Favourites" class="m-2 favourites">
    <div class="dropdownItem">
      <div class="image"></div>
      <div class="content">
        <p>Drink Name</p>
        <span class="remove">x</span>
      </div>
    </div>
  </b-dropdown>
</template>

<script>
export default {
  name: 'Favourites',
}
</script>

<style lang="scss">
  .favourites {
    .dropdown-menu.show {
      padding: 0;
    }
    .dropdownItem{
      display: flex;
      align-items: center;
      width: 100%;
      width: 300px;
      padding: 10px 20px;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      position: relative;
      .image {
        width: 50px;
        height: 50px;
        background: #f1f1f1;
      }
      .content {
        display: flex;
        flex-grow: 1;
        padding-left: 10px;
        padding-right: 30px;

        p {
          margin: 0;
        }

        span.remove {
          background: red;
          text-align: center;
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 70px;
          line-height: 70px;
        }
      }

      &:hover {
        background: #f1f1f1;
      }
    }
  }
</style>
