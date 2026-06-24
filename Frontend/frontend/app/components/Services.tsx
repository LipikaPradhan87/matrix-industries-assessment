export default function Services() {
  const services = [
    {
      title: "Security Risk Management",
      description:
        "Protecting critical assets through proactive risk assessment.",
    },
    {
      title: "Facilities Management",
      description:
        "Maintaining operational excellence across environments.",
    },
    {
      title: "Operational Intelligence",
      description:
        "Providing data-driven insights for strategic decisions.",
    },
    {
      title: "Resilience Architecture",
      description:
        "Designing sustainable and secure operational frameworks.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#000000] via-[#07131F] to-[#084745] text-white py-20 px-2 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1F2937] p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}