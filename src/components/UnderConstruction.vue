<template>
     <div class="underConstruction">
        <img :src="require('../assets/icons/icon_eve.svg')" width="100" >
        <div class="underConstruction-text">
            <h2>Under Construction</h2>
            <p>Thank you for being patient.</p>
        </div>
    </div>
</template>

<style lang="scss">
.underConstruction {
  margin-top: 30px;
  display: flex;
  flex-flow: row;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &-text{
    margin-top: 50px;
  }
}
</style>
