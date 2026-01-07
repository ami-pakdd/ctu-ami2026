export default function SponsorsSection() {
  const supporters = {
    organizers: [
      {
        name: "Can Tho University",
        url: "https://www.ctu.edu.vn/",
        logo: "CTU_logo.png",
      },
    ],
    academicPartners: [
      {
        name: "Can Tho University",
        url: "https://www.ctu.edu.vn/",
        logo: "CTU_logo.png",
      },
      {
        name: "Nantes Université",
        url: "https://www.univ-nantes.fr/",
        logo: "Logotype_Nantes-U_noir-72dpi.png",
      },
      {
        name: "VNU-HCM University of Technology",
        url: "https://hcmut.edu.vn/en",
        logo: "01_logobachkhoasang.png",
      },
      {
        name: "VNU International School",
        url: "https://www.is.vnu.edu.vn/en/",
        logo: "VNU_IS_logo.png",
      },
    ],
    // publisher: [
    //   {
    //     name: "Springer (tentative)",
    //     url: "https://www.springer.com/",
    //     logo: "springer.svg",
    //   },
    // ],
  };

  const renderTier = (title, items, emptyText = "To be announced") => (
    <div className="mb-14">
      <h3 className="text-2xl font-bold text-center text-ctu-blue mb-4">
        {title}
      </h3>

      <div className="h-px w-full bg-ctu-blue/20 mb-6" />

      {items.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-10">
          {items.map((org, idx) => (
            <a
              key={idx}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-16 md:h-20 object-contain transition"
              />
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">
          {emptyText}
        </p>
      )}
    </div>
  );
  
  return (
    <section id="sponsors" className="mb-20 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">

        {renderTier("Organized By", supporters.organizers)}

        {renderTier(
          "Academic & Institutional Partners",
          supporters.academicPartners
        )}

        {/* {renderTier(
          "Publisher (Tentative)",
          supporters.publisher,
          "Publication details will be announced"
        )} */}
      </div>
    </section>
  );
}
