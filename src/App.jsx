import Header from "./components/header";
import Extensions from "./components/extensions";
import "./index.css";
import { useApp } from "./context/appContext";
import { useState } from "react";

function App() {
  const { data } = useApp();

  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  const emptyMessage = {
    all: "No extensions found",
    active: "No active extensions",
    inactive: "No inactive extensions",
  }



  return (
    <main className="min-h-screen bg-neutral-200 px-12 py-8 font-noto dark:bg-dark-gradient">
      <Header />

      <section className="flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold">Extensions List</h1>

        <div className="flex gap-1">
          <button
            onClick={() => setFilter("all")}
            className={
              filter === "all"
                ? "bg-red-500 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-red-500 text-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-red-500 dark:border dark:border-red-500 dark:text-neutral-700"
                : "bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600"
            }
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={
              filter === "active"
                ? "bg-red-500 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-red-500 text-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-red-500 dark:border dark:border-red-500 dark:text-neutral-700"
                : "bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600"
            }
          >
            Active
          </button>

          <button
            onClick={() => setFilter("inactive")}
            className={
              filter === "inactive"
                ? "bg-red-500 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-red-500 text-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-red-500 dark:border dark:border-red-500 dark:text-neutral-700"
                : "bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer border border-neutral-0 hover:opacity-85 transition-all duration-200 dark:bg-neutral-700 dark:border dark:border-neutral-600"
            }
          >
            Inactive
          </button>
        </div>
      </section>

      {filteredData.length === 0 ?
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
          <div className="w-18 h-18 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="5" y="4" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400" />
              <path d="M9 10h12M9 15h12M9 20h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-neutral-400" />
              <circle cx="27" cy="27" r="5" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400" />
              <path d="M30.5 30.5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-neutral-400" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-0">{emptyMessage[filter]}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Try a different filter</p>
        </div> :

        <Extensions data={filteredData} />
      }



      <footer className="attribution">
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
