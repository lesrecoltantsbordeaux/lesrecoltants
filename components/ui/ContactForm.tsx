"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  eventDate?: string;
  guestCount?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "reservation",
    message: "",
    eventDate: "",
    guestCount: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Implémenter l'envoi du formulaire
    // Pour le moment, simulation
    setTimeout(() => {
      setStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "reservation",
        message: "",
        eventDate: "",
        guestCount: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showEventFields = formData.subject === "traiteur" || formData.subject === "privatisation";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom & Prénom */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
            placeholder="Jean"
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
            placeholder="Dupont"
          />
        </div>
      </div>

      {/* Email & Téléphone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
            placeholder="jean.dupont@email.com"
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      {/* Sujet */}
      <div>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white font-courier"
        >
          <option value="reservation">Réservation restaurant</option>
          <option value="traiteur">Service traiteur</option>
          <option value="privatisation">Privatisation</option>
          <option value="marche">Marché & bocaux</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>

      {/* Champs conditionnels pour traiteur/privatisation */}
      {showEventFields && (
        <div className="grid md:grid-cols-2 gap-6 bg-brand-primary/5 rounded-xl p-6 border border-brand-primary/20">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-neutral-dark mb-2">
              Date souhaitée
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
            />
          </div>
          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-neutral-dark mb-2">
              Nombre de personnes
            </label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-courier"
              placeholder="20"
            />
          </div>
        </div>
      )}

      {/* Message */}
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-neutral-light/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none font-courier"
          placeholder="Parlez-nous de votre projet..."
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
          <p className="font-medium">✓ Message envoyé avec succès !</p>
          <p className="text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
          <p className="font-medium">✗ Une erreur est survenue</p>
          <p className="text-sm mt-1">Veuillez réessayer ou nous contacter par téléphone.</p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <p className="text-sm text-neutral-medium text-center">
        En soumettant ce formulaire, vous acceptez que vos données soient utilisées
        pour traiter votre demande.
      </p>
    </form>
  );
}
