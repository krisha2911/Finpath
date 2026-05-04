import Link from "next/link"
export default function Home() {

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#FEEEE5", minHeight: "100vh" }}>

      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px", background: "rgba(254,238,229,0.85)",
        backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(232,187,182,0.3)"
      }}>
        <span style={{ fontSize: "22px", fontWeight: "700", color: "#5A4452", letterSpacing: "-0.5px" }}>
          Fin<span style={{ color: "#E8BBB6" }}>Path</span>
        </span>
        <Link href="/quiz">
        <button style={{
          background: "#5A4452", color: "#FEEEE5", padding: "10px 24px",
          borderRadius: "50px", border: "none", fontSize: "14px",
          fontFamily: "Georgia, serif", cursor: "pointer", letterSpacing: "0.3px"
        }}>
          Start your journey →
        </button>
      </Link>
    </nav>

      {/* Hero */}
      <section style={{
        textAlign: "center", padding: "80px 24px 60px",
        background: "linear-gradient(180deg, #FEEEE5 0%, #fdf6f3 100%)"
      }}>
        <div style={{
          display: "inline-block", background: "rgba(200,208,207,0.35)",
          color: "#5A4452", fontSize: "13px", padding: "6px 18px",
          borderRadius: "50px", marginBottom: "28px", letterSpacing: "0.5px"
        }}>
          for every beginner in India ✦
        </div>

        <h1 style={{
          fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "700",
          color: "#5A4452", maxWidth: "700px", margin: "0 auto 20px",
          lineHeight: "1.2", letterSpacing: "-1px"
        }}>
          The future depends on<br />
          <span style={{ color: "#A7AFC2", fontStyle: "italic" }}>what you do today.</span>
        </h1>

        <p style={{
          color: "#8a7178", fontSize: "18px", maxWidth: "500px",
          margin: "0 auto 40px", lineHeight: "1.7", fontFamily: "Georgia, serif"
        }}>
          You don't need to know everything about finance.
          You just need someone to walk beside you —
          one small step at a time.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/quiz">
          <button style={{
            background: "#5A4452", color: "#FEEEE5", padding: "14px 32px",
            borderRadius: "50px", border: "none", fontSize: "16px",
            fontFamily: "Georgia, serif", cursor: "pointer"
          }}>
            Show me where to start
          </button>
        </Link>
        <button style={{
          background: "transparent", color: "#5A4452", padding: "14px 32px",
          borderRadius: "50px", border: "1.5px solid #E8BBB6", fontSize: "16px",
          fontFamily: "Georgia, serif", cursor: "pointer"
        }}>
          How does this work?
        </button>
      </div>

        {/* Soft trust note */}
        <p style={{ marginTop: "20px", color: "#b8a4aa", fontSize: "13px" }}>
          Free • No sign up needed • No jargon
        </p>
      </section>

      {/* Feeling section */}
      <section style={{ padding: "60px 24px", maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontSize: "22px", color: "#5A4452", lineHeight: "1.8",
          fontStyle: "italic", fontFamily: "Georgia, serif"
        }}>
          "You open Groww. You see 47 options. You close the app.
          You tell yourself you'll figure it out later."
        </p>
        <p style={{ marginTop: "16px", color: "#8a7178", fontSize: "16px", lineHeight: "1.7" }}>
          We know that feeling. FinPath exists so that never happens again.
        </p>
      </section>

      {/* Steps — warm cards */}
      <section style={{ background: "#fdf6f3", padding: "60px 24px" }}>
        <h2 style={{
          textAlign: "center", fontSize: "28px", color: "#5A4452",
          marginBottom: "8px", fontWeight: "700"
        }}>
          Your path, in the right order
        </h2>
        <p style={{
          textAlign: "center", color: "#8a7178", marginBottom: "48px", fontSize: "16px"
        }}>
          Three steps. We explain each one like a friend would.
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px", maxWidth: "900px", margin: "0 auto"
        }}>

          {[
            {
              num: "01", color: "#C8D0CF", textColor: "#3d5654",
              title: "Protect yourself first",
              body: "Before a single rupee is invested, we make sure one unexpected hospital visit cannot take everything away from you. This is the step nobody talks about — but it changes everything.",
              note: "Health insurance • Term insurance"
            },
            {
              num: "02", color: "#E8BBB6", textColor: "#6b3a35",
              title: "Build your safety cushion",
              body: "Life surprises everyone. We help you set aside a small fund — just 3 to 6 months of expenses — so you never have to panic. This is your financial calm.",
              note: "Emergency fund • Liquid savings"
            },
            {
              num: "03", color: "#A7AFC2", textColor: "#2e3650",
              title: "Now, start investing",
              body: "You are ready. We tell you exactly which app to open, what to tap, and how much to start with. No guessing. No shame. Just your first ₹500 working for your future.",
              note: "SIP • Index funds • Groww / Zerodha"
            }
          ].map((step) => (
            <div key={step.num} style={{
              background: "white", borderRadius: "20px", padding: "32px",
              border: `1.5px solid ${step.color}40`,
              boxShadow: "0 4px 24px rgba(90,68,82,0.06)"
            }}>
              <div style={{
                display: "inline-block", background: step.color + "40",
                color: step.textColor, fontWeight: "700", fontSize: "13px",
                padding: "4px 12px", borderRadius: "50px", marginBottom: "16px",
                letterSpacing: "1px"
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: "18px", color: "#5A4452", marginBottom: "12px", fontWeight: "700" }}>
                {step.title}
              </h3>
              <p style={{ color: "#8a7178", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
                {step.body}
              </p>
              <p style={{ color: step.textColor, fontSize: "12px", letterSpacing: "0.5px", opacity: 0.7 }}>
                {step.note}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Reassurance quote */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "linear-gradient(135deg, #5A4452 0%, #7a5a6a 100%)"
      }}>
        <p style={{
          fontSize: "clamp(20px, 3vw, 32px)", color: "#FEEEE5",
          maxWidth: "600px", margin: "0 auto 16px", lineHeight: "1.6",
          fontStyle: "italic", fontFamily: "Georgia, serif"
        }}>
          "You are not behind. You are not less than anyone.
          You are better — because you chose to learn."
        </p>
        <p style={{ color: "#E8BBB6", fontSize: "14px", letterSpacing: "1px" }}>
          — for every Krisha, starting today
        </p>
        <button style={{
          marginTop: "36px", background: "#FEEEE5", color: "#5A4452",
          padding: "14px 36px", borderRadius: "50px", border: "none",
          fontSize: "16px", fontFamily: "Georgia, serif", cursor: "pointer"
        }}>
          Take your first step →
        </button>
      </section>

      {/* How it feels different */}
      <section style={{ padding: "70px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{
          textAlign: "center", fontSize: "26px", color: "#5A4452",
          marginBottom: "40px", fontWeight: "700"
        }}>
          What makes FinPath different
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { icon: "💬", title: "Plain language always", body: "We never use a word we wouldn't say to a friend over chai." },
            { icon: "🪜", title: "One step at a time", body: "No overwhelming lists. Just the next right thing for you, right now." },
            { icon: "🤝", title: "No product pushing", body: "We don't earn from recommending funds. We just want you to win." },
            { icon: "🌱", title: "Built for India", body: "UPI, Zerodha, Groww, SIP, PPF — real apps, real steps, real India." },
          ].map((item) => (
            <div key={item.title} style={{
              background: "#FEEEE5", borderRadius: "16px", padding: "24px",
              border: "1px solid #E8BBB620"
            }}>
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
              <h4 style={{ color: "#5A4452", fontWeight: "700", marginBottom: "8px", fontSize: "15px" }}>{item.title}</h4>
              <p style={{ color: "#8a7178", fontSize: "14px", lineHeight: "1.6" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: "#C8D0CF", padding: "70px 24px", textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", color: "#2e3a38", marginBottom: "12px", fontWeight: "700" }}>
          Ready to take your first step?
        </h2>
        <p style={{ color: "#4a5c5a", fontSize: "16px", marginBottom: "32px", lineHeight: "1.6" }}>
          Answer 5 simple questions. We will show you exactly where to begin.<br />
          No sign up. No email. Just your path.
        </p>
        <button style={{
          background: "#5A4452", color: "#FEEEE5", padding: "16px 40px",
          borderRadius: "50px", border: "none", fontSize: "16px",
          fontFamily: "Georgia, serif", cursor: "pointer"
        }}>
          Start for free — takes 2 minutes
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "32px 24px",
        background: "#FEEEE5", color: "#b8a4aa", fontSize: "13px"
      }}>
        FinPath — built with care, for every person who just needed someone to show them the way. 🌸
      </footer>

    </main>
  )
}