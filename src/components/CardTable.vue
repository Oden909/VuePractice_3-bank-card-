<template>
    <div class='table-container'>
        <table class="card-table">
        <thead>
            <tr>
            <th>NAME</th>
            <th>CARD NUMBER</th>
            <th>DATE EXPIRE</th>
            <th>CODE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(card, index) in cards" :key="index">
            <td>{{ card.holder }}</td>
            <td>{{ card.number }}</td>
            <td>{{ card.expiry }}</td>
            <td>***</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
  
<script>
  export default {
    props: {
      cards: Array,
    },
  };
</script>
  
<style scoped>
    .table-container{
        width: 100%;
        padding: 40px;
        border: none;
        border-radius: 16px;
        background-color: #95B0D8;
        margin-top: 100px;
    }
    .card-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
    }
    .card-table th {
        border: 1px solid #828282;
        font-weight: 700;
        padding: 8px;
        text-align: left;
        background-color: #E5E5E5;
    }

    .card-table td {
        font-weight: 400;
        padding: 8px;
        border: 1px solid #828282;
        background-color: #FFFFFF;
    }
</style>