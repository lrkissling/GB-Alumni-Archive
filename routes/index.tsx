/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";

const Home = () => {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Header />
      {/* <img
        src="/heads.jpg"
        width="100px"
        alt="Giant Bomb Alumni Archive"
      />
      <p class={tw`my-6`}>
        Welcome to the Giant Bomb Alumni Archive.
      </p> */}
      <Counter start={3} />
    </div>
  );
}

export default Home;