<template>
    <window name="Terminal" class="terminalWrapper" @click="this.focusOnClick">
            <div v-for="(element, index) in this.temp" :key="index" v-html="element" class="nasdasd"></div>
            <div class="terminalInput">
                <span class="terminalSym">{{prog}} > </span>
                <input
                    type="text"
                    id="terminal"
                    ref="terminal"
                    name="terminal"
                    autocomplete="off"
                    autocorrect="off"
                    autofocus
                    @keyup.enter="handleInput"
                    @keydown.up="back"
                    @keydown.down="front"
                    @keydown.ctrl.67="exitProg"
                >
            </div>
    </window>
</template>

<script>
import Window from './Window.vue';

export default {
  components: { Window },
  name: 'terminal',
  data() {
    return {
      prog: '',
      index: 0,
      inputs: [],
      temp: [],
    };
  },
  mounted() {
    this.apiCall('info');
    try {
      this.inputs = JSON.parse(localStorage.getItem('terminal')) || [];
    } catch (e) {
      this.inputs = [];
    }
  },
  methods: {
    focusOnClick() {
      this.index = 0;
      this.$refs.terminal.focus();
    },
    handleInput(element) {
      this.inputHandler(element.target.value);
      // eslint-disable-next-line no-param-reassign
      element.target.value = '';
    },
    back(element) {
      if (this.index < this.inputs.length) {
        this.index += 1;
        // eslint-disable-next-line no-param-reassign
        element.target.value = this.inputs[this.inputs.length - this.index];
      }
    },
    front(element) {
      if (this.index - 1 > 0) {
        this.index -= 1;
        // eslint-disable-next-line no-param-reassign
        element.target.value = this.inputs[this.inputs.length - this.index];
      } else if (this.index - 1 === 0) {
        this.index = 0;
        // eslint-disable-next-line no-param-reassign
        element.target.value = '';
      }
    },
    inputHandler(input) {
      this.inputs.push(input);
      try {
        localStorage.setItem('terminal', JSON.stringify(this.inputs));
      // eslint-disable-next-line no-empty
      } catch (ignored) { }
      switch (input) {
        case 'reset': this.reset(); break;
        case 'clear': this.clear(); break;
        default: this.apiCall(input);
      }
    },
    exitProg() {
      this.prog = '';
    },
    reset() {
      this.inputs = [];
      localStorage.removeItem('terminal');
      this.temp.push('Terminal history cleared.');
    },
    clear() {
      this.index = 0;
      this.temp = [];
    },
    apiCall(input) {
      this.$eventBus.$emit('loadingWindow', true);
      this.$axios
        .get('/terminal', {
          params: {
            input: this.prog ? `${this.prog} ${input}` : input,
          },
        })
        .then((res) => {
          const { data } = res;
          if (data.status == null || data.status.code == null) {
            this.temp.push(res.data);
          } else {
            this.temp.push(data.message);
            this.prog = data.contObj?.prog || '';
          }
        })
        .catch((error) => {
          this.temp.push('It looks like the requested service is currently unavailable :(');
          this.temp.push(error);
        })
        .finally(() => {
          this.$eventBus.$emit('loadingWindow', false);
        });
    },
  },
};
</script>

<style lang="scss">
.terminalInput{

    .terminalSym {
        color: var(--color-accent);
    }

    input {
        color: var(--color-text);
        width: 80%;

        &:focus {
            outline: none;
        }
    }
}

.terminalWrapper {
    height: 100%;
}

.command {
  &-help {
    width: 70px;
    display: inline-block;
  }
}
</style>
