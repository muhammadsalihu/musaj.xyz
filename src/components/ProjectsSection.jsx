import React from 'react';
import { Github, ExternalLink, Brain, Database, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Built a product recommendation system using PyTorch and collaborative filtering. Improved conversion rates by 25% through personalized product suggestions.",
      tech: ["PyTorch", "Django", "Redis", "PostgreSQL"],
      github: "https://github.com/yourusername/ecommerce-recommender",
      live: "https://demo-recommender.example.com",
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
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition">
              <div className="mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
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
      </div>
    </section>
  );
};

export default ProjectsSection;