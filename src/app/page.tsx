"use client";
import React, { useState } from "react";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [actionItems, setActionItems] = useState<string[]>([]);
  const [step, setStep] = useState<"input" | "output">("input");

  // Placeholder AI logic
  function handleAnalyze() {
    // Simulate AI summary and action item extraction
    setSummary(
      "This is a summary of the meeting notes. Replace with AI output."
    );
    setActionItems([
      "Action 1: Assign to Alice by Friday",
      "Action 2: Bob to send report by Monday",
    ]);
    setStep("output");
  }

  function handleEditActionItem(index: number, value: string) {
    setActionItems((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  }

  function handleBack() {
    setStep("input");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          AI Meeting Assistant
        </h1>
        {step === "input" ? (
          <>
            <label className="block mb-2 font-medium">
              Paste Meeting Transcript
            </label>
            <textarea
              className="w-full h-40 border rounded p-2 mb-4"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Paste your meeting notes or transcript here..."
            />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={handleAnalyze}
              disabled={!transcript.trim()}
            >
              Analyze
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <div className="bg-gray-100 rounded p-3 mb-4 min-h-[48px]">
              {summary}
            </div>
            <h2 className="text-xl font-semibold mb-2">Action Items</h2>
            <ul className="mb-4">
              {actionItems.map((item, idx) => (
                <li key={idx} className="mb-2 flex items-center gap-2">
                  <input
                    className="flex-1 border rounded p-1"
                    value={item}
                    onChange={(e) => handleEditActionItem(idx, e.target.value)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                onClick={() => alert("Export/Share coming soon!")}
              >
                Export/Share
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        Hackathon 2025 &mdash; AI Meeting Assistant Prototype
      </footer>
    </div>
  );
}
