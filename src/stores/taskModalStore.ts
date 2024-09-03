import { create } from 'zustand';

import { Task } from '@/__generated__/types';

type TaskModalStoreType = {
  open: boolean;
  values?: Task;
};

type TaskModalStoreActions = {
  openModal: (values?: Task) => void;
  closeModal: () => void;
};

type TaskModalStoreStoreType = TaskModalStoreType & TaskModalStoreActions;

const useTaskModalStore = create<TaskModalStoreStoreType>((set) => ({
  open: false,
  values: undefined,
  openModal: (values) => set({ open: true, values }),
  closeModal: () => set({ open: false, values: undefined }),
}));

export { useTaskModalStore };
