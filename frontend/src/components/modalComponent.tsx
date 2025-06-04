"use client";
import { useState } from "react";
import { ModalProps } from "@/interfaces/types";


export default function ModalComponent({ isOpen, onClose, onSave }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    duration: 0,
    location: "",
    description: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    setFormData({
      name: "",
      date: "",
      time: "",
      duration: 0,
      location: "",
      description: ""
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Nova Tarefa</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-1">Data</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1">Hora</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-1">Duração (minutos)</label>
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">Local</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 