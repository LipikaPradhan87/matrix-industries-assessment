export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#084745] via-[#07131F] to-[#000000] text-white w-full">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Transforming Complexity Into Operational Clarity
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Security Intelligence • Resilience Architecture • Facilities Management
        </p>
        <button
          className="group relative mt-8
          overflow-hidden
          px-10 py-4
          rounded-full
          border-2 border-[#00D4AA]
          text-white
          transition-all duration-300
          hover:-translate-y-3
          hover:shadow-[0_0_30px_#00D4AA]
          hover:border-white
          ">
          <span className="relative z-10">Explore Framework</span>

          <span
            className="
            absolute inset-0
            bg-[#00D4AA]
            scale-x-0
            origin-left
            transition-transform duration-500
            group-hover:scale-x-100
            "
          />
        </button>
      </div>
    </section>
  );
}