import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { store, decrement } from "./store.js";
import { state, updateState } from "./scripts.js";
import "./incrementButton.js"; // Import the IncrementButton custom element

export class DecrementButton extends LitElement {
  handleDecrement() {
    const count = store.getState().count;
    if (count >= -14) {
      state.decrementButton.normalRed();
      state.incrementButton.normalGreen();
      store.dispatch(decrement());
    } else {
      state.decrementButton.minimumReached();
    }
  }

  render() {
    return html`<div @click=${this.handleDecrement}>-</div>`;
  }
}

window.customElements.define("decrement-button", DecrementButton);
