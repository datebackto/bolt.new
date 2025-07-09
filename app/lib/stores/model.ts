import { atom } from 'nanostores';

export type Model = 'claude-3-5-sonnet-20240620' | 'claude-3-opus-20240229' | 'claude-3-haiku-20240307';

const DEFAULT_MODEL: Model = 'claude-3-5-sonnet-20240620';
const STORAGE_KEY = 'bolt_model';

function getInitialModel(): Model {
  if (typeof window !== 'undefined') {
    const persisted = localStorage.getItem(STORAGE_KEY) as Model | null;

    if (persisted) {
      return persisted;
    }
  }

  return DEFAULT_MODEL;
}

export const modelStore = atom<Model>(getInitialModel());

export function setModel(model: Model) {
  modelStore.set(model);

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, model);
  }
}
