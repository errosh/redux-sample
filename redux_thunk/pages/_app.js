import "../styles/globals.css";
import Layout from "./layout";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
