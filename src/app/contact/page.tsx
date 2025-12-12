"use client";

import { useState } from "react";
import style from "./contact.module.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
          <strong>contact</strong>
        </h1>

        <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.label} htmlFor="name">Name</label>
          <input
            className={style.textarea}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <label className={style.label} htmlFor="email">Email</label>
          <input
            className={style.textarea}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label className={style.label} htmlFor="message">Message</label>
          <textarea
            className={style.textarea}
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button className={style.button} type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {status && <p>{status}</p>}
        </form>
      </main>
    </div>
  );
}
