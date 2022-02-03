import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl">
        Hello{" "}
        <a className="text-red-500" href="https://nittai-one.com/zh-TW">
          Nittai-one!
        </a>
      </h1>
    </div>
  );
}
