import { getZoneById } from "../data/zones";

/**
 * API SERVICE - Connecting to External Data
 *
 * TODO: Session 5 - Students implement fetchQuestions function
 * TODO: Session 6 - Add localStorage caching
 */

/**
 * Fetches trivia questions for a specific zone
 * @param {number} zoneId - The zone to get questions for
 * @returns {Promise<Array>} Array of formatted question objects
 */
export async function fetchQuestions(zoneId) {
  // TODO: Session 5 - Implement this function
  // 1. Get zone data using getZoneById(zoneId)
  // 2. Build API URL with zone's categoryId, difficulty, questionCount
  // 3. Fetch from Open Trivia Database
  // 4. Handle response and decode URL-encoded strings
  // 5. Shuffle answers and return formatted questions

  console.log("TODO: Implement fetchQuestions for zone", zoneId);
  return [];
}

// TODO: Session 6 - Add caching functions
// export function clearQuestionCache(zoneId) { }
// export function clearAllQuestionCache() { }
