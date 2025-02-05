<template>
    <div class="input-field">
        <input 
            :type="type" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
            :placeholder="placeholder"
        />
    </div>
</template>
  
<script>
  export default {
    props: {
      placeholder: String,
      modelValue: String,
    },
    emits: ["update:modelValue"],
  };
</script>
  
<style scoped>
  .input-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    padding: 8px;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid #ADADAD;
  }

  input:focus {
    outline: none;
    border: 2px solid #176FC1
  }
</style>
