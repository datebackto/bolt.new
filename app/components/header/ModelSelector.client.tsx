import { useStore } from '@nanostores/react';
import type React from 'react';
import { modelStore, setModel, type Model } from '~/lib/stores/model';

const MODELS: { value: Model; label: string }[] = [
  { value: 'claude-3-5-sonnet-20240620', label: 'Claude 3.5 Sonnet' },
  { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' },
  { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku' },
];

export function ModelSelector() {
  const model = useStore(modelStore);

  return (
    <select
      className="bg-bolt-elements-item-backgroundDefault border border-bolt-elements-borderColor rounded-md px-2 py-1 text-sm text-bolt-elements-textPrimary outline-none"
      value={model}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setModel(e.target.value as Model)}
    >
      {MODELS.map((m) => (
        <option key={m.value} value={m.value} className="text-bolt-elements-textPrimary">
          {m.label}
        </option>
      ))}
    </select>
  );
}