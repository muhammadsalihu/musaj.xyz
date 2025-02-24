import React from 'react';
import { Github, ExternalLink, Brain, Database, Globe, ShoppingCart, Code, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const isStandalonePage = window.location.pathname === '/projects';
  
  const projects = [
    {
      title: "Django E-commerce with Stripe",
      description: "A comprehensive e-commerce platform built with Django, featuring Stripe payment integration, product catalog management, and a responsive customer interface.",
      tech: ["Django", "Python", "Stripe API", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/yourusername/django-ecommerce",
      live: "https://ecommerce-demo.example.com",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />
    },
    {
      title: "RSE Toolkit for Researchers",
      description: "A specialized toolkit for Research Software Engineers, featuring automated testing pipelines, documentation generators, and scientific computing utilities.",
      tech: ["Django", "Python", "NumPy", "Git Integration", "Pytest"],
      github: "https://github.com/yourusername/rse-toolkit",
      live: "https://rse-toolkit.example.com",
      icon: <Code className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Text to CAD Formula One Cars",
      description: "AI-powered application that converts text descriptions into detailed 3D CAD models of Formula One cars. Uses natural language processing and parametric design techniques.",
      tech: ["PyTorch", "NLP", "CAD", "Python", "React"],
      github: "https://github.com/yourusername/text-to-cad",
      live: "https://text-to-cad.example.com",
      icon: <Layers className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Multi-Agent LLM System",
      description: "An advanced multi-agent system using Large Language Models to solve complex tasks through agent collaboration, featuring role-based specialization and dynamic task distribution.",
      tech: ["PyTorch", "FastAPI", "LangChain", "Redis", "Docker"],
      github: "https://github.com/yourusername/llm-agents",
      live: "https://llm-agents-demo.example.com",
      icon: <Brain className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed a scalable analytics platform using Django Channels for real-time data processing. Handles 100k+ concurrent connections with WebSocket integration.",
      tech: ["Django", "Channels", "Redis", "React"],
      github: "https://github.com/yourusername/realtime-analytics",
      live: "https://analytics-demo.example.com",
      icon: <Database className="w-12 h-12 text-blue-600" />
    },
    {
      title: "AI Content Moderator",
      description: "Created an AI-powered content moderation system using PyTorch for text and image classification. Achieves 98% accuracy in detecting inappropriate content.",
      tech: ["PyTorch", "FastAPI", "Docker", "Redis"],
      github: "https://github.com/yourusername/ai-moderator",
      live: "https://moderator-demo.example.com",
      icon: <Globe className="w-12 h-12 text-blue-600" />
    }
  ];

  return (
    <>
      <section className={`py-20 bg-gray-900 ${isStandalonePage ? '' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          {isStandalonePage && (
            <button 
              onClick={() => navigate('/')}
              className="mb-8 text-blue-600 flex items-center hover:text-blue-500 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </button>
          )}
          
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition group">
                <div className="mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-600 transition"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-600 transition"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {isStandalonePage && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Development <span className="text-blue-600">Process</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                  <h4 className="text-xl font-bold text-white mb-3">Discovery</h4>
                  <p className="text-gray-400">Understanding your needs and requirements through detailed consultation and research.</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                  <h4 className="text-xl font-bold text-white mb-3">Development</h4>
                  <p className="text-gray-400">Crafting robust solutions with clean code, thorough testing, and regular progress updates.</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                  <h4 className="text-xl font-bold text-white mb-3">Deployment</h4>
                  <p className="text-gray-400">Launching your solution with comprehensive documentation and ongoing support.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {isStandalonePage && <Footer />}
    </>
  );
};

export default ProjectsSection;