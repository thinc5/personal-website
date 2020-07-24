import Link from "next/link";

export const HomeButton = () => {
  return (
    <div>
      <Link key={"home"} href="/" as={"/"}>
        <a>{"<- Home"}</a>
      </Link>
    </div>
  );
};
