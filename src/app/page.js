import Image from "next/image";

export default function Home() {
  return (
    <div className="page-parent">
      <div className="content w-full h-screen relative px-0 py-4">
      <Image
      src="https://www.humaniora.id/wp-content/uploads/2023/10/tari-bali.jpg"
      width={1000}
      height={1000}
      className="w-4/6 rounded-lg items-center m-auto"
      />
      </div>

      <div className="hero overflow-hidden">
        <h1 className="text-9xl font-medium m-10 items-center italic px-7 py-7">
          sebuah website yang mengajak kamu untuk mengenal keragaman budaya Indonesia
        </h1>
      </div>
      <div className="py-60"></div>

      <div className="flex flex-col items-center">
        <p className="text-6xl text-center pb-10">Ayo, jelajahi lebih lanjut!</p>
        <button className="jelajahi items-center outline outline-1 rounded-full bg-green-500 px-10 py-5" href="/kuliner">→</button>
      </div>

      <div className="container w-full h-40"></div>
    </div>
  );
}
