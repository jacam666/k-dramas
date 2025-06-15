import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-BLACK h-screen">
      {/* <div
        className="w-full h-screen bg-center bg-cover opacity-90 rounded-lg shadow-lg "
        style={{ backgroundImage: "url('/images/bg-image-3.jpeg')" }}
      > */}
      <div>
        <div className="flex flex-col items-center  p-10 w-full h-1/3 bg-center bg-cover opacity-90 rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/images/bg-image-3.jpeg')" }} >
          <div>
            <h1 className="font-Caprasimo text-3xl xl:text-7xl text-gray-50 font-bold flex ">CAI-DRAMAS</h1>
          </div>
          <div>
            <p className="text-gray-50 xl:text-4xl text-xl font-semibold  text-center p-4">
              A LIST OF OUR FAVOURITE <br />K-DRAMAS
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-10">
          <Image
            src="/images/alchemy-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
          <Image
            src="/images/hongrang-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
          <Image
            src="/images/woo-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
          <Image
            src="/images/vincenzo-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
          <Image
            src="/images/weak-hero-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
          <Image
            src="/images/hometown-image-1.jpg"
            alt="K-Drama Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg py-4"
          />
        </div>
      </div>

    </div>
  );
}
