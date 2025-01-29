<template>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="card-form">
        <div class="card-container">
            <div class="card">
            <InputField placeholder="Holder of card" v-model="holder"/>
            <InputField placeholder="Number of card" v-model="number"/>
            <p>VALID THRU</p>
            <div class="card-bottom">
                <div class="expiry-container">
                    <InputField placeholder="MM" v-model="month" class="expiry-input"/>
                    <span></span>
                    <InputField placeholder="YY" v-model="year" class="expiry-input"/>
                </div>
                <div class="card-brands">
                    <img src="../assets/cardLogos.png" alt="cardLogos" class="brand-logo"/>
                </div>
            </div>
            </div>
            <div class="cvc-card">
                <span></span>
                <InputField placeholder="CVC" v-model="cvc" type="password" class="cvc-input"/>
            </div>
        </div>
        <SubmitButton title="Send"/>
        </form>
        <img :src="image" class="company-logo" alt="Logo"/>
    </div>
</template>
  
<script>
  import InputField from "./InputField.vue";
  import SubmitButton from "./SubmitButton.vue";
  import CompanyLogo from "../assets/companyLogo.png";
  
  export default {
    components: {
      InputField,
      SubmitButton,
    },
    data() {
      return {
        image: CompanyLogo,
        holder: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
      };
    },
    methods: {
      submitForm() {
        this.$emit("add-card", {
          holder: this.holder,
          number: this.number,
          expiry: `${this.month}/${this.year}`,
          cvc: this.cvc,
        });
        this.holder = "";
        this.number = "";
        this.month = "";
        this.year = "";
        this.cvc = "";
      },
    },
  };
</script>
  
<style scoped>
    .form-container {
        display: flex;
        justify-content: space-between;
        gap: 200px;
        align-items: center;
    }
    .card-form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .company-logo {
        width: 191px;
        height: 122px;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .card {
        background-color: #ECECEC;
        color: #A0A0A0;
        padding: 20px;
        width: 300px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        position: sticky;
        z-index: 1;
    }
    .card p {
        margin: 0;
        color: black;
        font-size: 15px;
        font-weight: 400;
    }
    .card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .expiry-container {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .expiry-container span {
        width: 25px;
        height: 2px;
        background-color: #ADADAD;
        transform: rotate(-70deg);
        margin-bottom: 10px;
    }
    .expiry-input {
        max-width: 75px;
    }
    .brand-logo {
        width: 112px;
        height: 42px;
    }
    .cvc-card {
        position: absolute;
        z-index: 0;
        top: 20%;
        left: 40%;
        background-color: #C7C7C7;
        color: #A0A0A0;
        width: 340px;
        height: 214px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 70px;
    }
    .cvc-input {
        max-width: 75px;
        margin-right: 20px;
    }
    .cvc-card span {
        width: 100%;
        height: 50px;
        background-color: #979797;
        margin-top: 20px;
    }
</style>