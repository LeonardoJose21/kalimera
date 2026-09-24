import { useState } from "react";
import siteData from "../data/site-data.json";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);
  const [draft, setDraft] = useState(siteData);
  const [fileHandle, setFileHandle] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | saved | copied | error

  const correctPassword = import.meta.env.VITE_EDITOR_NAME;
  const supportsFSA =
    typeof window !== "undefined" && "showSaveFilePicker" in window;
  const jsonText = JSON.stringify(draft, null, 2);

  const submit = (e) => {
    e.preventDefault();
    if (correctPassword && pwd === correctPassword) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const chooseFile = async () => {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: "site-data.json",
        types: [
          { description: "JSON", accept: { "application/json": [".json"] } },
        ],
      });
      setFileHandle(handle);
      return handle;
    } catch {
      return null;
    }
  };

  const saveToFile = async () => {
    const handle = fileHandle || (await chooseFile());
    if (!handle) return;
    try {
      const writable = await handle.createWritable();
      await writable.write(jsonText);
      await writable.close();
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  };

  const download = () => {
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#16231f] px-5">
        <form
          onSubmit={submit}
          className="w-full max-w-sm rounded-2xl bg-[#fbf5ea] p-8"
        >
          <h1 className="font-display text-2xl text-[#16231f]">Editar sitio</h1>
          <p className="mt-2 text-sm text-[#16231f]/70">
            Ingresa la contraseña para continuar.
          </p>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="mt-4 w-full rounded-lg border border-[#16231f]/20 px-3 py-2 text-sm"
            placeholder="Contraseña"
            autoFocus
          />
          {error && (
            <p className="mt-2 text-sm text-[#c05a2c]">
              Contraseña incorrecta.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#0e5c55] px-4 py-2 text-sm font-medium text-[#fbf5ea]"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  const tierLabels = {
    p1: "2 personas",
    p2: "3 a 4 personas",
    p3: "5 a 8 personas",
    p4: "10 personas",
  };

  return (
    <div className="min-h-screen bg-[#f1e7d3] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl text-[#16231f]">Editar sitio</h1>

        <div className="mt-8 rounded-2xl bg-[#fbf5ea] p-6">
          <h2 className="font-display text-lg text-[#16231f]">Google</h2>
          <label className="mt-4 block text-sm text-[#16231f]/70">
            Calificación
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={draft.rating}
              onChange={(e) =>
                setDraft({ ...draft, rating: parseFloat(e.target.value) })
              }
              className="mt-1 w-full rounded-lg border border-[#16231f]/20 px-3 py-2 text-sm"
            />
          </label>
          <label className="mt-4 block text-sm text-[#16231f]/70">
            Número de reseñas
            <input
              type="number"
              min="0"
              value={draft.reviewCount}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  reviewCount: parseInt(e.target.value || "0", 10),
                })
              }
              className="mt-1 w-full rounded-lg border border-[#16231f]/20 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <div className="mt-6 rounded-2xl bg-[#fbf5ea] p-6">
          <h2 className="font-display text-lg text-[#16231f]">
            Tarifas (COP por noche)
          </h2>
          {draft.pricing.map((tier, i) => (
            <label
              key={tier.id}
              className="mt-4 block text-sm text-[#16231f]/70"
            >
              {tierLabels[tier.id]}
              <input
                type="number"
                min="0"
                step="1000"
                value={tier.priceCOP}
                onChange={(e) => {
                  const next = [...draft.pricing];
                  next[i] = {
                    ...tier,
                    priceCOP: parseInt(e.target.value || "0", 10),
                  };
                  setDraft({ ...draft, pricing: next });
                }}
                className="mt-1 w-full rounded-lg border border-[#16231f]/20 px-3 py-2 text-sm"
              />
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={saveToFile}
          disabled={!supportsFSA}
          className="mt-6 w-full rounded-full bg-[#0e5c55] px-4 py-3 text-sm font-medium text-[#fbf5ea] disabled:opacity-40"
        >
          {status === "saved" ? "Guardado ✓" : "Guardar"}
        </button>
        {!supportsFSA && (
          <p className="mt-2 text-center text-xs text-[#16231f]/60">
            Usa Chrome o Edge para guardar directamente.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-center text-sm text-[#c05a2c]">
            No se pudo guardar.
          </p>
        )}

        <a
          href="#"
          className="mt-4 block text-center text-sm text-[#16231f]/60 underline-offset-2 hover:underline"
        >
          Volver al sitio
        </a>
      </div>
    </div>
  );
}
