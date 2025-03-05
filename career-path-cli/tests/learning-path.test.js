const { getLearningPath } = require('../src/learning-path/recommendations');

describe('Learning Path Recommendations', () => {
    test('should return a learning path for beginner to intermediate JavaScript skills', () => {
        const currentSkills = ['HTML', 'CSS'];
        const desiredSkills = ['JavaScript', 'React'];

        const expectedOutput = {
            courses: [
                'JavaScript Basics - Course Link',
                'React for Beginners - Course Link'
            ],
            projects: [
                'Build a personal website using JavaScript',
                'Create a simple React application'
            ],
            tutorials: [
                'JavaScript.info - Tutorial Link',
                'React Official Documentation - Tutorial Link'
            ]
        };

        expect(getLearningPath(currentSkills, desiredSkills)).toEqual(expectedOutput);
    });

    test('should return a learning path for advanced Python skills', () => {
        const currentSkills = ['Python', 'Data Analysis'];
        const desiredSkills = ['Machine Learning', 'Deep Learning'];

        const expectedOutput = {
            courses: [
                'Machine Learning A-Z - Course Link',
                'Deep Learning Specialization - Course Link'
            ],
            projects: [
                'Build a predictive model using Python',
                'Create a neural network from scratch'
            ],
            tutorials: [
                'Towards Data Science - Tutorial Link',
                'Kaggle Learn - Tutorial Link'
            ]
        };

        expect(getLearningPath(currentSkills, desiredSkills)).toEqual(expectedOutput);
    });

    test('should return an empty learning path for unknown skills', () => {
        const currentSkills = [];
        const desiredSkills = ['Unknown Skill'];

        const expectedOutput = {
            courses: [],
            projects: [],
            tutorials: []
        };

        expect(getLearningPath(currentSkills, desiredSkills)).toEqual(expectedOutput);
    });
});