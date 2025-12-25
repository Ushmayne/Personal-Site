export default function Home() {
  return (
        <main className="ml-6 px-12 py-10">
    <div className="flex items-start gap-12">
      
      {/* TEXT */}
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold text-cabin-panel">Welcome</h1>
        <p className="text-cabin-panel">Glad you’re here 👋</p>
        <p>Tempo</p>
        <p>Tempo.</p>
        <p>Tempo.</p>
      </div>

      {/* IMAGE */}
      <div className="ml-auto">
        <img
          src="/usman.jpg"
          alt="Usman"
          className="w-[400px] rounded-lg bg-gray-900 p-2 shadow-2xl"
        />
        <h1 className="mt-4 text-center text-lg font-semibold text-grey-400">Just a fun picture of me</h1>
      </div>

  </div>
</main>


  );
}