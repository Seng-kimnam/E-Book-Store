"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { Field, FieldLabel } from "@/components/ui/field";
import book from "@/public/assets/images/book-shop-icon-library-store-or-bookstore-symbol-vector-removebg-preview.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";

const InputOTPPattern = () => {
  return (
    <div className=" h-screen flex  mx-auto m-0 justify-center  items-center">
      <Link href="/sign-up" className="flex">
        <ArrowLeftCircleIcon className="mr-2" />
      </Link>
      <Field className="flex">
        <Image
          src={book}
          className="rounded-3xl w-40 h-60 mr-10  "
          alt="Book"
          width={100}
          height={50}
        />
        <FieldLabel
          className="w-full h-12 text-xl text-amber-700 flex items-center justify-center mb-4"
          htmlFor="digits-only"
        >
          Verify your email with otp which we send via email{" "}
        </FieldLabel>
        <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup className="w-full h-12 flex items-center justify-center ">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
    </div>
  );
};

export default InputOTPPattern;
