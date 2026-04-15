import { Switch } from "./ui/switch";
import { useApp } from "@/context/appContext";

function Extensions({ data }) {
  const { setData } = useApp();

  const handleActive = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id)); // keep everything excepts what you click 
  };

  return (
    <section className="grid grid-cols-3 gap-3 mt-5 mb-5 max-sm:grid-cols-1 max-lg:grid-cols-2 ">
      {data.map((item) => (
        <article
          key={item.id}
          className="flex flex-col justify-around gap-7 bg-neutral-0 p-4 rounded-2xl shadow-xs border border-neutral-0 dark:bg-neutral-800 dark:border-neutral-600"
        >
          <div className="flex gap-3 items-start">
            <img src={item.logo} alt={item.alt} />

            <div>
              <h2 className="text-lg text-neutral-900 font-bold mb-0.5 dark:text-neutral-0">
                {item.name}
              </h2>

              <p className="text-base text-neutral-500 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => handleRemove(item.id)}
              className="text-neutral-900 px-3 py-1.5 rounded-2xl border border-neutral-500 cursor-pointer hover:bg-red-500 hover:text-neutral-0 hover:border-red-500 transition-all duration-200 dark:border-neutral-600 dark:text-white">
              Remove
            </button>

            <Switch
              isActive={item.isActive}
              onCheckedChange={() => handleActive(item.id)}
            />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Extensions;
