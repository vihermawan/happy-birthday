import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap */

      /* latin-ext */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap);
      }
      `}
  />
)

export default Fonts;