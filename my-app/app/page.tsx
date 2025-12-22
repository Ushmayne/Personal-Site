export default function Home() {
  return (
    <div className="px-12 pt-8">

      {/* CONTENT WRAPPER — THIS IS THE KEY */}
      <div className="max-w-6xl">

        <div className="grid grid-cols-[1fr_320px] gap-12 items-start">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>

            <p className="text-lg mb-4">
              Glad you’re here 👋 
            </p>

            <p className="mb-4">
              temp
            </p>

            <p className="mb-4">
              temp
            </p>

            <p>
              temp
            </p>
          </div>

          {}
          <div>
            <img
              src="/usman.jpg"
              alt="Usman"
              className="w-full rounded-xl"
            />
          </div>

        </div>
      </div>

    </div>
  );
}