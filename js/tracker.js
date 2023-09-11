import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { store } from "./store.js"; // Import the store

export class Tracker extends LitElement {
  static properties = {
    count: { type: Number }, // Create a property to store the count from the store
  };

  constructor() {
    super();
    this.count = store.getState().count; // Initialize count with the current count from the store
  }

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = store.subscribe(() => {
      // Subscribe to store updates
      this.count = store.getState().count; // Update the count property when the store state changes
    });
  }

  disconnectedCallback() {
    // Unsubscribe from the store when the component is disconnected
    this.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`<div>${this.count}</div>`; // Render the count property
  }
}

window.customElements.define("counter-tracker", Tracker);
