import React from 'react';
import { ExternalLink, Video, Globe, Lock, ShoppingBag, FlaskConical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const projects = [
  {
    title: "Ultrapalace",
    description: "Real-time livestreaming platform with multi-host rooms, live chat, and audience engagement features built for scale.",
    tech: ["React Native", "Expo", "LiveKit", "Firebase"],
    icon: <Video className="w-8 h-8 text-brand" />,
    liveLabel: "Demo on request",
    liveUrl: null,
    category: "Mobile & Streaming",
  },
  {
    title: "Airbills Digital",
    description: "Premium digital agency platform featuring a team portal, project showcase, blog, and a learning hub for clients.",
    tech: ["React Native", "Node.js", "TypeScript"],
    icon: <Globe className="w-8 h-8 text-brand" />,
    liveLabel: "airbills.digital",
    liveUrl: "https://airbills.digital",
    category: "Platform",
  },
  {
    title: "T2Mobile Auth Service",
    description: "Enterprise LDAP/Active Directory microservice powering authentication across telco platforms with high availability.",
    tech: ["NestJS", "Docker", "AKS"],
    icon: <Lock className="w-8 h-8 text-brand" />,
    liveLabel: "Architecture on request",
    liveUrl: null,
    category: "Enterprise",
  },
  {
    title: "Umnafass",
    description: "E-commerce platform for personalized gifts — browse, customize, and deliver meaningful products with seamless checkout.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    icon: <ShoppingBag className="w-8 h-8 text-brand" />,
    liveLabel: "Live",
    liveUrl: null,
    category: "E-commerce",
  },
  {
    title: "SimAgent",
    description: "AI agent for physics simulation — leverages Claude API and Azure to automate complex simulation workflows. Built for Microsoft Hackathon 2026.",
    tech: ["Python", "Claude API", "Azure"],
    icon: <FlaskConical className="w-8 h-8 text-brand" />,
    liveLabel: "In progress",
    liveUrl: null,
    category: "AI / Research",
    inProgress: true,
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  const isStandalonePage = window.location.pathname === '/projects';

  return (
    <>
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {isStandalonePage && (
            <button
              onClick={() => navigate('/')}
              className="mb-8 text-brand flex items-center gap-2 hover:opacity-80 transition text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          )}

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Featured <span className="text-brand">Projects</span>
          </h2>
          <p className="text-gray-500 text-center mb-12">Real products built for real clients and real users.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group border border-transparent hover:border-brand/20 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-brand-light p-3 rounded-xl">{project.icon}</div>
                  {project.inProgress && (
                    <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">In Progress</span>
                  )}
                </div>
                <span className="text-xs font-semibold text-brand bg-brand-light px-2 py-1 rounded-full w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-brand-light text-brand text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.liveLabel}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400 italic">{project.liveLabel}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isStandalonePage && <Footer />}
    </>
  );
};

export default ProjectsSection;
