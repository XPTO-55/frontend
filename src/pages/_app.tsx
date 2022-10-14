import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import '../../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
