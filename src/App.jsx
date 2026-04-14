import Header from "./components/header";
import Extensions from "./components/extensions";
import "./index.css";
import { useApp } from "./context/appContext";
import { useState } from "react";
import { SearchAlert } from "lucide-react";

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
        <div className="min-w-72 flex flex-col items-center justify-center py-20 gap-3 text-center ">
          <div className="p-4 bg-neutral-0 flex flex-col items-center rounded-lg dark:bg-neutral-800">
            <SearchAlert size={52} className="text-neutral-900 dark:text-neutral-0 mb-2" />
            <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-0">{emptyMessage[filter]}</p>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">Try a different filter</p>
          </div>
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
