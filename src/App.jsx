import Header from "./component/header";
import Extensions from "./component/extensions";
import { useState } from "react";

const getInitialTheme = () => {
  // get the theme the user used last (I'm desperate, React is so hard)
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  // Then check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

// the variable that will save the theme or using light as default (crazy that people use light mode)
const [theme, setTheme] = useState(getInitialTheme);

useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

function App() {
  return (
    <main className="min-h-screen bg-neutral-200 px-12 py-8 font-noto">
      <Header />
      <section className="flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold">Extensions List</h1>
        <div className="flex gap-1">
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer hover:opacity-85 transition-all duration-200">
            All
          </button>
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer hover:opacity-85 transition-all duration-200">
            Active
          </button>
          <button className="bg-neutral-0 px-5 py-2.5 text-lg rounded-3xl cursor-pointer hover:opacity-85 transition-all duration-200">
            Inactive
          </button>
        </div>
      </section>
      <Extensions />
    </main>
  );
}

export default App;
