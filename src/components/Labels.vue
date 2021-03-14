<template>
    <span class="label">
        {{text}}
    </span>
</template>

<script>
export default {
  name: 'label',
  props: {
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  position: absolute;
  width: fit-content;
  margin: 0 5px;
  padding: 5px 7px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: .06rem;
  color: #ffffff;
  background-color: var(--color-accent);
  border-radius: 5px;
}
</style>
