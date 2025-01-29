<template>
  <div class="app-container">
    <CardForm @add-card="addCard" />
    <CardTable :cards="cards" />
  </div>
</template>

<script>
import CardForm from "./components/CardForm.vue";
import CardTable from "./components/CardTable.vue";

export default {
  components: {
    CardForm,
    CardTable,
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    addCard(card) {
      this.cards.push(card);
    },
  },
};
</script>

<style scoped>
  .app-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    padding: 100px;
    border-left: 2px solid black;
    border-right: 2px solid black;
  }

</style>