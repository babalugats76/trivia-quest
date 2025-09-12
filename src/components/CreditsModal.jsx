export default function CreditsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content credits-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Credits & Attributions</h2>
        <div className="credits">
          <div className="credit-section">
            <h3>Fonts</h3>
            <p>
              <strong>Inter</strong> by Rasmus Andersson
              <br />
              <a
                href="https://rsms.me/inter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rsms.me/inter
              </a>
              <br />
              Licensed under SIL Open Font License
            </p>

            <p>
              <strong>Pirata One</strong> by Rodrigo Fuenzalida & Nicolas Massi
              <br />
              <a
                href="https://fonts.google.com/specimen/Pirata+One"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Fonts
              </a>
              <br />
              Licensed under SIL Open Font License
            </p>

            <p>
              <strong>Cinzel Decorative</strong> by Natanael Gama
              <br />
              <a
                href="https://fonts.google.com/specimen/Cinzel+Decorative"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Fonts
              </a>
              <br />
              Licensed under SIL Open Font License
            </p>
          </div>

          <div className="credit-section">
            <h3>Game Assets</h3>
            <p>
              <strong>Map Pack</strong> by Kenney Vleugels
              <br />
              <a
                href="https://www.kenney.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                kenney.nl
              </a>
              <br />
              License: Creative Commons Zero (CC0)
            </p>
          </div>

          <div className="credit-section">
            <h3>Music</h3>
            <p>
              <strong>Dramatic Action:</strong> Thrilling Game Show Contest 3
              <br />
              by LindsjoMusic (Pond5 ID: 36226560)
            </p>
            <p>
              <strong>Put On Armor:</strong> Heroic Epic Cinematic Trailer
              <br />
              by wolfgangwoehrle (Pond5 ID: 159799763)
            </p>
          </div>
        </div>
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
