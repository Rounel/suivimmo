export default function AlfredHero() {
  return (
    <div className="min-h-screen">
        {/* Geometric line decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left lines */}
          <div className="absolute top-0 left-0 w-96 h-96">
            <div className="absolute top-48 left-12 w-80 h-px bg-gray-300 rotate-45 origin-left"></div>
            <div className="absolute top-64 left-28 w-64 h-px bg-gray-300 rotate-45 origin-left"></div>
          </div>

          {/* Top right lines */}
          <div className="absolute top-0 right-0 w-96 h-96">
            <div className="absolute top-48 right-12 w-80 h-px bg-gray-300 -rotate-45 origin-right"></div>
            <div className="absolute top-64 right-28 w-64 h-px bg-gray-300 -rotate-45 origin-right"></div>
          </div>

          {/* Bottom lines */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="absolute bottom-0 left-1/4 w-64 h-px bg-gray-300 rotate-12"></div>
            <div className="absolute bottom-0 left-1/3 w-48 h-px bg-gray-300 -rotate-12"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-px bg-gray-300 -rotate-12"></div>
            <div className="absolute bottom-0 right-1/3 w-48 h-px bg-gray-300 rotate-12"></div>
          </div>

          {/* Center radiating lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-32 h-px bg-gray-300 rotate-45 -translate-x-16 -translate-y-8"></div>
            <div className="absolute w-24 h-px bg-gray-300 -rotate-45 translate-x-8 -translate-y-12"></div>
            <div className="absolute w-28 h-px bg-gray-300 rotate-12 -translate-x-20 translate-y-16"></div>
            <div className="absolute w-20 h-px bg-gray-300 -rotate-12 translate-x-12 translate-y-20"></div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-16 py-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-purple-900 to-indigo-500">SUIVIMMO</span>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-medium">
            <span>🍎</span>
            <span>Download Alfred</span>
          </button>
        </header>

        {/* Main Hero Content */}
        <main className="relative z-10 px-16 py-20">
          {/* Purple diamond background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 opacity-30 rotate-45 rounded-3xl"></div>

          <div className="text-center relative z-20">
            <h1 className="text-7xl font-light text-black mb-16 leading-tight">
              Exposez vos propriétés, Suivez vos loyers,
              <br />
              Gérez vos locataires, Sans effort.
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-24">
              <div className="bg-white border-2 border-gray-300 rounded-full px-6 py-4 flex items-center justify-between shadow-sm">
                <span className="text-gray-600 text-lg">Boost your efficiency with hotkeys and AI</span>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-gray-700 font-mono text-sm">⌘+⌥+B</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">
              {/* Workflows */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M16 48h8v8h-8zm24-16h8v8h-8zm0 16h8v8h-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 20c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4v-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Workflows</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  You can extend Alfred and get
                  <br />
                  things done in your own way.
                </p>
              </div>

              {/* Revolutionize */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M32 8v8m0 32v8m24-24h-8m-32 0H8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Revolutionize</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Advanced AI technologies for
                  <br />
                  the betterment of humanity.
                </p>
              </div>

              {/* Powerpack */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M20 16h24l4 8-4 8H20l-4-8z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M28 32l8-8m-8 0l8 8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Powerpack</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Use it to customise your Mac
                  <br />
                  and make you more productive.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 flex items-center justify-between px-16 py-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div>
              <div className="text-sm font-medium text-black">OpenAI</div>
              <div className="text-xs text-gray-600">Supported</div>
            </div>
          </div>

          <a href="#" className="text-black font-medium hover:underline">
            {"What's new?"}
          </a>
        </footer>
    </div>
  )
}
