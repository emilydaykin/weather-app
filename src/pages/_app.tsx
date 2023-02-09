import type { AppProps } from "next/app";
// import "@/styles/main.scss";

import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
