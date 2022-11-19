/*
  TODO:
  break down into multiple components for the one pager
  tidy up formatting
  update icons for cards
  fix large padding below pfp :: required new section
  deploy via GitHub workflows

  add nav bar that moves down page (anchors?) when clicked
  move dark mode out of nav and nav into nav.js
*/

import Head from "next/head";
import { useState } from "react";

// page imports
import menu from "./menu.js";
import header from "./header.js";
import facts from "./facts.js"
import skills from "./skills.js";
import portfolio from "./portfolio.js";
import footer from "./footer.js";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Elena Thomas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 dark:text-white">
        <section id="whoami">
          {menu(setDarkMode, darkMode)}
        </section>
        <section>
          {header()}
        </section>
        <section id="facts">
          {facts()}
        </section>
        <section id="skills">
          {skills()}
        </section>
        <section id="portfolio">
          {portfolio()}
        </section>
        <section>
          {/* {test()} */}
        </section>
        <section>
          {footer()}
        </section>
      </main>
    </div>
  );
}
