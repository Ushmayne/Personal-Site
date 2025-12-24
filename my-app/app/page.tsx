export default function Home() {
  return (
        <main className="ml-[16rem] px-12 py-10 ">
  <div className="grid grid-cols-[1fr_360px] gap-12 max-w-[1200px]">

    <div>
      <h1 className="text-4xl font-bold text-gray-600 mb-4">
        Welcome
      </h1>

      <p className="mb-4 text-green-600-italic">
        Glad you’re here 👋
      </p>

      <p className="mb-4">
        This text flows beside the image like a wall.
      </p>

      <p className="mb-4">
        As long as there is vertical space, text stays beside it.
      </p>

      <p>
        Once the text is taller, it continues underneath automatically.
      </p>
    </div>

    <div className="self-start">
      <img
        src="/usman.jpg"
        alt="Usman"
        className="w-full rounded-2xl bg-gray-900 p-2 shadow-2xl"
      />
    </div>

  </div>
</main>

  );
}