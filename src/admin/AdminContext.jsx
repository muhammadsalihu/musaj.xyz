import React, { createContext, useContext, useState } from 'react';

const KEYS = {
  PROJECTS: 'musaj_projects',
  BLOG: 'musaj_blog',
  AGENTS: 'musaj_agents',
  AUTH: 'musaj_admin_auth',
};

const DEFAULT_PROJECTS = [
  {
    id: '1',
    title: 'Ultrapalace',
    description: 'Real-time livestreaming platform with multi-host rooms, live chat, and audience engagement features built for scale.',
    tech: ['React Native', 'Expo', 'LiveKit', 'Firebase'],
    icon: 'Video',
    liveLabel: 'Demo on request',
    liveUrl: null,
    category: 'Mobile & Streaming',
    inProgress: false,
  },
  {
    id: '2',
    title: 'Airbills Digital',
    description: 'Premium digital agency platform featuring a team portal, project showcase, blog, and a learning hub for clients.',
    tech: ['React Native', 'Node.js', 'TypeScript'],
    icon: 'Globe',
    liveLabel: 'airbills.digital',
    liveUrl: 'https://airbills.digital',
    category: 'Platform',
    inProgress: false,
  },
  {
    id: '3',
    title: 'T2Mobile Auth Service',
    description: 'Enterprise LDAP/Active Directory microservice powering authentication across telco platforms with high availability.',
    tech: ['NestJS', 'Docker', 'AKS'],
    icon: 'Lock',
    liveLabel: 'Architecture on request',
    liveUrl: null,
    category: 'Enterprise',
    inProgress: false,
  },
  {
    id: '4',
    title: 'Umnafass',
    description: 'E-commerce platform for personalized gifts — browse, customize, and deliver meaningful products with seamless checkout.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    icon: 'ShoppingBag',
    liveLabel: 'Live',
    liveUrl: null,
    category: 'E-commerce',
    inProgress: false,
  },
  {
    id: '5',
    title: 'SimAgent',
    description: 'AI agent for physics simulation — leverages Claude API and Azure to automate complex simulation workflows. Built for Microsoft Hackathon 2026.',
    tech: ['Python', 'Claude API', 'Azure'],
    icon: 'FlaskConical',
    liveLabel: 'In progress',
    liveUrl: null,
    category: 'AI / Research',
    inProgress: true,
  },
];

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => sessionStorage.getItem(KEYS.AUTH) === 'true');
  const [projects, _setProjects] = useState(() => load(KEYS.PROJECTS, DEFAULT_PROJECTS));
  const [blog, _setBlog] = useState(() => load(KEYS.BLOG, []));
  const [agents, _setAgents] = useState(() => load(KEYS.AGENTS, []));

  const save = (key, setter) => (val) => {
    setter(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  const setProjects = save(KEYS.PROJECTS, _setProjects);
  const setBlog = save(KEYS.BLOG, _setBlog);
  const setAgents = save(KEYS.AGENTS, _setAgents);

  const login = (pw) => {
    if (pw === 'admin123') {
      sessionStorage.setItem(KEYS.AUTH, 'true');
      setAuth(true);
      return true;
    }
    return false;
  };

  const skipLogin = () => {
    sessionStorage.setItem(KEYS.AUTH, 'true');
    setAuth(true);
  };

  const logout = () => {
    sessionStorage.removeItem(KEYS.AUTH);
    setAuth(false);
  };

  // project ops
  const addProject = (p) => setProjects([...projects, { ...p, id: Date.now().toString() }]);
  const updateProject = (id, u) => setProjects(projects.map((p) => (p.id === id ? { ...p, ...u } : p)));
  const deleteProject = (id) => setProjects(projects.filter((p) => p.id !== id));

  // blog ops
  const addPost = (p) =>
    setBlog([
      { ...p, id: Date.now().toString(), date: new Date().toISOString().split('T')[0], published: false },
      ...blog,
    ]);
  const updatePost = (id, u) => setBlog(blog.map((p) => (p.id === id ? { ...p, ...u } : p)));
  const deletePost = (id) => setBlog(blog.filter((p) => p.id !== id));
  const togglePublish = (id) => setBlog(blog.map((p) => (p.id === id ? { ...p, published: !p.published } : p)));

  // agent ops
  const addAgent = (a) =>
    setAgents([...agents, { ...a, id: Date.now().toString(), deployed: false, createdAt: new Date().toISOString() }]);
  const updateAgent = (id, u) => setAgents(agents.map((a) => (a.id === id ? { ...a, ...u } : a)));
  const deleteAgent = (id) => setAgents(agents.filter((a) => a.id !== id));
  const toggleDeploy = (id) => setAgents(agents.map((a) => (a.id === id ? { ...a, deployed: !a.deployed } : a)));

  return (
    <AdminContext.Provider
      value={{
        auth, login, skipLogin, logout,
        projects, addProject, updateProject, deleteProject,
        blog, addPost, updatePost, deletePost, togglePublish,
        agents, addAgent, updateAgent, deleteAgent, toggleDeploy,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
export { DEFAULT_PROJECTS };
