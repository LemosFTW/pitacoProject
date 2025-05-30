"use client";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";
import { useState } from "react";
import { Task, Column, Columns } from "@/interfaces/types";
import ColumnComponent from "@/components/columnComponent";
import CardComponent from "@/components/cardComponent";
import ButtonComponent from "@/components/buttonComponent";

export default function ScrumTable() {
  const [columns, setColumns] = useState<Columns>({
    TODO: {
      name: "TODO",
      items: [
        {
          id: "1",
          name: "Dentist Appointment",
          date: "2023-10-01",
          time: "10:00",
          duration: 60,
          location: "123 Dental St, Tooth City",
          description: "Regular check-up and cleaning.",
        } as Task,
        {
          id: "2",
          name: "Meeting with Bob",
          date: "2023-10-02",
          time: "14:00",
          duration: 30,
          location: "456 Business Rd, Worktown",
          description: "Discuss project updates and next steps.",
        } as Task,
        {
          id: "3",
          name: "Grocery Shopping",
          date: "2023-10-03",
          time: "17:00",
          duration: 90,
          location: "789 Market Ave, Shopville",
          description: "Buy groceries for the week.",
        }as Task
      ]
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
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <CardComponent
                                name={item.name}
                                date={item.date}
                                time={item.time}
                                duration={item.duration}
                                location={item.location}
                                description={item.description}
                              />
                            </div>
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
        onClick={() => {
        }}
        disabled={false}/>
      </div>
    </div>
  );
}
