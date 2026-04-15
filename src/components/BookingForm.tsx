"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ALL_SERVICE_NAMES } from "@/lib/constants";

const schema = z.object({
  nume: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  telefon: z
    .string()
    .min(10, "Numărul de telefon este invalid")
    .regex(/^[0-9+\s()-]+$/, "Numărul de telefon este invalid"),
  email: z.string().email("Email invalid").or(z.literal("")),
  serviciu: z.string().min(1, "Selectează un serviciu"),
  data: z.string().min(1, "Selectează o dată"),
  ora: z.string().min(1, "Selectează o oră"),
  observatii: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const timeSlots = Array.from({ length: 21 }, (_, i) => {
  const totalMinutes = 9 * 60 + i * 30;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
});

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-space-mono)",
  fontSize: 8,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "#FFFFFF",
  border: "0.5px solid var(--border)",
  borderRadius: 0,
  fontFamily: "var(--font-space-grotesk)",
  fontSize: 14,
  color: "#111111",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-mono)",
  fontSize: 9,
  color: "#E63329",
  marginTop: 4,
};

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("Booking data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <CheckCircle size={48} color="#E63329" style={{ marginBottom: 24 }} />
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: 28,
            textTransform: "uppercase",
            letterSpacing: "-1px",
            color: "#111111",
            marginBottom: 12,
          }}
        >
          Rezervare Trimisă!
        </h2>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 300,
            fontSize: 14,
            color: "var(--muted)",
            maxWidth: 360,
          }}
        >
          Vei fi contactat în maxim 2 ore pentru confirmare.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "48px 40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 20,
        }}
        className="form-two-col"
      >
        {/* Nume */}
        <div>
          <label style={labelStyle}>Nume Complet *</label>
          <input
            {...register("nume")}
            placeholder="Ion Popescu"
            style={{
              ...inputStyle,
              borderColor: errors.nume ? "#E63329" : "var(--border)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#E63329")}
            onBlur={(e) => (e.target.style.borderColor = errors.nume ? "#E63329" : "var(--border)")}
          />
          {errors.nume && <p style={errorStyle}>{errors.nume.message}</p>}
        </div>

        {/* Telefon */}
        <div>
          <label style={labelStyle}>Telefon *</label>
          <input
            {...register("telefon")}
            placeholder="0747 533 806"
            type="tel"
            style={{
              ...inputStyle,
              borderColor: errors.telefon ? "#E63329" : "var(--border)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#E63329")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.telefon ? "#E63329" : "var(--border)")
            }
          />
          {errors.telefon && <p style={errorStyle}>{errors.telefon.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Email (opțional)</label>
        <input
          {...register("email")}
          placeholder="ion@example.com"
          type="email"
          style={{
            ...inputStyle,
            borderColor: errors.email ? "#E63329" : "var(--border)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#E63329")}
          onBlur={(e) => (e.target.style.borderColor = errors.email ? "#E63329" : "var(--border)")}
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      {/* Serviciu */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Serviciu Dorit *</label>
        <select
          {...register("serviciu")}
          style={{
            ...inputStyle,
            borderColor: errors.serviciu ? "#E63329" : "var(--border)",
            cursor: "pointer",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#E63329")}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.serviciu ? "#E63329" : "var(--border)")
          }
        >
          <option value="">Alege un serviciu...</option>
          {ALL_SERVICE_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {errors.serviciu && <p style={errorStyle}>{errors.serviciu.message}</p>}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 20,
        }}
        className="form-two-col"
      >
        {/* Data */}
        <div>
          <label style={labelStyle}>Data Preferată *</label>
          <input
            {...register("data")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            style={{
              ...inputStyle,
              borderColor: errors.data ? "#E63329" : "var(--border)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#E63329")}
            onBlur={(e) => (e.target.style.borderColor = errors.data ? "#E63329" : "var(--border)")}
          />
          {errors.data && <p style={errorStyle}>{errors.data.message}</p>}
        </div>

        {/* Ora */}
        <div>
          <label style={labelStyle}>Ora Preferată *</label>
          <select
            {...register("ora")}
            style={{
              ...inputStyle,
              borderColor: errors.ora ? "#E63329" : "var(--border)",
              cursor: "pointer",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#E63329")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.ora ? "#E63329" : "var(--border)")
            }
          >
            <option value="">Alege o oră...</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.ora && <p style={errorStyle}>{errors.ora.message}</p>}
        </div>
      </div>

      {/* Observații */}
      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Observații (opțional)</label>
        <textarea
          {...register("observatii")}
          rows={4}
          placeholder="Detalii suplimentare, preferințe de stil..."
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: 100,
          }}
          onFocus={(e) => (e.target.style.borderColor = "#E63329")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-black"
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Se trimite..." : "Trimite Rezervarea"}
        {!isSubmitting && <ArrowRight size={14} />}
      </button>

      <div
        style={{
          marginTop: 20,
          paddingTop: 20,
          borderTop: "0.5px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 8,
            color: "var(--muted)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            lineHeight: 2,
          }}
        >
          Vei fi contactat în maxim 2 ore pentru confirmare
          <br />
          Program: Luni–Vineri 09–19 · Sâmbătă 09–17
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
