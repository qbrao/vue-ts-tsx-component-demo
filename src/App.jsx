import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
  render(h) {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About1</router-link>
        </div>
        <router-view/>
      </div>
    )
  }
}
