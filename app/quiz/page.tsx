"use client"
import { useState } from "react"

const questions = [
  {
    id: 1,
    question: "How old are you?",
    subtext: "This helps us understand how much time is on your side.",
    options: ["Under 20", "20–25", "26–30", "31–40", "Above 40"]
  },
  {
    id: 2,
    question: "What is your monthly income?",
    subtext: "Don't worry — this stays with you. We just want to give you realistic steps.",
    options: ["Under ₹15,000", "₹15,000–₹30,000", "₹30,000–₹50,000", "₹50,000–₹1,00,000", "Above ₹1,00,000"]
  },
  {
    id: 3,
    question: "Do you have health insurance right now?",
    subtext: "No judgment — most people don't when they start.",
    options: ["Yes, I'm covered", "I'm on my parents' policy", "No, I don't have any", "I'm not sure"]
  },
  {
    id: 4,
    question: "If you lost your job tomorrow, how long could you survive on your savings?",
    subtext: "This tells us how safe your foundation is right now.",
    options: ["Less than a month", "1–3 months", "3–6 months", "More than 6 months", "I have no savings yet"]
  },
  {
    id: 5,
    question: "What is your biggest feeling about money right now?",
    subtext: "Be honest — this is just between you and FinPath.",
    options: [
      "I am scared of making the wrong decision",
      "I don't know where to even begin",
      "I keep delaying and feel guilty",
      "I have started but feel lost",
      "I just want someone to tell me what to do"
    ]
  }
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const progress = ((current) / questions.length) * 100

  function handleSelect(option: string) {
    setSelected(option)
  }

  function handleNext() {
    if (!selected) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrent(current + 1)
    }
  }

  if (done) {
    return (
      <main style={{
        minHeight: "100vh", background: "#FEEEE5",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Georgia, serif", padding: "24px"
      }}>
        <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "24px" }}>🌸</div>
          <h1 style={{ fontSize: "32px", color: "#5A4452", marginBottom: "16px", fontWeight: "700" }}>
            You just took your first step.
          </h1>
          <p style={{ color: "#8a7178", fontSize: "18px", lineHeight: "1.7", marginBottom: "32px" }}>
            That took courage. Most people never even get here.
            Your personalised path is being built — this feature is coming very soon.
          </p>
          <div style={{
            background: "white", borderRadius: "20px", padding: "32px",
            border: "1.5px solid #E8BBB6", marginBottom: "24px"
          }}>
            <p style={{ color: "#5A4452", fontSize: "16px", lineHeight: "1.8", fontStyle: "italic" }}>
              "The journey of a thousand miles begins with a single step.
              You just took yours."
            </p>
          </div>
          <a href="/" style={{
            display: "inline-block", background: "#5A4452", color: "#FEEEE5",
            padding: "14px 32px", borderRadius: "50px", textDecoration: "none",
            fontSize: "16px"
          }}>
            ← Back to FinPath
          </a>
        </div>
      </main>
    )
  }

  const q = questions[current]

  return (
    <main style={{
      minHeight: "100vh", background: "#FEEEE5",
      fontFamily: "Georgia, serif", padding: "24px"
    }}>

      {/* Header */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <a href="/" style={{
          color: "#8a7178", textDecoration: "none", fontSize: "14px",
          display: "inline-block", marginBottom: "32px"
        }}>
          ← FinPath
        </a>

        {/* Progress bar */}
        <div style={{
          background: "#E8BBB640", borderRadius: "50px",
          height: "6px", marginBottom: "8px"
        }}>
          <div style={{
            background: "#5A4452", height: "6px", borderRadius: "50px",
            width: `${progress}%`, transition: "width 0.4s ease"
          }} />
        </div>
        <p style={{ color: "#b8a4aa", fontSize: "13px", marginBottom: "48px" }}>
          Question {current + 1} of {questions.length}
        </p>

        {/* Question */}
        <h1 style={{
          fontSize: "28px", color: "#5A4452", fontWeight: "700",
          marginBottom: "8px", lineHeight: "1.3"
        }}>
          {q.question}
        </h1>
        <p style={{ color: "#8a7178", fontSize: "15px", marginBottom: "32px", lineHeight: "1.6" }}>
          {q.subtext}
        </p>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {q.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                textAlign: "left", padding: "16px 20px",
                borderRadius: "14px", border: selected === option
                  ? "2px solid #5A4452"
                  : "1.5px solid #E8BBB6",
                background: selected === option ? "#5A445210" : "white",
                color: selected === option ? "#5A4452" : "#6b5560",
                fontSize: "15px", cursor: "pointer",
                fontFamily: "Georgia, serif",
                transition: "all 0.15s ease"
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={!selected}
          style={{
            width: "100%", padding: "16px",
            background: selected ? "#5A4452" : "#E8BBB660",
            color: selected ? "#FEEEE5" : "#b8a4aa",
            border: "none", borderRadius: "14px", fontSize: "16px",
            fontFamily: "Georgia, serif", cursor: selected ? "pointer" : "not-allowed",
            transition: "all 0.2s ease"
          }}
        >
          {current + 1 === questions.length ? "Show me my path →" : "Next →"}
        </button>

      </div>
    </main>
  )
}