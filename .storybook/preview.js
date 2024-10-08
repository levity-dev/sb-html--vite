/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Global", "Our World", "Voices", "Pathways", "*"],
      },
    },
  },
  decorators: [
    (Story) => {
      // Get the story content
      const storyContent = Story();

      // Wrap the story content in a container with the `learningObject` class
      // This is done dynamically after the content is rendered
      setTimeout(() => {
        const storyElement =
          document.querySelector(".docs-story") ||
          document.querySelector("#storybook-root"); // Target the Storybook story container
        if (storyElement) {
          const wrapper = document.createElement("div");
          wrapper.className = "lo-fontsize-1 activity__content";

          // Move the existing content into the new wrapper
          while (storyElement.firstChild) {
            wrapper.appendChild(storyElement.firstChild);
          }

          // Add the wrapper to the story container
          storyElement.appendChild(wrapper);
        }
      }, 0);
      document.addEventListener("DOMContentLoaded", function () {
        // Select the figure element
        const figureElement = document.querySelector("figure");

        // Add the class 'figure-texts' to the figure element
        if (figureElement) {
          figureElement.classList.add("figure-texts");
        }
      });
      return storyContent;
    },
  ],
};

export default preview;
