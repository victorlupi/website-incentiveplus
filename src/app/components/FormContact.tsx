"use client";
import { useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Formulário enviado com sucesso!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      employees: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
     
      <form onSubmit={handleSubmit} className="text-xs">
        <div className="flex mb-4 ">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700">Nome:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700">Telefone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700">Empresa:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700">Número de Funcionários:</label>
            <input
              type="number"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mensagem:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows="3"
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
