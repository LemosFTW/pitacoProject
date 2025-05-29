export interface Task {
  id: string;
  name: string;
  date: string;
  time: string;
  duration: number;
  location: string;
  description: string;
}

export interface Column {
  name: string;
  items: Task[];
}

export interface Columns {
  [key: string]: Column;
} 