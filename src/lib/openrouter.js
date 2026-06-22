const BASE = 'https://openrouter.ai/api/v1';

export const chat = async ({ model, systemPrompt, messages }) => {
  const key = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (!key) throw new Error('NO_KEY');

  const res = await fetch(`${BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://musaj.space',
      'X-Title': 'musaj.space',
    },
    body: JSON.stringify({
      model,
      messages: [
        ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
        ...messages,
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error ${res.status}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
};

export const MODELS = [
  { id: 'anthropic/claude-sonnet-4-5', label: 'Claude Sonnet 4.5', tag: 'Recommended' },
  { id: 'anthropic/claude-opus-4',     label: 'Claude Opus 4',     tag: 'Most capable' },
  { id: 'anthropic/claude-haiku-4-5',  label: 'Claude Haiku 4.5',  tag: 'Fastest' },
  { id: 'nousresearch/hermes-3-llama-3.1-70b', label: 'Hermes 3 (70B)',  tag: 'Open source' },
  { id: 'nousresearch/hermes-2-pro-mistral-7b', label: 'Hermes 2 Pro (7B)', tag: 'Lightweight' },
  { id: 'openai/gpt-4o',               label: 'GPT-4o',            tag: 'OpenAI' },
  { id: 'meta-llama/llama-3.3-70b-instruct', label: 'Llama 3.3 70B', tag: 'Meta' },
];
