import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="relative group rounded-[20px]   bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
            >
              Learn more
              <div className="absolute inset-0 rounded-[20px] z-[1] bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>

            <Link
              href="/my-projects"
              className="relative group rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
            >
              My projects
              <div className="absolute inset-0 rounded-[20px] z-[1] bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>

            <Link
              href="/contact-me"
              className="relative group rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
            >
              Contact Me
              <div className="absolute inset-0 rounded-[20px] z-[1] bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition-all"
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        <div className="absolute bottom-0 z-[5] w-full h-full">
          <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-10 left-0 z-[10]"
        />
      </div>
    </main>
  );
}
