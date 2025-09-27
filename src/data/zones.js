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
 * - questionCount: How many questions (max <=50)
 * - mapLabel: Position and styling for map display
 */

export const ZONES = [
  {
    id: 0,
    name: "Binary Woods",
    subtitle: "Bytes & Bugs",
    categoryId: 18, // Computers
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
  {
    id: 1,
    name: "Trivia Dunes",
    subtitle: "Random Brain Food",
    categoryId: 9, // General Knowledge
    difficulty: "medium",
    questionCount: 7,
    mapLabel: {
      x: 360,
      y: 530,
      fontSize: "35",
      fontFamily: "Pirata One, serif",
      color: "#333",
      fontWeight: "normal",
      alignment: "left",
    },
  },
  {
    id: 2,
    name: "Frozen Lab",
    subtitle: "Lab Experiments Gone Wild",
    categoryId: 17, // Science
    difficulty: "hard",
    questionCount: 10,
    mapLabel: {
      x: 1000,
      y: 400,
      fontSize: "35",
      fontFamily: "Pirata One, serif",
      color: "#333",
      fontWeight: "normal",
      alignment: "middle",
    },
  },
];

/**
 * Finds a zone by its ID
 * @param {number} id - The zone ID to search for
 * @returns {Object|undefined} The zone object if found, undefined otherwise
 */
export const getZoneById = (id) => ZONES.find((zone) => zone.id === id);
