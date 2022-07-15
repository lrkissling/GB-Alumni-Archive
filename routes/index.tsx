/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "/components/Header.tsx";

const Home = () => {
  return (
    <div class={tw`mx-auto`}>
      <Header />
    </div>
  );
}

export default Home;