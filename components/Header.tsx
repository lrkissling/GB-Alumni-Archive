/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

const Logo = () => (
  <a href="/" class={tw`flex mr-3 items-center`}>
    <img
      src="/heads.jpg"
      width="100px"
      alt="Giant Bomb Alumni Archive"
    />
  </a>
);

const Title = () => {
  const title = tw`text(2xl gray-200) tracking-tight font-extrabold flex items-center gap-1`;
  const pageName = tw`font-light block pb-[1px]`;
  const subTitle = tw`text(sm gray-300)`;

  return (
    <>
      <a href="/" class={title}>
        <span class={pageName}>GB Alumni Archive</span>
      </a>
      <p class={subTitle}>Easily discover the content of Giant Bomb alumni!</p>
    </>
  );
};

const Header = () => {
  const header = tw`mx-auto max-w-screen-lg flex gap-3 justify-between`;


  return (
    <nav class={tw`bg-gray-900 py-2`}>
      <header class={header}>
        <div class={tw`p-4 flex`}>
          <Logo />
          <div>
            <Title />
          </div>
        </div>
      </header>
    </nav>
  )
};

export default Header;
