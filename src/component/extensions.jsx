import { useState } from "react";
import itemsData from "../data/data.json";

function Extensions() {
  return (
    <section className="grid grid-cols-3 gap-3 mt-5">
      {itemsData.map((item) => (
        <article className="flex flex-col justify-around gap-7 bg-neutral-0 p-4 rounded-2xl shadow-xs">
          <div className="flex gap-3 items-start">
            <img src={item.logo} alt={item.alt} />
            <div>
              <h2 className="text-lg text-neutral-900 font-bold mb-0.5">
                {item.name}
              </h2>
              <p className="text-base text-neutral-500">{item.description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-neutral-900 px-3 py-1.5 rounded-2xl border border-neutral-500 cursor-pointer hover:bg-red-500 hover:text-neutral-0 hover:border-red-500 focus:bg-neutral-0 focus:border-red-500 focus:text-neutral-900 transition-all duration-200 ">
              Remove
            </button>
            <input type="checkbox" name="" id="" />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Extensions;
