import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const focus = [
  { label: "Designer", note: "Brand & visual design" },
  { label: "YouTuber", note: "Tech & design channels" },
  { label: "Coder", note: "Websites & bots" },
];

const About = () => {
  return (
    <Layout variant="light">
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
          <div className="container">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-[1.1] tracking-[-0.02em] max-w-6xl">
              I am a Tashkent based designer, YouTuber, coder. My career spans over 8 years
              in the industry building digital products and brands that play meaningful roles
              in people's lives.
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 md:pb-32 bg-white">
          <div className="container">
            <div className="w-full h-px bg-gray-300 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              {/* Left Column - Focus */}
              <div className="lg:col-span-4">
                <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-6">
                  What I do
                </h3>
                <div className="space-y-5">
                  {focus.map((item) => (
                    <div key={item.label}>
                      <p className="text-sm font-medium text-black uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-500">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Bio */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl">
                  <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                    I work across design, video and code — building digital products and
                    brands that play meaningful roles in people's lives.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Over the past 8 years that has meant designing brand and visual
                    identities, building websites and Telegram bots, and running YouTube
                    channels where I share what I learn along the way.
                  </p>
                  <p className="text-base text-gray-600 mb-10 leading-relaxed">
                    I am currently available for select projects. If you're working on
                    something interesting, I'd love to hear about it.
                  </p>
                  <Link
                    to="/certificates"
                    className="text-sm uppercase tracking-[0.12em] font-medium text-black inline-flex items-center gap-2 group"
                  >
                    View certificates
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
