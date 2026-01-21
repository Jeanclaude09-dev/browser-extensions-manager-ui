import itemsData from "../data/data.json";

function Extensions() {
  return (
    <section className="grid grid-cols-3 gap-3 mt-5">
      {itemsData.map((item) => (
        <article className="flex flex-col justify-around gap-7 bg-neutral-0 p-4 rounded-2xl shadow-xs">
          <div className="flex gap-3 items-start">
            <img src={item.logo} alt={item.alt} />
            <div>
              <h2 className="text-lg font-bold mb-0.5">{item.name}</h2>
              <p className="text-base text-neutral-500">{item.description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="px-3 py-1.5 rounded-2xl border border-neutral-500 cursor-pointer">
              Remove
            </button>
            <input type="checkbox" id="checkbox" />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Extensions;
