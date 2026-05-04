export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
        <span className="text-xl font-semibold text-green-600">FinPath</span>
        <button className="bg-green-600 text-white px-5 py-2 rounded-full text-sm">
          Start your journey
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <span className="bg-green-50 text-green-700 text-sm px-4 py-1 rounded-full mb-6">
          Made for beginners in India
        </span>
        <h1 className="text-4xl font-bold text-gray-900 max-w-2xl leading-tight mb-4">
          You are not less than anyone. You are better because you know how to learn and grow.
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mb-8">
          FinPath shows you exactly what to do with your money — step by step, 
          no jargon, no confusion. Built for people who are starting from zero.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-green-700 transition-colors">
          Show me where to start
        </button>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
          Your path to financial confidence
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Three steps. In this exact order. Nothing skipped.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Protect yourself first</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Before investing a single rupee, make sure one hospital visit 
              cannot wipe out everything you have saved. Health insurance comes first.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Build your safety net</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Set aside 3 to 6 months of expenses somewhere safe and easy to access. 
              This is your emergency fund — your financial cushion.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Start investing</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Now you are ready. We will show you exactly which app to open, 
              what to click, and how much to start with. No guessing.
            </p>
          </div>

        </div>
      </section>

      {/* Reassurance Section */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Everyone starts somewhere
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          You are 21. You have time on your side. The best financial decision 
          you can make today is simply to start — even with ₹500 a month. 
          FinPath will show you exactly how.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to take your first step?
        </h2>
        <p className="text-green-100 mb-8">
          Answer 5 simple questions and we will show you exactly where to start.
        </p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
          Start for free — takes 2 minutes
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        FinPath — built for every person who just needs someone to show them the way.
      </footer>

    </main>
  )
}