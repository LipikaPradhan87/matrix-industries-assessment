export default function Framework() {
  const steps = [
    "Assess",
    "Design",
    "Secure",
    "Operate",
    "Optimize",
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-[#084745] via-[#07131F] to-[#000000] text-white w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Value Generation Framework
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex-1 bg-[#111827] p-6 rounded-xl text-center">
              <div className="text-[#C8A96A] text-3xl font-bold mb-4">
                {index + 1}
              </div>
              

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}