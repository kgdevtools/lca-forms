"use client";
import React, { useState } from "react";

export default function PlayerRegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    parentName: "",
    parentContact: "",
    emergencyContact: "",
    emergencyPhone: "",
    experience: "beginner",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/forms/register-player", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    setSubmitting(false);
    if (res.ok) {
      onSuccess();
    } else {
      alert("There was an error submitting the form.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div className="flex gap-4">
        <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First Name" className="border px-3 py-2 rounded w-1/2" />
        <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last Name" className="border px-3 py-2 rounded w-1/2" />
      </div>
      <input name="dob" value={form.dob} onChange={handleChange} required type="date" placeholder="Date of Birth" className="border px-3 py-2 rounded w-full" />
      <div>
        <label className="block font-semibold">Parent/Guardian Info (if under 18)</label>
        <input name="parentName" value={form.parentName} onChange={handleChange} placeholder="Parent/Guardian Name" className="border px-3 py-2 rounded w-full mt-1" />
        <input name="parentContact" value={form.parentContact} onChange={handleChange} placeholder="Parent/Guardian Contact" className="border px-3 py-2 rounded w-full mt-1" />
      </div>
      <div>
        <label className="block font-semibold">Emergency Contact</label>
        <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} required placeholder="Emergency Contact Name" className="border px-3 py-2 rounded w-full mt-1" />
        <input name="emergencyPhone" value={form.emergencyPhone} onChange={handleChange} required placeholder="Emergency Contact Phone" className="border px-3 py-2 rounded w-full mt-1" />
      </div>
      <div>
        <label className="block font-semibold">Chess Experience</label>
        <select name="experience" value={form.experience} onChange={handleChange} className="border px-3 py-2 rounded w-full mt-1">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded" disabled={submitting}>
        {submitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
