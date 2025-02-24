import React from 'react';
import { Server, Brain, Code, Terminal, ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      title: "Building Scalable Django Applications",
      excerpt: "Best practices for Django architecture and performance optimization...",
      content: "Django is a powerful web framework for Python developers, but building scalable applications requires careful planning and architecture. In this article, we explore techniques for optimizing database queries, implementing caching strategies, and structuring your Django projects for maximum scalability.",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Django", "Scalability", "Backend"]
    },
    {
      title: "Advanced PyTorch Techniques",
      excerpt: "Deep dive into custom loss functions and model architectures...",
      content: "PyTorch has become one of the most popular frameworks for deep learning research and development. This article explores advanced techniques including custom loss functions, architecture design patterns, and optimization strategies that can help you build more effective neural networks.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["PyTorch", "Deep Learning", "AI"]
    },
    {
      title: "Python Design Patterns",
      excerpt: "Implementing clean, maintainable Python code using design patterns...",
      content: "Design patterns are proven solutions to common problems in software design. This article explores how to implement classic design patterns like Factory, Singleton, Observer, and Strategy in Python. We'll discuss their applications, benefits, and how to adapt them to Python's dynamic nature.",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Python", "Design Patterns", "Clean Code"]
    },
    {
      title: "REST API Best Practices with Django",
      excerpt: "Creating robust APIs using Django REST framework...",
      content: "Django REST framework provides a powerful toolkit for building Web APIs. This article covers best practices for authentication, serialization, viewsets, and testing to create robust and maintainable REST APIs. We'll also look at pagination, filtering, and versioning strategies.",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      date: "2023-12-28",
      readTime: "9 min read",
      tags: ["Django", "REST API", "Backend"]
    },
    {
      title: "Async Python with FastAPI",
      excerpt: "Building high-performance async APIs with FastAPI...",
      content: "FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. This article explores how to leverage FastAPI's async capabilities to build high-performance web services, handling concurrent requests efficiently, and integrating with async databases.",
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["FastAPI", "Async", "Python"]
    },
    {
      title: "Machine Learning Pipeline Design",
      excerpt: "Creating production-ready ML pipelines with Python...",
      content: "Deploying machine learning models to production requires well-designed pipelines for data processing, model training, evaluation, and serving. This article explores how to build robust ML pipelines using Python tools like scikit-learn, MLflow, and orchestration frameworks.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      date: "2023-12-15",
      readTime: "11 min read",
      tags: ["Machine Learning", "MLOps", "Pipeline"]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 text-blue-600 flex items-center hover:text-blue-500 transition"
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </button>
          
          <h1 className="text-4xl font-bold text-white mb-12">
            Technical <span className="text-blue-600">Blog</span>
          </h1>
          
          {/* Filter Section */}
          <div className="mb-12 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-white font-medium">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                  All Topics
                </button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition">
                  Django
                </button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition">
                  PyTorch
                </button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition">
                  FastAPI
                </button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition">
                  Machine Learning
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid gap-12">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-600 transition group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-3 mb-4">
                      {post.icon}
                      <div className="text-blue-600 text-sm">{post.date} • {post.readTime}</div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition">{post.title}</h2>
                    
                    <p className="text-gray-300 mb-6">
                      {post.content}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-blue-600 flex items-center hover:text-blue-500 transition">
                      Read Full Article <ChevronRight className="ml-1" />
                    </button>
                  </div>
                  
                  <div className="md:w-1/4 flex items-center justify-center">
                    <div className="bg-gray-700 w-full aspect-square rounded-lg flex items-center justify-center">
                      {React.cloneElement(post.icon, { className: "w-16 h-16 text-blue-600 opacity-50" })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-lg hover:bg-blue-700">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
                2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-r-lg hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-900 to-gray-800 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to my newsletter to receive updates on the latest articles, tutorials, and insights on Python development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;