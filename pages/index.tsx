import Head from "next/head";
import {
  About,
  Cta,
  Footer,
  Header,
  Transactions,
  Transfers,
} from "../components";
import shared from "../shared.json";

const App = () => {
  const { description, displayName } = shared;
  return (
    <div className="container">
      <Head>
        <title>{`${description}`}</title>
        <meta name="name" content={displayName} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Transactions />
      <Transfers />
      <Cta />
      <Footer />
    </div>
  );
};
export default App;
