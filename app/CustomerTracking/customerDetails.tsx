"use client";
import { useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<
    { id: number; name: string; phone: string; email: string; notes: string; vehicles: string[] }[]
  >([]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Customer
      </button>

      {customers.length === 0 ? (
        <p className="mt-6 text-gray-500">No customers yet. Add your first customer.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {customers.map((c) => (
            <li key={c.id} className="p-4 bg-white shadow rounded">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <p>Phone: {c.phone}</p>
              <p>Email: {c.email}</p>
              <p>Notes: {c.notes}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
