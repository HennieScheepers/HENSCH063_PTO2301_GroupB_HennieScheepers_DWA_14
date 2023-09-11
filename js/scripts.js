export const state = {
  incrementButton: {
    normalGreen: () => {
      document.getElementById("increment--button").style.background =
        "rgb(168, 255, 173)";
    },
    maximumReached: () => {
      document.getElementById("increment--button").style.background =
        "rgb(80,123,83)";
    },
  },
  decrementButton: {
    normalRed: () => {
      document.getElementById("decrement--button").style.background =
        "rgb(255, 168, 168)";
    },

    minimumReached: () => {
      document.getElementById("decrement--button").style.background =
        "rgb(172, 119, 119)";
    },
  },
};

export const updateState = (count) => {
  if (count <= 15) {
  } else if (count >= -15) {
    state.incrementButton.normalGreen();
    state.decrementButton.normalRed();
  } else {
    state.decrementButton.minimumReached();
  }
};
export default { state, updateState };
