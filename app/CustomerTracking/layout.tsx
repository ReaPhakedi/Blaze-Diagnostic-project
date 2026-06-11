"use client";
import { useState } from "react";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, make: "Toyota", model: "Corolla", year: 2020, reg: "ABC123", vin: "VIN001", mileage: 45000, notes: "Needs service" }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Vehicle Management</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add Vehicle</button>

      <ul className="mt-6 space-y-4">
        {vehicles.map((v) => (
          <li key={v.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold">{v.make} {v.model} ({v.year})</h2>
            <p>Registration: {v.reg}</p>
            <p>VIN: {v.vin}</p>
            <p>Mileage: {v.mileage} km</p>
            <p>Notes: {v.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
