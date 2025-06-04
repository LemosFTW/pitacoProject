"use client";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";
import { useState } from "react";
import { Task, Column, Columns } from "@/interfaces/types";
import ColumnComponent from "@/components/columnComponent";
import CardComponent from "@/components/cardComponent";
import ButtonComponent from "@/components/buttonComponent";
import ModalComponent from "@/components/modalComponent";
import { get, post, del, patch } from "@/middleware/axios";
import { useEffect,lazy } from "react";

export default function ScrumTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Task[]>([]);

  useEffect(() => {
    get('appointments').then(res => {
      console.log('Response:', res.appointments);
      setAppointments(res.appointments);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    setColumns(prev => ({
      ...prev,
      TODO: {
        ...prev.TODO,
        items: appointments.filter(appointment => appointment.scrum === "TODO")
      },
      DOING: {
        ...prev.DOING,
        items: appointments.filter(appointment => appointment.scrum === "DOING")
      },
      DONE: {
        ...prev.DONE,
        items: appointments.filter(appointment => appointment.scrum === "DONE")
      }
    }));
  }, [appointments]);

  const [columns, setColumns] = useState<Columns>({
    TODO: {
      name: "TODO",
      items: []
    } as Column,
    DOING: {
      name: "Currently Doing",
      items: []
    } as Column,
    DONE: {
      name: "DONE",
      items: []
    } as Column
  });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    console.log('Drag result:', result);
    patch(`appointments/${result.draggableId}`, {
      column: destination.droppableId
    }).then(res => {
      console.log('Task updated:', res);
    }).catch(err => {
      console.error('Error updating task:', err);
    });

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  const handleAddTask = (newTask: Omit<Task, "id">) => {
    const taskWithId = {
      ...newTask,
      id: Date.now().toString()
    };
    post('appointments', taskWithId).then(res => {
      console.log('Task added:', res);
    }).catch(err => {
      console.error('Error adding task:', err);
      throw new Error('Failed to add task');
});

    setColumns(prev => ({
      ...prev,
      TODO: {
        ...prev.TODO,
        items: [...prev.TODO.items, taskWithId]
      }
    }));
  };

  const handleDeleteTask = (taskId: string) => {
    del(`appointments/${taskId}`).then(res => {
      console.log('Task deleted:', res);
    }).catch(err => {
      console.error('Error deleting task:', err);
    });
    setColumns(prev => {
      const newColumns = { ...prev };
      Object.keys(newColumns).forEach(columnId => {
        newColumns[columnId].items = newColumns[columnId].items.filter(item => item.id !== taskId);
      });
      return newColumns;
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(columns).map(([columnId, column]) => (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: DroppableProvided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <ColumnComponent name={column.name}>
                      {column.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided: DraggableProvided) => (
                            <CardComponent
                              name={item.name}
                              date={item.date}
                              time={item.time}
                              duration={item.duration}
                              location={item.location}
                              description={item.description}
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                              innerRef={provided.innerRef}
                              onDelete={() => handleDeleteTask(item.id)}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ColumnComponent>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
        <ButtonComponent
          label="Add New Task"
          onClick={() => setIsModalOpen(true)}
          disabled={false}
        />
      </div>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
}
