import React, { useState } from 'react';
import {
  Plus, Edit2, Trash2, X, Check,
  Video, Globe, Lock, ShoppingBag, FlaskConical, Code, Brain, Server, Database, Layers,
} from 'lucide-react';
import { useAdmin } from '../AdminContext';

const ICON_OPTIONS = ['Video', 'Globe', 'Lock', 'ShoppingBag', 'FlaskConical', 'Code', 'Brain', 'Server', 'Database', 'Layers'];
const ICON_MAP = { Video, Globe, Lock, ShoppingBag, FlaskConical, Code, Brain, Server, Database, Layers };

const ProjectIcon = ({ name, className }) => {
  const Icon = ICON_MAP[name] || Code;
  return <Icon className={className} />;
};

const EMPTY = { title: '', description: '', tech: '', icon: 'Code', liveLabel: '', liveUrl: '', category: '', inProgress: false };

const ProjectForm = ({ initial = EMPTY, onSave, onCancel }) => {
  const [form, setForm] = useState({
    ...EMPTY,
    ...initial,
    tech: Array.isArray(initial.tech) ? initial.tech.join(', ') : (initial.tech || ''),
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.title.trim()) return;
    onSave({
      ...form,
      tech: form.tech.split(',').map((t) => t.trim()).filter(Boolean),
      liveUrl: form.liveUrl || null,
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Title *</label>
          <input
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
          <input
            value={form.category}
            onChange={(e) => set('category', e.target.value)}
            placeholder="e.g. Mobile & Streaming"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Tech Stack (comma-separated)</label>
          <input
            value={form.tech}
            onChange={(e) => set('tech', e.target.value)}
            placeholder="React, Node.js, MongoDB"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Icon</label>
          <select
            value={form.icon}
            onChange={(e) => set('icon', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          >
            {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Live Label</label>
          <input
            value={form.liveLabel}
            onChange={(e) => set('liveLabel', e.target.value)}
            placeholder="Live, Demo on request…"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Live URL (optional)</label>
          <input
            value={form.liveUrl || ''}
            onChange={(e) => set('liveUrl', e.target.value)}
            placeholder="https://..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.inProgress}
          onChange={(e) => set('inProgress', e.target.checked)}
          className="rounded border-gray-300 text-brand focus:ring-brand"
        />
        <span className="text-sm text-gray-600">Mark as In Progress</span>
      </label>

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Check className="w-4 h-4" /> Save Project
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

const ProjectsManager = () => {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-400 text-sm mt-0.5">{projects.length} projects listed on your site</p>
        </div>
        <button
          onClick={() => { setAdding(true); setEditing(null); }}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {adding && (
        <div className="mb-6">
          <ProjectForm
            onSave={(data) => { addProject(data); setAdding(false); }}
            onCancel={() => setAdding(false)}
          />
        </div>
      )}

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id}>
            {editing === project.id ? (
              <ProjectForm
                initial={project}
                onSave={(data) => { updateProject(project.id, data); setEditing(null); }}
                onCancel={() => setEditing(null)}
              />
            ) : (
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="bg-brand-light p-2.5 rounded-xl flex-shrink-0">
                  <ProjectIcon name={project.icon} className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    {project.inProgress && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">In Progress</span>
                    )}
                    {project.category && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{project.category}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-0.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-brand-light text-brand px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => { setEditing(project.id); setAdding(false); }}
                    className="p-2 text-gray-400 hover:text-brand hover:bg-brand-light rounded-lg transition"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { if (window.confirm('Delete this project?')) deleteProject(project.id); }}
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

export default ProjectsManager;
