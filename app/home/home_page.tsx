import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Motvies</h1>
      <Image
        src={"/favicon.ico"}
        alt="Motvies"
        width={300}
        height={300}
      />
      <p className="text-lg text-center">
        The best place to find your favorite movies and TV shows.
      </p>
    </main>
  );
}