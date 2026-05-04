"use client"
import { useState } from "react"
import Link from "next/link"

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

function getResult(answers: string[]) {
  const insurance = answers[2]
  const savings = answers[3]

  const hasInsurance =
    insurance === "Yes, I'm covered" ||
    insurance === "I'm on my parents' policy"

  const hasEmergencyFund =
    savings === "3–6 months" ||
    savings === "More than 6 months"

  if (!hasInsurance) return "A"
  if (!hasEmergencyFund) return "B"
  return "C"
}

const results = {
  A: {
    emoji: "🛡️",
    tag: "Your first step",
    title: "Let's protect you first.",
    subtitle: "Before anything else — one hospital visit should not be able to take away everything you have worked for.",
    color: "#C8D0CF",
    textColor: "#2e3a38",
    steps: [
      {
        num: "01",
        heading: "Get health insurance this week",
        body: "Open Policybazaar or Niva Bupa's website. Search for an individual health plan. At your age, a ₹5 lakh cover costs around ₹400–700 per month. This is the most important ₹500 you will ever spend."
      },
      {
        num: "02",
        heading: "You don't need term insurance yet",
        body: "Term insurance is only needed if someone depends on your income — parents, a spouse, children. If you are single with no dependents, skip this for now. Revisit it when your situation changes."
      },
      {
        num: "03",
        heading: "Once insured, come back for Step 2",
        body: "After your health insurance is active, your next step is building your emergency fund. Come back and retake the quiz — we will show you exactly what to do next."
      }
    ],
    action: "Open Policybazaar →",
    actionLink: "https://www.policybazaar.com"
  },
  B: {
    emoji: "🏦",
    tag: "Your first step",
    title: "Let's build your safety cushion.",
    subtitle: "You have insurance — that's great. Now let's make sure you never have to panic if life surprises you.",
    color: "#E8BBB6",
    textColor: "#6b3a35",
    steps: [
      {
        num: "01",
        heading: "Calculate your target",
        body: "Take your monthly expenses and multiply by 3. That is your minimum emergency fund goal. If you spend ₹20,000 a month, your target is ₹60,000. Simple."
      },
      {
        num: "02",
        heading: "Open a liquid mutual fund",
        body: "Go to Groww app → search 'liquid fund' → pick any fund from HDFC, ICICI, or SBI with 4+ star rating. Put your emergency money here. It earns better than a savings account and you can withdraw in 1 day."
      },
      {
        num: "03",
        heading: "Automate ₹2,000–₹5,000 every month",
        body: "Set up an auto-transfer on the 1st of every month — the day your salary arrives. Treat it like a bill you pay yourself. In 6–12 months your cushion will be ready."
      }
    ],
    action: "Open Groww →",
    actionLink: "https://groww.in"
  },
  C: {
    emoji: "📈",
    tag: "Your first step",
    title: "You are ready to invest.",
    subtitle: "Your foundation is solid. Now let's put your money to work — simply, safely, and consistently.",
    color: "#A7AFC2",
    textColor: "#2e3650",
    steps: [
      {
        num: "01",
        heading: "Open Groww and complete KYC",
        body: "Download Groww → sign up with your phone number → complete KYC with your Aadhaar and PAN. Takes 10 minutes. Your account is usually active within 24 hours."
      },
      {
        num: "02",
        heading: "Search for Nifty 50 Index Fund",
        body: "In Groww, search 'Nifty 50 index fund'. Pick either Nippon India Index Fund or UTI Nifty 50. These funds simply track India's top 50 companies. Low cost, low stress, historically strong returns."
      },
      {
        num: "03",
        heading: "Start a SIP of ₹500–₹1,000",
        body: "Click 'Start SIP' → choose monthly → pick the 5th of every month (a few days after salary). Even ₹500 a month started at 21 becomes lakhs by the time you are 40. The amount matters less than starting."
      }
    ],
    action: "Open Groww →",
    actionLink: "https://groww.in"
  }
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [resultKey, setResultKey] = useState<"A" | "B" | "C" | null>(null)

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
      const key = getResult(newAnswers) as "A" | "B" | "C"
      setResultKey(key)
      setDone(true)
    } else {
      setCurrent(current + 1)
    }
  }

  if (done && resultKey) {
    const r = results[resultKey]
    return (
      <main style={{
        minHeight: "100vh", background: "#FEEEE5",
        fontFamily: "Georgia, serif", padding: "24px"
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          <Link href="/" style={{
            color: "#8a7178", textDecoration: "none", fontSize: "14px",
            display: "inline-block", marginBottom: "32px"
          }}>
            ← FinPath
          </Link>

          {/* Result header */}
          <div style={{
            background: r.color + "30", border: `1.5px solid ${r.color}`,
            borderRadius: "20px", padding: "32px", marginBottom: "24px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>{r.emoji}</div>
            <div style={{
              display: "inline-block", background: r.color,
              color: r.textColor, fontSize: "12px", padding: "4px 14px",
              borderRadius: "50px", marginBottom: "16px", letterSpacing: "1px"
            }}>
              {r.tag}
            </div>
            <h1 style={{
              fontSize: "28px", color: "#5A4452", fontWeight: "700",
              marginBottom: "12px", lineHeight: "1.3"
            }}>
              {r.title}
            </h1>
            <p style={{ color: "#8a7178", fontSize: "16px", lineHeight: "1.7" }}>
              {r.subtitle}
            </p>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {r.steps.map((step) => (
              <div key={step.num} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                border: "1.5px solid #E8BBB640"
              }}>
                <div style={{
                  display: "inline-block", background: r.color + "40",
                  color: r.textColor, fontSize: "12px", fontWeight: "700",
                  padding: "3px 10px", borderRadius: "50px", marginBottom: "10px"
                }}>
                  {step.num}
                </div>
                <h3 style={{ color: "#5A4452", fontWeight: "700", marginBottom: "8px", fontSize: "16px" }}>
                  {step.heading}
                </h3>
                <p style={{ color: "#8a7178", fontSize: "14px", lineHeight: "1.7" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Action button */}
          <a href={r.actionLink} target="_blank" rel="noopener noreferrer" style={{
            display: "block", textAlign: "center",
            background: "#5A4452", color: "#FEEEE5",
            padding: "16px", borderRadius: "14px",
            textDecoration: "none", fontSize: "16px",
            marginBottom: "16px"
          }}>
            {r.action}
          </a>

          {/* Retake */}
          <button onClick={() => {
            setCurrent(0)
            setAnswers([])
            setSelected(null)
            setDone(false)
            setResultKey(null)
          }} style={{
            width: "100%", padding: "14px", background: "transparent",
            border: "1.5px solid #E8BBB6", borderRadius: "14px",
            color: "#8a7178", fontSize: "15px", cursor: "pointer",
            fontFamily: "Georgia, serif"
          }}>
            Retake the quiz
          </button>

          {/* Encouragement */}
          <p style={{
            textAlign: "center", color: "#b8a4aa", fontSize: "13px",
            marginTop: "24px", lineHeight: "1.6", fontStyle: "italic"
          }}>
            You are not behind. You are not less than anyone.<br />
            You are better — because you chose to learn. 🌸
          </p>

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
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/" style={{
          color: "#8a7178", textDecoration: "none", fontSize: "14px",
          display: "inline-block", marginBottom: "32px"
        }}>
          ← FinPath
        </Link>

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

        <h1 style={{
          fontSize: "28px", color: "#5A4452", fontWeight: "700",
          marginBottom: "8px", lineHeight: "1.3"
        }}>
          {q.question}
        </h1>
        <p style={{ color: "#8a7178", fontSize: "15px", marginBottom: "32px", lineHeight: "1.6" }}>
          {q.subtext}
        </p>

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