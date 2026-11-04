"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Note = { id: number; content: string };

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  async function load() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoggedIn(false);
      return;
    }
    const { data } = await supabase
      .from("notes")
      .select("id, content")
      .order("id", { ascending: false });
    setNotes(data ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  async function addNote() {
    if (!text.trim()) return;
    await supabase.from("notes").insert({ content: text });
    setText("");
    load();
  }

  if (!loggedIn) {
    return (
      <main style={{ maxWidth: 400, margin: "60px auto" }}>
        <p>Please <a href="/login">log in</a> first.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 400, margin: "60px auto", display: "grid", gap: 10 }}>
      <h1>My Notes</h1>
      <input
        placeholder="Write a note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addNote}>Save note</button>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.content}</li>
        ))}
      </ul>
    </main>
  );
}