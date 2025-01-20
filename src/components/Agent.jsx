import React, { useState } from 'react';
import { 
  Bot, Brain, Code, Search, Terminal, 
  Database, ChevronRight, AlertCircle,
  CreditCard, Check, ArrowLeft, MessageSquare,
  Loader, Download, Clock
} from 'lucide-react';

const AgentMusaj = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [step, setStep] = useState('browse'); // browse, details, payment, processing, complete
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const agents = [
    {
      id: 1,
      name: "ResearchGPT",
      icon: <Brain className="w-12 h-12 text-red-600" />,
      description: "AI-powered research paper analysis and summary",
      price: "$10/paper",
      features: [
        "Paper summarization",
        "Key findings extraction",
        "Related work analysis"
      ],
      example: "Upload your research paper and I'll provide a detailed analysis with key findings and related work suggestions."
    },
    {
      id: 2,
      name: "CodeOptimizer",
      icon: <Code className="w-12 h-12 text-red-600" />,
      description: "Performance optimization for research code",
      price: "$50/review",
      features: [
        "Code performance analysis",
        "Optimization suggestions",
        "Parallel computing recommendations"
      ],
      example: "Share your code repository and I'll analyze its performance, suggesting optimizations for better efficiency."
    },
    {
      id: 3,
      name: "DataScientist",
      icon: <Database className="w-12 h-12 text-red-600" />,
      description: "Automated data analysis and visualization",
      price: "$30/dataset",
      features: [
        "Statistical analysis",
        "Custom visualizations",
        "Insight generation"
      ],
      example: "Upload your dataset and I'll generate comprehensive statistical analysis with visualizations."
    }
  ];

  const simulateAgentResponse = (agentId, userInput) => {
    setLoading(true);
    setTimeout(() => {
      const responses = {
        1: "I've analyzed your research paper. Here are the key findings:\n\n1. Novel approach to multi-agent systems\n2. Significant performance improvements\n3. Potential applications in autonomous systems\n\nWould you like me to generate a detailed summary or focus on specific aspects?",
        2: "I've reviewed your code. Here are my optimization suggestions:\n\n1. Replace nested loops with vectorized operations\n2. Implement parallel processing for data transformation\n3. Optimize memory usage in large arrays\n\nShall I provide specific code examples for any of these improvements?",
        3: "Based on your dataset, I've identified these patterns:\n\n1. Strong correlation between variables X and Y\n2. Seasonal trends in the time series\n3. Potential outliers affecting results\n\nWould you like to see detailed visualizations of these findings?"
      };
      
      setMessages(prev => [...prev, 
        { type: 'user', content: userInput },
        { type: 'agent', content: responses[agentId] }
      ]);
      setLoading(false);
    }, 2000);
  };

  const PaymentForm = () => (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Payment Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Card Number</label>
          <input 
            type="text" 
            className="w-full bg-black border border-gray-800 rounded p-2"
            placeholder="4242 4242 4242 4242"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">Expiry Date</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-2"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">CVC</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-2"
              placeholder="123"
            />
          </div>
        </div>
        <button 
          onClick={() => setStep('processing')}
          className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Pay {selectedAgent?.price}
        </button>
      </div>
    </div>
  );

  const ChatInterface = () => (
    <div className="bg-gray-900 rounded-lg h-96 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block p-3 rounded-lg ${
              message.type === 'user' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-200'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center justify-center">
            <Loader className="w-6 h-6 text-red-600 animate-spin" />
          </div>
        )}
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-black border border-gray-800 rounded p-2"
            placeholder="Type your message..."
          />
          <button
            onClick={() => {
              if (inputText.trim()) {
                simulateAgentResponse(selectedAgent.id, inputText);
                setInputText('');
              }
            }}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (step) {
      case 'browse':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div 
                key={agent.id}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 cursor-pointer transition"
                onClick={() => {
                  setSelectedAgent(agent);
                  setStep('details');
                }}
              >
                <div className="mb-4">
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <p className="text-gray-400 mb-4">{agent.description}</p>
                <div className="text-red-600 font-bold mb-4">{agent.price}</div>
                <button className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition">
                  Hire Agent
                </button>
              </div>
            ))}
          </div>
        );

      case 'details':
        return (
          <div className="bg-gray-900 p-6 rounded-lg">
            <button 
              onClick={() => setStep('browse')}
              className="text-gray-400 hover:text-white mb-4 flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Agents
            </button>
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  {selectedAgent?.icon}
                  <div>
                    <h2 className="text-2xl font-bold">{selectedAgent?.name}</h2>
                    <p className="text-gray-400">{selectedAgent?.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Features</h3>
                  <ul className="space-y-2">
                    {selectedAgent?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Example Interaction</h3>
                  <p className="text-gray-400">{selectedAgent?.example}</p>
                </div>
                <button 
                  onClick={() => setStep('payment')}
                  className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return <PaymentForm />;

      case 'processing':
        return (
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <Loader className="w-12 h-12 text-red-600 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Processing Payment</h3>
            <p className="text-gray-400">Please wait while we process your payment...</p>
            {setTimeout(() => setStep('complete'), 3000)}
          </div>
        );

      case 'complete':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-gray-400 mb-4">You can now start working with your agent.</p>
              <button 
                onClick={() => setStep('chat')}
                className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Start Chat
              </button>
            </div>
          </div>
        );

      case 'chat':
        return <ChatInterface />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-red-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="w-8 h-8 text-red-600 mr-2" />
              <span className="text-xl font-bold">Agent Musaj</span>
            </div>
            <button className="bg-red-600 px-4 py-2 rounded-lg">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {step === 'browse' && (
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3 text-gray-400" />
            <input 
              type="text"
              placeholder="What kind of agent do you need?"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-12 focus:border-red-600 transition"
            />
          </div>
        )}

        {renderContent()}

        {step === 'browse' && (
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600">2,431</div>
              <div className="text-gray-400">Tasks Completed</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-600">1.2s</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AgentMusaj;