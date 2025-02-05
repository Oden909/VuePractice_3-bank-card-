<template>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="card-form">
            <div class="card-container">
                <div class="card">
                    <InputField v-model="holder" :class="{'error-input': errors.holder}" placeholder="Holder of card"/>
                    <div v-if="errors.holder" class="error-text">{{ errors.holder }}</div>
                    <InputField v-model="number" :class="{'error-input': errors.number}" placeholder="Number of card"/>
                    <div v-if="errors.number" class="error-text">{{ errors.number }}</div>
                    <p>VALID THRU</p>
                    <div class="card-bottom">
                        <div class="expiry-container">
                            <div class="error-container">
                                <InputField v-model="month" :class="{'error-input': errors.month}" placeholder="MM" class="expiry-input"/>
                                <div v-if="errors.month" class="error-text">{{ errors.month }}</div>
                            </div>
                            <span></span>
                            <div class="error-container">
                                <InputField v-model="year" :class="{'error-input': errors.year}" placeholder="YY" class="expiry-input"/>
                                <div v-if="errors.year" class="error-text">{{ errors.year }}</div>
                            </div>
                        </div>
                        <div class="card-brands">
                            <img src="../assets/cardLogos.png" alt="cardLogos" class="brand-logo" />
                        </div>
                    </div>
                </div>
                <div class="cvc-card">
                    <span></span>
                    <div class="error-container-cvc">
                        <InputField v-model="cvc" :class="{'error-input': errors.cvc}" placeholder="CVC" type="password" class="cvc-input"/>
                        <div v-if="errors.cvc" class="error-text">{{ errors.cvc }}</div>
                    </div>
                </div>
            </div>
            <SubmitButton title="Send" />
      </form>
      <img :src="image" class="company-logo" alt="Logo" />
    </div>
</template>
  
<script>
    import InputField from "./InputField.vue";
    import SubmitButton from "./SubmitButton.vue";
    import CompanyLogo from "../assets/companyLogo.png";
    import { validationSchema } from "../validationRules.js";
  
    export default {
      components: {
        InputField,
        SubmitButton
      },
      data() {
        return {
          image: CompanyLogo,
          holder: "",
          number: "",
          month: "",
          year: "",
          cvc: "",
          errors: {}
        };
      },
      methods: {
        async submitForm() {
            try {
                await validationSchema.validate({
                    holder: this.holder,
                    number: this.number,
                    month: this.month,
                    year: this.year,
                    cvc: this.cvc
                }, { abortEarly: false });

                this.errors = {};
                this.$emit("add-card", {
                    holder: this.holder,
                    number: this.number,
                    expiry: `${this.month}/${this.year}`,
                    cvc: this.cvc
                });
                this.holder = "";
                this.number = "";
                this.month = "";
                this.year = "";
                this.cvc = "";
            } 
            catch (err) {
                const newErrors = {};
                err.inner.forEach(error => {
                    newErrors[error.path] = error.message;
                });
                this.errors = newErrors;
            }
        }
      }
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
    }
    .cvc-card span {
        width: 100%;
        height: 50px;
        background-color: #979797;
        margin-top: 20px;
    }
    .error-input {
        border: 2px solid #E85D5D;
    }
    .error-input:focus {
        border: 2px solid #E85D5D;
    }
    .error-text {
        color: #E85D5D;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: right;
    }
    .error-container {
        display: flex;
        flex-direction: column;
    }
    .error-container-cvc {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
    }
</style>