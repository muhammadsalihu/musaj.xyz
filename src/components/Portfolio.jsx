import React from 'react';
import { useState } from 'react';
import { 
  Code, Terminal, Database, Globe, 
  Github, ExternalLink, ChevronRight,
  Clock, BookOpen, Server, Brain
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectsSection from "./ProjectsSection";
import Footer from './Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      title: "Building Scalable Django Applications",
      excerpt: "Best practices for Django architecture and performance optimization...",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      date: "2024-01-15"
    },
    {
      title: "Advanced PyTorch Techniques",
      excerpt: "Deep dive into custom loss functions and model architectures...",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      date: "2024-01-10"
    },
    {
      title: "Python Design Patterns",
      excerpt: "Implementing clean, maintainable Python code using design patterns...",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      date: "2024-01-05"
    },
    {
      title: "REST API Best Practices with Django",
      excerpt: "Creating robust APIs using Django REST framework...",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      date: "2023-12-28"
    },
    {
      title: "Async Python with FastAPI",
      excerpt: "Building high-performance async APIs with FastAPI...",
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      date: "2023-12-20"
    },
    {
      title: "Machine Learning Pipeline Design",
      excerpt: "Creating production-ready ML pipelines with Python...",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      date: "2023-12-15"
    }
  ];

  const services = [
    {
      title: "Backend Development",
      price: "$4,000",
      duration: "2 weeks",
      icon: <Server className="w-12 h-12 text-blue-600" />,
      features: ["Django/FastAPI APIs", "Database Design", "System Architecture"]
    },
    {
      title: "ML Model Development",
      price: "$3,500",
      duration: "1 week",
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      features: ["PyTorch Models", "Model Optimization", "ML Pipeline Design"]
    },
    {
      title: "Custom Python Solutions",
      price: "Custom",
      duration: "Flexible",
      icon: <Code className="w-12 h-12 text-blue-600" />,
      features: ["Automation Scripts", "Data Processing", "Integration Solutions"]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto py-20 px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-white text-sm mb-4">
                  Python Developer
                </div>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                  Building Powerful Solutions with
                  <span className="text-blue-600"> Python</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Specializing in Django, PyTorch, and scalable backend development
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigate('/contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium flex items-center hover:bg-blue-700 transition">
                    Hire Me <ChevronRight className="ml-2" />
                  </button>
                  <button onClick={() => navigate('/projects')} className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium flex items-center hover:bg-blue-600 hover:text-white transition">
                    View Projects
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-20 rounded-lg"></div>
                  <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                    <Code className="w-48 h-48 text-blue-600 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Blog Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technical <span className="text-blue-600">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition group">
                  <div className="mb-4">
                    {post.icon}
                  </div>
                  <div className="text-blue-600 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <button onClick={() => navigate('/blog')} className="text-blue-600 flex items-center hover:text-blue-500 transition">
                    Read More <ChevronRight className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button 
                onClick={() => navigate('/blog')} 
                className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
              >
                View All Articles
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Development <span className="text-blue-600">Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-600 transition group">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500 transition">{service.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => navigate('/contact')} className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's collaborate on your next Python project and create powerful, scalable solutions together.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center"
            >
              Start a Project <ChevronRight className="ml-2" />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;