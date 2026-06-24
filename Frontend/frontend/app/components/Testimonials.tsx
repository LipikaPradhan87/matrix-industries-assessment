export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Matrix helped us strengthen our operational resilience and improve efficiency across multiple sites.",
      name: "James Carter",
      role: "Operations Director",
    },
    {
      quote:
        "Their strategic guidance enabled us to identify risks early and implement sustainable solutions.",
      name: "Sarah Williams",
      role: "Facilities Manager",
    },
    {
      quote:
        "A highly professional team that delivered measurable value and long-term improvements.",
      name: "Michael Brown",
      role: "Risk Management Lead",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#000000] via-[#07131F] to-[#084745] text-white py-20 px-2 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F2937] p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-300 italic mb-6">
                "{item.quote}"
              </p>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-[#C8A96A]">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}