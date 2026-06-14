"use client";

import Link from "next/link";

import Image from "next/image";
// import book from "@/public/assets/images/photo-1544947950-fa07a98d237f.avif";
import { ArrowRight } from "iconsax-reactjs";
import BookCardComponent from "./BookCardComponent";
import { bookList } from "@/data/book";
import Flipbook from "./FlipBook";
const LandingPage = () => {
  return (
    <>
      <article className="flex items-center  justify-center">
        <div className="text-amber-800  w-1/2  rounded-lg flex flex-col  ">
          <div className="pr-20 ">
            <h1 className="text-5xl font-bold  mb-4">
              A sanctuary for serious readers.
            </h1>
            <p className="mb-8 py-4 text-lg">
              Step into a beautifully curated digital library. Discover premium
              stories, early access trailers, and an immersive reading
              experience designed for focus.
            </p>
            <div>
              <Link
                className="text-white py-4 px-6  bg-amber-800 border hover:bg-white hover:border transition-all hover:text-amber-800 hover:border-amber-800 "
                href="/start-reading"
              >
                Start Your Free Trial
              </Link>
              <Link
                className="text-gray-700 py-4 ml-4 px-6  border hover:bg-gray-300 hover:border transition-all hover:text-gray-800 hover:border-gray-400 "
                href="/start-reading"
              >
                Explore Library
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/* <Image
            src={"book"}
            className="rounded-3xl"
            alt="Book"
            width={400}
            height={200}
          /> */}
        </div>
      </article>

      <article className="flex bg-white py-40 flex-col items-center justify-center gap-8 mt-20">
        <h1 className="text-5xl font-bold text-center">
          The craft of reading, digitized.
        </h1>
        <p className="text-center">
          We believe a digital book should feel as substantial and crafted as a
          physical one.
        </p>
        <div className="flex gap-40 items-center justify-evenly">
          <div className="w-40 h-40 bg-black"></div>
          <div className="w-40 h-40 bg-black"></div>
          <div className="w-40 h-40 bg-black"></div>
        </div>
      </article>
      <article className="flex bg-white py-40 flex-col items-center justify-center gap-8 mt-20">
        <h1 className="text-5xl font-bold text-center">
          The craft of reading, digitized.
        </h1>
        <p className="text-center">
          We believe a digital book should feel as substantial and crafted as a
          physical one.
        </p>
        <div className="flex gap-40 items-center justify-evenly">
          <div className="w-40 h-40 bg-black"></div>
          <div className="w-40 h-40 bg-black"></div>
          <div className="w-40 h-40 bg-black"></div>
        </div>
      </article>
      <article className="flex bg-white py-40 flex-col items-center justify-center gap-8 mt-20">
        <div className="flex items-center justify-between w-full px-40">
          <div className="text-start text-amber-800  w-1/2  rounded-lg flex flex-col gap-y-4 ">
            <h1 className="text-5xl font-bold">Featured Releases</h1>
            <p>The most anticipated titles this month.</p>
          </div>
          <Link
            className="text-amber-800 text-lg hover:font-bold transition-all flex items-center pr-6"
            href="/sign-in"
          >
            View all <ArrowRight size="32" />
          </Link>
        </div>
        <div className="flex gap-40 mt-10 items-center justify-evenly">
          {bookList.map((book) => (
            <BookCardComponent key={book.id} {...book} />
          ))}
        </div>
      </article>
      <article className="flex text-white bg-amber-800 py-20 flex-col items-center justify-center gap-8 mt-20">
        <h1 className="text-5xl font-bold text-center">
          Ready to lose yourself in a story?
        </h1>
        <p className="text-center">
          Join thousands of readers who have made PageTurn their digital reading
          sanctuary.
        </p>
        <Link
          className="text-amber-800 text-xl py-4 px-10 bg-white border hover:bg-amber-800 hover:text-white hover:border hover:border-white hover:rounded-lg transition-colors  "
          href="/sign-in"
        >
          Create an Account
        </Link>
      </article>
    </>
  );
};

export default LandingPage;
