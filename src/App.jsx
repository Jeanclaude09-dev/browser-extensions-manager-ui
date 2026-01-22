import Header from "./component/header";
import Extensions from "./component/extensions";

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
