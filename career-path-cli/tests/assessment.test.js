const Quiz = require('../src/assessment/quiz');

describe('Quiz Module', () => {
    let quiz;

    beforeEach(() => {
        quiz = new Quiz();
    });

    test('should start the quiz and return questions', async () => {
        const questions = await quiz.startQuiz();
        expect(questions).toBeDefined();
        expect(Array.isArray(questions)).toBe(true);
        expect(questions.length).toBeGreaterThan(0);
    });

    test('should evaluate answers and suggest career paths', () => {
        const answers = {
            interests: ['technology', 'design'],
            skills: ['programming', 'creativity']
        };
        const suggestions = quiz.evaluateAnswers(answers);
        expect(suggestions).toBeDefined();
        expect(Array.isArray(suggestions)).toBe(true);
        expect(suggestions.length).toBeGreaterThan(0);
    });

    test('should handle empty answers gracefully', () => {
        const answers = {
            interests: [],
            skills: []
        };
        const suggestions = quiz.evaluateAnswers(answers);
        expect(suggestions).toEqual(['Please provide valid interests and skills.']);
    });
});