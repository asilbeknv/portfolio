import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { certificates } from "@/data/certificates";

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex !== null ? certificates[openIndex] : null;

  const step = (dir: 1 | -1) =>
    setOpenIndex((i) =>
      i === null ? i : (i + dir + certificates.length) % certificates.length,
    );

  // Arrow keys move between certificates while the viewer is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <Layout variant="dark">
      <div className="bg-black min-h-screen text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">
              Certificates
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.02em] max-w-4xl">
              Courses and credentials I've earned along the way.
            </h1>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="w-full h-px bg-gray-800 mb-12" />

            {certificates.length === 0 ? (
              <p className="text-gray-500">Certificates coming soon.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {certificates.map((cert, index) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="group text-left"
                  >
                    <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                      {cert.title}
                    </h3>
                    {(cert.issuer || cert.year) && (
                      <p className="text-xs uppercase tracking-widest text-gray-500 pt-1">
                        {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Full-size viewer */}
      <DialogPrimitive.Root
        open={current !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-12 focus:outline-none">
            {current && (
              <>
                <DialogPrimitive.Title className="sr-only">{current.title}</DialogPrimitive.Title>
                <img
                  src={current.image}
                  alt={current.title}
                  className="max-h-[80vh] max-w-full object-contain rounded-lg"
                />
                <p className="mt-4 text-sm text-gray-300 text-center">
                  {current.title}
                  {current.issuer && <span className="text-gray-500"> · {current.issuer}</span>}
                  {current.year && <span className="text-gray-500"> · {current.year}</span>}
                </p>
              </>
            )}

            <DialogPrimitive.Close
              className="absolute right-4 top-4 md:right-8 md:top-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>

            {certificates.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous certificate"
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next certificate"
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </Layout>
  );
};

export default Certificates;
