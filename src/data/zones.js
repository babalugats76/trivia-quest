/**
 * ZONE CONFIGURATION - The Heart of Your Game
 *
 * TODO: Session 4 - Students will design their zone themes here
 *
 * Each zone needs:
 * - id: Zone number (0, 1, 2)
 * - name: Creative zone title
 * - subtitle: Zone tagline/description
 * - categoryId: Question type from https://opentdb.com/api_category.php
 * - difficulty: "easy", "medium", or "hard"
 * - questionCount: How many questions (4, 7, 10)
 * - mapLabel: Position and styling for map display
 */

export const ZONES = [
  {
    id: 0,
    name: "TODO: Your Zone Name",
    subtitle: "TODO: Your Zone Subtitle",
    categoryId: 18, // TODO: Choose from API categories
    difficulty: "easy",
    questionCount: 4,
    mapLabel: {
      x: 225,
      y: 140,
      fontSize: "35",
      fontFamily: "Pirata One, serif",
      color: "#333",
      fontWeight: "normal",
      alignment: "left",
    },
  },
  // TODO: Session 4 - Add Zone 1 and Zone 2
];

/**
 * Finds a zone by its ID
 * @param {number} id - The zone ID to search for
 * @returns {Object|undefined} The zone object if found, undefined otherwise
 */
export const getZoneById = (id) => ZONES.find((zone) => zone.id === id);
