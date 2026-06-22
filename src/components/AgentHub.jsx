import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Bot, ArrowRight, Zap } from 'lucide-react';
import Footer from './Footer';

const getDeployedAgents = () => {
  try {
    const stored = localStorage.getItem('musaj_agents');
    if (stored) return JSON.parse(stored).filter((a) => a.deployed);
  } catch {}
  return [];
};

const AgentCard = ({ icon, title, description, tag, onClick, badge }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand/30 hover:shadow-md transition group text-left flex flex-col w-full"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="bg-brand-light p-3 rounded-xl">{icon}</div>
      {badge && (
        <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">{badge}</span>
      )}
    </div>
    {tag && (
      <span className="text-xs font-semibold text-brand bg-brand-light px-2 py-1 rounded-full w-fit mb-3">{tag}</span>
    )}
    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition">{title}</h3>
    <p className="text-gray-500 text-sm flex-1">{description}</p>
    <div className="flex items-center gap-1 mt-4 text-brand text-sm font-medium">
      Open <ArrowRight className="w-4 h-4" />
    </div>
  </button>
);

const AgentHub = () => {
  const navigate = useNavigate();
  const agents = getDeployedAgents();

  return (
    <>
      <div className="min-h-screen bg-surface">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-4 py-5">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => navigate('/')}
              className="text-brand text-sm font-medium hover:opacity-80 transition mb-4 flex items-center gap-1"
            >
              ← Home
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-brand p-2 rounded-xl">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Agent Hub</h1>
                <p className="text-gray-400 text-sm">AI-powered tools, ready to use</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Invoice Agent — always present */}
            <AgentCard
              icon={<FileText className="w-6 h-6 text-brand" />}
              tag="Finance"
              title="Invoice Agent"
              description="Generate professional invoices and send them directly to clients via WhatsApp."
              onClick={() => navigate('/agent/invoice')}
            />

            {/* Deployed agents from admin */}
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                icon={<Zap className="w-6 h-6 text-brand" />}
                tag={agent.category || 'Agent'}
                title={agent.name}
                description={agent.description || 'AI-powered assistant.'}
                badge="Live"
                onClick={() => navigate(`/agent/${agent.id}`)}
              />
            ))}
          </div>

          {agents.length === 0 && (
            <p className="text-center text-gray-400 text-sm mt-12">
              More agents coming soon.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgentHub;
