import Image from "next/image";

import ColumnComponent from "@/components/columnComponent";
import CardComponent from "@/components/cardComponent";

export default function HomePage() {
  let mockData = {
    user: "John Doe",
    apointments: [ 
    {
      name: "Dentist Appointment",
      date: "2023-10-01",
      time: "10:00",
      duration: 60, //minutes
      location: "123 Dental St, Tooth City",
      description: "Regular check-up and cleaning.",
    }, 
    {
      name: "Meeting with Bob",
      date: "2023-10-02",
      time: "14:00",
      duration: 30, //minutes
      location: "456 Business Rd, Worktown",
      description: "Discuss project updates and next steps.",
    }, 
    {
      name: "Grocery Shopping",
      date: "2023-10-03",
      time: "17:00",
      duration: 90, //minutes
      location: "789 Market Ave, Shopville",
      description: "Buy groceries for the week.",
    } 
  ],
  }


  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-3xl font-bold mb-8">Welcome, {mockData.user}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ColumnComponent name="TODO">
          {mockData.apointments.map((appointment, index) => (
              <CardComponent
              name= {appointment.name}
              date = {appointment.date}
              time= {appointment.time}
              duration={appointment.duration}
              location={appointment.location}
              description={appointment.description}
              />    
            ))}
          </ColumnComponent>

          <ColumnComponent name="Currently Doing">
          
          </ColumnComponent>

          <ColumnComponent name="DONE">
          
          </ColumnComponent>
        </div>
      </div>
      
    </div>
  );
}
