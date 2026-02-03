import Header from "./components/header";
import Extensions from "./components/extensions";
import { useState } from "react";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-neutral-200 px-12 py-8 font-noto dark:bg-dark-gradient ">
      <Header />
      <section className="flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold">Extensions List</h1>
        <div className="flex gap-1">
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600">
            All
          </button>
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600">
            Active
          </button>
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600">
            Inactive
          </button>
        </div>
      </section>
      <Extensions />
      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jeanclaude09-dev">Jeanclaude09-dev</a>.
      </footer>
    </main>
  );
}

export default App;
