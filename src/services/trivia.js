import { getZoneById } from "../data/zones";

/**
 * TRIVIA API SERVICE - Connect to OpenTrivia Database
 *
 * TODO: Session 5 - Implement fetchQuestions and transformQuestion
 * TODO: Session 6 - Add caching with localStorage
 * TODO: Session 8 - Add cache management functions
 */

// Build API URL with zone parameters
function buildApiUrl(zone, questionCount) {
  return `https://opentdb.com/api.php?amount=${questionCount}&category=${zone.categoryId}&type=multiple&difficulty=${zone.difficulty}&encode=url3986`;
}

// Randomly shuffle answer choices
function shuffleAnswers(correctAnswer, incorrectAnswers) {
  const allAnswers = [...incorrectAnswers, correctAnswer];
  return allAnswers.sort(() => Math.random() - 0.5);
}

// Decode URL-encoded text from API
function decodeText(encodedText) {
  return decodeURIComponent(encodedText);
}

// Transform API question into game format
function transformQuestion(apiQuestion) {
  const question = decodeText(apiQuestion.question);
  const incorrectAnswers = apiQuestion.incorrect_answers.map((answer) =>
    decodeText(answer)
  );
  const correctAnswer = decodeText(apiQuestion.correct_answer);
  const shuffledAnswers = shuffleAnswers(correctAnswer, incorrectAnswers);
  const correctIndex = shuffledAnswers.indexOf(correctAnswer);
  return {
    question: question,
    answers: shuffledAnswers,
    correct: correctIndex,
  };
}

// Generate cache key for localStorage
function getCacheKey(zoneId) {
  return `trivia_questions_zone_${zoneId}`;
}

// Get cached question for a zone
function getCachedQuestions(zoneId) {
  const cacheKey = getCacheKey(zoneId);
  const cached = localStorage.getItem(cacheKey);
  return cached ? JSON.parse(cached) : null; // Deserialization happens here
}

// Save questions to cache
function setCachedQuestions(zoneId, questions) {
  const cacheKey = getCacheKey(zoneId);
  localStorage.setItem(cacheKey, JSON.stringify(questions)); // Serialization happens here
}

// Load questions for a specific zone
export async function fetchQuestions(zoneId, count = null) {
  // Check cache first - try to get questions from localStorage
  const cachedQuestions = getCachedQuestions(zoneId);
  if (cachedQuestions) {
    console.log(`Cache hit for zone ${zoneId}`);
    return cachedQuestions; // Return cached data immediately
  }

  console.log(`Cache miss for zone ${zoneId} - fetching from API`);

  // Cache miss - proceed with API fetch
  const zone = getZoneById(zoneId);
  if (!zone) return [];

  const questionCount = count || zone.questionCount;
  const url = buildApiUrl(zone, questionCount);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return [];
    }

    // Transform each API question into our game format
    const questions = data.results.map((apiQuestion) =>
      transformQuestion(apiQuestion)
    );

    // Store in cache after successful fetch and transformation
    setCachedQuestions(zoneId, questions);

    return questions; // Return fresh data from API
  } catch (error) {
    console.log("Failed to fetch questions:", error);
    return [];
  }
}

export function clearQuestionCache(zoneId) {
  const cacheKey = getCacheKey(zoneId);
  localStorage.removeItem(cacheKey);
}

export function clearAllQuestionCache() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("trivia_questions_zone_"))
    .forEach((key) => localStorage.removeItem(key));
}
