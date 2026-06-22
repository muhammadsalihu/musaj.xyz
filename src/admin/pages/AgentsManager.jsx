import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Check, Zap, ZapOff, Bot } from 'lucide-react';
import { useAdmin } from '../AdminContext';

const MODELS = ['claude-sonnet-4-6', 'claude-opus-4-8', 'claude-haiku-4-5-20251001'];

const EMPTY = { name: '', description: '', model: MODELS[0], systemPrompt: '', price: '', features: '', category: '' };

const AgentForm = ({ initial = EMPTY, onSave, onCancel }) => {
  const [form, setForm] = useState({
    ...EMPTY,
    ...initial,
    features: Array.isArray(initial.features) ? initial.features.join('\n') : (initial.features || ''),
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.name.trim()) return;
    onSave({
      ...form,
      features: form.features.split('\n').map((f) => f.trim()).filter(Boolean),
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Agent Name *</label>
          <input
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="e.g. ResearchBot"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
          <input
            value={form.category}
            onChange={(e) => set('category', e.target.value)}
            placeholder="e.g. Research, Code, Data"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Model</label>
          <select
            value={form.model}
            onChange={(e) => set('model', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          >
            {MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Price (display only)</label>
          <input
            value={form.price}
            onChange={(e) => set('price', e.target.value)}
            placeholder="e.g. $10/task, Free"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">System Prompt</label>
        <textarea
          value={form.systemPrompt}
          onChange={(e) => set('systemPrompt', e.target.value)}
          rows={5}
          placeholder="You are a helpful assistant that..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none font-mono"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Features (one per line)</label>
        <textarea
          value={form.features}
          onChange={(e) => set('features', e.target.value)}
          rows={4}
          placeholder={"Paper summarization\nKey findings extraction\nRelated work analysis"}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Check className="w-4 h-4" /> Save Agent
        </button>
        <button
          onClick={onCancel}
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          <X className="w-4 h-4" /> Cancel
        </button>
      </div>
    </div>
  );
};

const AgentsManager = () => {
  const { agents, addAgent, updateAgent, deleteAgent, toggleDeploy } = useAdmin();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Agents</h2>
          <p className="text-gray-400 text-sm mt-0.5">
            {agents.filter((a) => a.deployed).length} of {agents.length} agents deployed to site
          </p>
        </div>
        <button
          onClick={() => { setAdding(true); setEditing(null); }}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Plus className="w-4 h-4" /> Create Agent
        </button>
      </div>

      {adding && (
        <div className="mb-6">
          <AgentForm
            onSave={(data) => { addAgent(data); setAdding(false); }}
            onCancel={() => setAdding(false)}
          />
        </div>
      )}

      {agents.length === 0 && !adding && (
        <div className="text-center py-24 text-gray-400">
          <Bot className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-medium text-gray-500">No agents yet</p>
          <p className="text-sm mt-1">Create your first AI agent and deploy it to your site.</p>
        </div>
      )}

      <div className="space-y-3">
        {agents.map((agent) => (
          <div key={agent.id}>
            {editing === agent.id ? (
              <AgentForm
                initial={agent}
                onSave={(data) => { updateAgent(agent.id, data); setEditing(null); }}
                onCancel={() => setEditing(null)}
              />
            ) : (
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${agent.deployed ? 'bg-green-100' : 'bg-gray-100'}`}>
                  <Bot className={`w-5 h-5 ${agent.deployed ? 'text-green-600' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                        agent.deployed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {agent.deployed ? 'Deployed' : 'Inactive'}
                    </span>
                    {agent.category && (
                      <span className="text-xs bg-brand-light text-brand px-2 py-0.5 rounded-full flex-shrink-0">
                        {agent.category}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">{agent.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-400 font-mono">{agent.model}</span>
                    {agent.price && <span className="text-xs text-gray-400">{agent.price}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleDeploy(agent.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      agent.deployed
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {agent.deployed ? <Zap className="w-3.5 h-3.5" /> : <ZapOff className="w-3.5 h-3.5" />}
                    {agent.deployed ? 'Live' : 'Deploy'}
                  </button>
                  <button
                    onClick={() => { setEditing(agent.id); setAdding(false); }}
                    className="p-2 text-gray-400 hover:text-brand hover:bg-brand-light rounded-lg transition"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { if (window.confirm('Delete this agent?')) deleteAgent(agent.id); }}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsManager;
