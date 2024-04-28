<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <div class="title-wrapper">
      <div class="title">
        <h1>Gelbooru Album Creator</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  background-color: #111111ff;
  color: #3584e4ff;
  padding: 10px;
}

.logo {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #3584e4ff;
}

.logo img {
  height: 42px;
}

.title-wrapper {
  flex: 1;
  text-align: center;
}

.title h1 {
  user-select: none;
  margin: 0;
}
</style>