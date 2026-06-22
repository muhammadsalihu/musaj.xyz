import React from 'react';
import { useAdmin } from '../AdminContext';
import { FolderKanban, FileText, Bot, Globe } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, sub }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <div className="bg-brand-light p-2 rounded-lg">
        <Icon className="w-4 h-4 text-brand" />
      </div>
    </div>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
  </div>
);

const Overview = () => {
  const { projects, blog, agents } = useAdmin();
  const published = blog.filter((p) => p.published).length;
  const deployed = agents.filter((a) => a.deployed).length;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Overview</h2>
      <p className="text-gray-400 text-sm mb-8">Your site at a glance.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Projects" value={projects.length} icon={FolderKanban} sub="listed on site" />
        <StatCard label="Blog Posts" value={blog.length} icon={FileText} sub={`${published} published`} />
        <StatCard label="Agents" value={agents.length} icon={Bot} sub={`${deployed} deployed`} />
        <StatCard label="Site" value="Live" icon={Globe} sub="musaj.space" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Blog Posts</h3>
          {blog.length === 0 ? (
            <p className="text-sm text-gray-400">No posts yet — create your first article in Blog.</p>
          ) : (
            <ul className="space-y-3">
              {blog.slice(0, 5).map((post) => (
                <li key={post.id} className="flex items-center gap-3">
                  <span className="text-sm text-gray-700 truncate flex-1">{post.title}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                      post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Deployed Agents</h3>
          {deployed === 0 ? (
            <p className="text-sm text-gray-400">No agents deployed — create one in Agents.</p>
          ) : (
            <ul className="space-y-3">
              {agents
                .filter((a) => a.deployed)
                .map((agent) => (
                  <li key={agent.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 flex-1">{agent.name}</span>
                    <span className="text-xs text-gray-400 font-mono">{agent.model}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
