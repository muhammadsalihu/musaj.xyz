import React from 'react';
import { Code, Server, Brain, ChevronRight, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectsSection from "./ProjectsSection";
import Footer from './Footer';

const services = [
  {
    title: "React Native Mobile Development",
    icon: <Smartphone className="w-10 h-10 text-brand" />,
    features: ["Cross-platform iOS & Android", "Expo & bare workflow", "LiveKit, Firebase integrations"],
  },
  {
    title: "AI Agent Development",
    icon: <Brain className="w-10 h-10 text-brand" />,
    features: ["Claude API & Azure AI", "Physics & simulation agents", "Agentic pipelines & orchestration"],
  },
  {
    title: "Backend Services & Microservices",
    icon: <Server className="w-10 h-10 text-brand" />,
    features: ["NestJS, Node.js, TypeScript", "Docker, AKS, Azure", "LDAP/AD & enterprise auth"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">

        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">
              Musaj<span className="text-brand">.space</span>
            </span>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand transition">Projects</button>
              <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="hover:text-brand transition">Services</button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-brand text-white px-5 py-2 rounded-full hover:opacity-90 transition"
              >
                Hire Me
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-dark text-white">
          <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <span className="inline-block bg-brand-light text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
                Fullstack Engineer
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Building <span className="text-brand">Elite</span> Digital Experiences
              </h1>
              <p className="text-lg text-gray-300 mb-10">
                Fullstack Engineer&nbsp;•&nbsp;React Native&nbsp;•&nbsp;Firebase&nbsp;•&nbsp;LiveKit&nbsp;•&nbsp;Azure&nbsp;•&nbsp;AI Agents
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-brand text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2"
                >
                  Hire Me <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="border border-brand text-brand px-8 py-4 rounded-full font-semibold hover:bg-brand hover:text-white transition"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Projects */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* Services */}
        <section id="services" className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              What I <span className="text-brand">Build</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">Pricing on request — let's talk about your project.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition group">
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-brand transition">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                        <ChevronRight className="w-3 h-3 text-brand flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-6 w-full border border-brand text-brand py-2.5 rounded-full text-sm font-semibold hover:bg-brand hover:text-white transition"
                  >
                    Get in Touch
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Elite?</h2>
            <p className="text-red-100 mb-8 text-lg">
              Let's ship your next platform — mobile, AI, or backend.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-brand px-10 py-4 rounded-full font-bold hover:opacity-90 transition inline-flex items-center gap-2"
            >
              Start a Project <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
