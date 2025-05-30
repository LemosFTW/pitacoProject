"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";

export default function CalendarPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        height="auto"
        events={[
          { title: "Reunião de Equipe", date: "2025-05-28" },
        ]}
      />
    </div>
  );
}
