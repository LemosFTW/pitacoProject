import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

export interface Task {
  id: string;
  name: string;
  date: string;
  time: string;
  duration: number;
  location: string;
  description: string;
  scrum: string;
}

export interface Column {
  name: string;
  items: Task[];
}

export interface Columns {
  [key: string]: Column;
} 

export type HeaderTitle = {
  title: string;
  href: string;
};


export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, "id">) => void;
}

export interface CardComponentProps {
  name: string;
  date: string;
  time: string;
  duration: number;
  location: string;
  description: string;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  innerRef?: (element: HTMLElement | null) => void;
  onDelete?: () => void;
}