import React from 'react';
import { useState } from 'react';
import { 
  Trophy, Terminal, Code, Book, Cpu, 
  Rocket, Brain, GraduationCap, ChevronRight,
  Database, Beaker, Globe, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('services');
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: "F1 in Schools: Accelerating STEM Education",
      excerpt: "How Formula 1 technology is revolutionizing educational approaches...",
      icon: <Trophy className="w-8 h-8 text-red-600" />,
      date: "2024-01-15"
    },
    {
      title: "Multi-agent Systems with Transformer Models",
      excerpt: "Exploring the intersection of distributed systems and neural architectures...",
      icon: <Brain className="w-8 h-8 text-red-600" />,
      date: "2024-01-10"
    },
    {
      title: "The Path to Research Software Engineering",
      excerpt: "My journey from development to research engineering...",
      icon: <Terminal className="w-8 h-8 text-red-600" />,
      date: "2024-01-05"
    },
    {
      title: "PhD Journey: From Conference to Publication",
      excerpt: "Navigating the academic landscape in computer science...",
      icon: <GraduationCap className="w-8 h-8 text-red-600" />,
      date: "2023-12-28"
    },
    {
      title: "Python Crash Course for Engineers",
      excerpt: "Essential Python concepts for research software development...",
      icon: <Code className="w-8 h-8 text-red-600" />,
      date: "2023-12-20"
    },
    {
      title: "Productizing Your Engineering Expertise",
      excerpt: "Converting technical knowledge into marketable products...",
      icon: <Rocket className="w-8 h-8 text-red-600" />,
      date: "2023-12-15"
    }
  ];

  const services = [
    {
      title: "Research Software Development",
      price: "$5,000",
      duration: "48 hours",
      icon: <Cpu className="w-12 h-12 text-red-600" />,
      features: ["Custom algorithms", "High-performance computing", "Research implementation"]
    },
    {
      title: "Multi-agent Systems",
      price: "$3,000",
      duration: "1 week",
      icon: <Database className="w-12 h-12 text-red-600" />,
      features: ["Distributed systems", "Agent-based modeling", "Performance optimization"]
    },
    {
      title: "Custom Research Solutions",
      price: "Custom",
      duration: "Flexible",
      icon: <Beaker className="w-12 h-12 text-red-600" />,
      features: ["Academic collaboration", "Industry research", "Prototype development"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with F1 Inspiration */}
      <header className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-red-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto py-20 px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-white text-sm mb-4">
                Research Software Engineer
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                Engineering Excellence Through
                <span className="text-red-600"> Research & Innovation</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                From Formula 1 to Software Engineering: Driving innovation in research and development
              </p>
              <div className="flex gap-4">
                <button  onClick={() => navigate('/agent')} className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium flex items-center hover:bg-red-700 transition">
                  Hire Me <ChevronRight className="ml-2" />
                </button>
                <button className="border border-red-600 text-red-600 px-8 py-4 rounded-lg font-medium flex items-center hover:bg-red-600 hover:text-white transition">
                  View Research
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-20 rounded-lg"></div>
                <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center overflow-hidden">
                  <Globe className="w-48 h-48 text-red-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="text-red-600">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-red-600 transition">
                <div className="mb-4">
                  {post.icon}
                </div>
                <div className="text-red-600 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-red-600 flex items-center hover:text-red-500">
                  Read More <ChevronRight className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Research <span className="text-red-600">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{service.price}</div>
                <div className="flex items-center text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration}
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;