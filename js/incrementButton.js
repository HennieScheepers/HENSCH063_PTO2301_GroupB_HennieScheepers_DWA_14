import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { store, increment } from "./store.js";
import { state } from "./scripts.js";

export class IncrementButton extends LitElement {
  handleIncrement() {
    const count = store.getState().count;
    if (count <= 14) {
      state.incrementButton.normalGreen();
      state.decrementButton.normalRed();
      store.dispatch(increment());
    } else {
      state.incrementButton.maximumReached();
    }
  }

  render() {
    return html`<div @click=${this.handleIncrement}>+</div>`;
  }
}

window.customElements.define("increment-button", IncrementButton);
