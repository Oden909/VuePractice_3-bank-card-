<template>
    <button class="submit-button">{{ title }}</button>
</template>
  
<script>
  export default {
    props: {
        title: String,
    },
  };
</script>
  
<style scoped>
  .submit-button {
    background-color: #95B0D8;
    font-size: 25px;
    font-weight: 400;
    padding: 15px 70px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #FFF;
    margin-top: 100px;
  }
</style>