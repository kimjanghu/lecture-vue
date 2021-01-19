import FormView from '../views/FormView.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', () => this.onClickReset())
  },
  
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
  },

  onClickReset() {
    console.log(tag, 'onClickReset()')
  }
}