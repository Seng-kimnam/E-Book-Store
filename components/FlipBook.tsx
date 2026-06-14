"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Flipbook = ({ title, url }: FlipBookProps) => {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  return (
    <>
      {isLoggedIn ? (
        <div style={{ padding: "20px" }}>
          <Link className="text-blue-600 " href="/">
            Home
          </Link>
          <h1>{title}</h1>
          <div
            className="flipbook-container"
            style={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 Aspect Ratio
              overflow: "hidden",
            }}
          >
            <iframe
              src={url}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              seamless={true}
              allowTransparency={true}
              allowFullScreen={true}
            />
          </div>
        </div>
      ) : (
        <>
          <h1>Sign in to view the flipbook</h1>
          <Link className="text-amber-800  pr-6" href="/sign-in">
           Click me
          </Link>
        </>
      )}
    </>
  );
};

export default Flipbook;
