import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center bg-cover bg-[url('/pw-bg.svg')]">
      <Head>
        <title>写真人狼</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl">
        Hello{" "}
        <a
          className="text-blue-700 hover:text-blue-300 font-bold"
          href="https://nittai-one.com/zh-TW"
        >
          Nittai-one!
        </a>
      </h1>
    </div>
  );
}
