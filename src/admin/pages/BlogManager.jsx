import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Check, Eye, EyeOff, FileText } from 'lucide-react';
import { useAdmin } from '../AdminContext';

const EMPTY = { title: '', excerpt: '', content: '', tags: '', readTime: '5 min read' };

const PostForm = ({ initial = EMPTY, onSave, onCancel }) => {
  const [form, setForm] = useState({
    ...EMPTY,
    ...initial,
    tags: Array.isArray(initial.tags) ? initial.tags.join(', ') : (initial.tags || ''),
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.title.trim()) return;
    onSave({
      ...form,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Title *</label>
        <input
          value={form.title}
          onChange={(e) => set('title', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Excerpt</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => set('excerpt', e.target.value)}
          rows={2}
          placeholder="Short summary shown in the blog list..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Content</label>
        <textarea
          value={form.content}
          onChange={(e) => set('content', e.target.value)}
          rows={10}
          placeholder="Write your article here..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white resize-none font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Tags (comma-separated)</label>
          <input
            value={form.tags}
            onChange={(e) => set('tags', e.target.value)}
            placeholder="Python, Django, React"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Read Time</label>
          <input
            value={form.readTime}
            onChange={(e) => set('readTime', e.target.value)}
            placeholder="5 min read"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Check className="w-4 h-4" /> Save Post
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

const BlogManager = () => {
  const { blog, addPost, updatePost, deletePost, togglePublish } = useAdmin();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
          <p className="text-gray-400 text-sm mt-0.5">
            {blog.filter((p) => p.published).length} of {blog.length} posts published
          </p>
        </div>
        <button
          onClick={() => { setAdding(true); setEditing(null); }}
          className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          <Plus className="w-4 h-4" /> New Article
        </button>
      </div>

      {adding && (
        <div className="mb-6">
          <PostForm
            onSave={(data) => { addPost(data); setAdding(false); }}
            onCancel={() => setAdding(false)}
          />
        </div>
      )}

      {blog.length === 0 && !adding && (
        <div className="text-center py-24 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-medium text-gray-500">No articles yet</p>
          <p className="text-sm mt-1">Click "New Article" to write your first post.</p>
        </div>
      )}

      <div className="space-y-3">
        {blog.map((post) => (
          <div key={post.id}>
            {editing === post.id ? (
              <PostForm
                initial={post}
                onSave={(data) => { updatePost(post.id, data); setEditing(null); }}
                onCancel={() => setEditing(null)}
              />
            ) : (
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 truncate">{post.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                        post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 truncate">{post.excerpt}</p>
                  )}
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    {(post.tags || []).map((tag) => (
                      <span key={tag} className="text-xs bg-brand-light text-brand px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => togglePublish(post.id)}
                    title={post.published ? 'Unpublish' : 'Publish'}
                    className={`p-2 rounded-lg transition ${
                      post.published
                        ? 'text-green-600 hover:bg-green-50'
                        : 'text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => { setEditing(post.id); setAdding(false); }}
                    className="p-2 text-gray-400 hover:text-brand hover:bg-brand-light rounded-lg transition"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { if (window.confirm('Delete this post?')) deletePost(post.id); }}
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

export default BlogManager;
