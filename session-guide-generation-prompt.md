# Session Guide Generation Prompt

## Task
Generate both student guide (SESSION-XX.md) and instructor guide (SESSION-XX-instruction.md) for the specified session.

## Required Steps
1. First read SESSION-01.md and SESSION-01-instruction.md to understand the exact format, structure, voice, and style
2. Generate both files following the established patterns exactly

## Student Guide Requirements (SESSION-XX.md)
- Follow SESSION-01.md structure: Table of Contents with anchor links, step-by-step sections, "Why This Matters" explanations, "Bonus Challenge" sections
- Use the same engaging, conversational tone and emoji usage
- Include Essential Terms table with consistent definitions (match previous sessions exactly, "Why it matters" can vary for context)
- Include "Ask the AI" section with 5-7 high-impact questions for deeper learning
- End with "Pro Tip" section
- Use practical, hands-on approach with clear numbered steps

### Essential Terms Table Standards
- Terms use proper capitalization: lowercase for common terms, proper case for product names (e.g., "component", "Codespace", "Vite", "Node.js")
- Acronyms should be spelled out in full (e.g., "Hot Module Replacement (HMR)", "Document Object Model (DOM)")
- Term column should not wrap - adjust table formatting to prevent wrapping
- Definitions must match exactly if the term appears in multiple sessions
- "Why it matters" column should be unique to each session's context
- First use of essential terms in body text should be **bolded**, subsequent uses unemphasized
- Use "Node.js" for the technology, not "node" (which refers to the binary)
- Format: emoji + term + definition + session-specific relevance

## Instructor Guide Requirements (SESSION-XX-instruction.md)
- Follow SESSION-01-instruction.md structure: Learning Outcomes, Instruction overview, detailed Slide Deck Outline
- Include "[HANDS-ON WORK HAPPENS HERE]" marker
- No time estimates or management details

## Learning Outcomes Standards
Format learning outcomes to match SESSION-01 and SESSION-02 standards:
- Use concise, action-oriented language - Start with verbs like "Define," "Explain," "Create," "Apply," "Experience"
- Avoid pedantic technical details - No specific tool names, version numbers, or implementation specifics (e.g., avoid "specifically ednf" or "using template literals and dynamic values")
- Keep descriptions brief - One line per outcome, focus on what students will be able to do
- Use consistent verb patterns - "Define X as Y," "Explain how X works," "Create X with Y"
- Avoid redundant qualifiers - Remove phrases like "including but not limited to" or overly detailed explanations
- Focus on learning, not doing - Emphasize understanding and ability rather than just task completion
- Maintain 10-15 outcomes per session - Enough to be comprehensive without being overwhelming

### Learning Outcomes Examples
✅ Good: "Create a functional component with multiple prop types"
❌ Poor: "Create a functional component with multiple prop types (text, onClick, variant) using destructuring syntax and default parameters"

Consistency check: Compare new learning outcomes against SESSION-01-instruction.md and SESSION-02-instruction.md for similar brevity and specificity levels.

## Ask the AI Section Guidelines
- Provide 5-7 of the most salient, impactful questions a student could ask their coding assistant
- Focus on questions that deepen understanding of core concepts from the session
- Avoid exhaustive lists - prioritize quality over quantity
- Questions should be practical and directly related to what students just accomplished
- Use conversational, student-friendly language
- Questions should encourage deeper exploration of "why" and "how" concepts work
- Format as simple bullet points with bold questions

### Ask the AI Examples
✅ Good: "**What makes React components reusable and why is that important?**"
✅ Good: "**How do props work in React and why are they read-only?**"
❌ Poor: Exhaustive categorized lists with 20+ questions

## Content Guidelines
- Match the established voice: encouraging, professional, practical
- Use LEGO/building block analogies where appropriate
- Include "Why This Matters" explanations for key concepts
- Provide clear examples and code snippets
- Focus on hands-on learning and immediate application
- Maintain consistency with previous sessions' terminology and definitions

## Essential Terms Consistency
- Use identical definitions from previous sessions for repeated terms
- Only vary the "Why it matters" column to reflect session context
- Add new terms following the established emoji + definition + relevance format

## Quality Standards
- Engaging and age-appropriate for 13-18 year olds
- Clear progression from simple to complex concepts
- Practical examples students can relate to
- Professional development context and real-world applications