/**
 * START HERE COMPONENT - Project Boilerplate
 *
 * This is a temporary welcome screen that's part of the project setup.
 * Students can safely ignore this file - it will be replaced in Session 1.
 *
 * This component contains:
 * - Welcome message and instructions
 * - Self-contained styling (no external dependencies)
 * - Animated logo and responsive design
 *
 * Students should focus on App.jsx and other core components instead.
 */

export default function StartHere() {
  return (
    <>
      <style>{`
        /* Override app-container constraints for StartHere */
        .app-container:has(.start-here) {
          height: auto;
          min-height: 100vh;
          width: auto;
        }
        
        body:has(.start-here) {
          overflow-y: auto;
          overflow-x: hidden;
        }
        .start-here {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          color: white;
          text-align: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: #e2e8f0;
          padding: 2rem 1rem;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .start-here-content {
          max-width: min(720px, 90vw);
          width: 100%;
          margin: auto;
          overflow: visible;
        }
        
        .start-here-logo {
          overflow: visible;
        }

        .start-here-svg {
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          margin-bottom: 1rem;
          max-width: 100%;
          height: auto;
        }

        .start-here-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 700;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #9cdcfe;
          margin-bottom: 0.5rem;
        }

        .start-here-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .terminal-window {
          background-color: #1e1e1e;
          color: #d4d4d4;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 2rem;
          border: 1px solid #333;
          text-align: left;
        }

        .terminal-header {
          background-color: #2c2c2c;
          padding: 0.5rem;
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }

        .red { background-color: #ff5f56; }
        .yellow { background-color: #ffbd2e; }
        .green { background-color: #27c93f; }

        .terminal-body {
          padding: 1rem 1.5rem 1.5rem;
          line-height: 1.5;
        }

        .terminal-body li, .terminal-body p {
          font-size: 0.9375rem;
          padding: 0.5rem 0;
        }

        .terminal-body h3 {
          margin-bottom: 0.75rem;
        }

        .terminal-body code {
          background-color: #2c2c2c;
          color: #9cdcfe;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
        }

        .start-here-footer {
          margin-top: 2rem;
          padding: 1rem;
          font-size: 0.875rem;
          color: #64748b;
          border-top: 1px solid #334155;
        }

        /* Animation Classes */
        .spinning-tassle {
          animation: twist 1.5s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }

        .cap-element {
          animation: gentle-pulse 3s ease-in-out infinite;
        }

        .floating-tassle {
          animation: swing 2s ease-in-out infinite;
          transform-origin: 113.69px 41.254px;
        }

        @keyframes twist {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gentle-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }

        @media (max-width: 640px) {
          .terminal-body {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="start-here">
        <div className="start-here-content">
          <div className="start-here-logo">
            <svg
              className="start-here-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 91"
              width="150"
              height="113"
            >
              <g id="logo">
                <path
                  id="tassle-bottom"
                  className="spinning-tassle"
                  fill="#aa54ff"
                  d="m112.59 47.946-5.035 8.72a1.274 1.274 0 0 0 1.103 1.91h10.062a1.274 1.274 0 0 0 1.11-1.91l-5.035-8.72a1.28 1.28 0 0 0-2.205 0z"
                />
                <path
                  id="cap-front"
                  className="cap-element"
                  fill="#014ce4"
                  d="M88.211 27.925c-.274 8.5-12.795 15.343-28.207 15.343s-27.933-6.85-28.207-15.343v16.536l25.036 11.275a7.733 7.733 0 0 0 6.356 0L88.231 44.46V28.213c-.006-.096-.017-.192-.017-.288z"
                />
                <path
                  id="cap"
                  className="cap-element"
                  fill="#01e7e4"
                  d="M118.23 25.466 63.172.684a7.733 7.733 0 0 0-6.357 0L1.771 25.466a3.007 3.007 0 0 0 0 5.48l30.01 13.508V27.919c.273-8.494 12.794-15.336 28.206-15.336 15.412 0 27.933 6.85 28.207 15.336v16.535l30.002-13.508a3.007 3.007 0 0 0 .035-5.48z"
                />
                <ellipse
                  id="cap-top"
                  className="cap-element"
                  cx="60.004"
                  cy="27.925"
                  fill="#001399"
                  rx="28.207"
                  ry="15.336"
                />
                <path
                  id="cap-middle"
                  className="cap-element"
                  fill="#aa54ff"
                  d="M56.826 55.734 31.79 44.459v30.7c0-8.63 12.631-15.624 28.214-15.624 15.583 0 28.221 6.994 28.221 15.624v-30.7L63.169 55.734a7.733 7.733 0 0 1-6.343 0z"
                />
                <ellipse
                  id="cap-bottom"
                  className="cap-element"
                  cx="60.004"
                  cy="75.16"
                  fill="#711cff"
                  rx="28.214"
                  ry="15.624"
                />
                <circle
                  id="tassle-top"
                  className="floating-tassle"
                  cx="113.69"
                  cy="41.254"
                  r="3.808"
                  fill="#014ce4"
                />
              </g>
            </svg>
          </div>
          <h1 className="start-here-title">Fullstack Explorer</h1>
          <p className="start-here-subtitle">
            Your journey into React begins now!
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              background: "#334155",
              margin: "2rem 0",
            }}
          />
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <h3>👉 Start Here</h3>
              <p>This screen is powered by a React component...</p>
              <ol>
                <li>
                  Open <code>src/App.jsx</code>
                </li>
                <li>
                  Add the import:{" "}
                  <code>
                    import SplashScreen from './components/SplashScreen';
                  </code>
                </li>
                <li>
                  Replace <code>&lt;StartHere /&gt;</code> with{" "}
                  <code>&lt;SplashScreen /&gt;</code>
                </li>
              </ol>
              <p>
                ✨ Watch the screen update instantly — no save needed! This is
                called <strong>Hot Module Replacement (HMR)</strong>!
              </p>
            </div>
          </div>
        </div>

        <footer className="start-here-footer">
          <p>© 2025 Wizcamp. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
