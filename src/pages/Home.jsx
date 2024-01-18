import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Hero from "../assets/hero.svg";

function Home() {
  return (
    <Container>
      <div className="flex flex-wrap">
        <div className="p-2 w-full content-center">
          <div className="relative h-screen md:h-96 sm:h-full xl:h-screen flex items-center justify-center sm:items-center sm:justify-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 md:pr-8 text-white">
                <h1 className="text-3xl sm:text-5xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                  Discover, Write, Connect.
                </h1>
                <p className="text-lg sm:text-xl md:text-xl xl:text-2xl mb-8">
                  Articles Hub, your way of...
                  <br /> Write, Share, Inspire.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={Hero}
                  alt="Hero Illustration"
                  className="mx-auto max-w-full"
                  style={{
                    filter: "drop-shadow(2px 2px 4px rgb(255, 12, 12)))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
