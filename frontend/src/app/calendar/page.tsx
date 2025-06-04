"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { useEffect, useState} from "react";
import { get, post, del, patch } from "@/middleware/axios";
import { Task } from "@/interfaces/types";


export default function CalendarPage() {
  const [appointments, setAppointments] = useState<Task[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      await get('appointments').then(res => {
        console.log('Response:', res.appointments);
        setAppointments(res.appointments);
      }).catch(err => {
        console.log(err);
      });
    };
    fetchAppointments();
  }, []);
    

  return (
    <div className="w-full min-h-screen bg-gray-900 p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        height="auto"
        eventColor="#1976d2" 
        events={appointments.map(app => ({
          id: app.id,
          title: app.name,
          start: app.date,
          description: app.description
        }))}
      />
    </div>
  );
}