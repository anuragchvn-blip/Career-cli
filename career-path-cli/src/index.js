const inquirer = require('inquirer');
const { Quiz } = require('./assessment/quiz');
const { getLearningPath } = require('./learning-path/recommendations');
const ResourceLibrary = require('./resources/library');
const { fetchJobMarketData } = require('./job-market/insights');

const startCLI = async () => {
  while (true) {
    console.log('Welcome to the Career Path CLI Application!');

    const mainMenu = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'Take Career Assessment',
          'Get Learning Path Recommendations',
          'View Resource Library',
          'Get Job Market Insights',
          'Exit'
        ]
      }
    ]);

    try {
      switch (mainMenu.action) {
        case 'Take Career Assessment':
          const quiz = new Quiz();
          await quiz.startQuiz();
          break;
        case 'Get Learning Path Recommendations':
          const { currentSkills, desiredSkills } = await inquirer.prompt([
            {
              type: 'input',
              name: 'currentSkills',
              message: 'Enter your current programming skills (comma-separated):'
            },
            {
              type: 'input',
              name: 'desiredSkills',
              message: 'Enter your desired programming skills (comma-separated):'
            }
          ]);
          const learningPath = getLearningPath(currentSkills.split(','), desiredSkills.split(','));
          console.log('Your tailored learning path:', learningPath);
          break;
        case 'View Resource Library':
          const resourceLibrary = new ResourceLibrary();
          const resources = await resourceLibrary.listResources();
          console.log('Available resources:', resources);
          break;
        case 'Get Job Market Insights':
          const jobMarketData = await fetchJobMarketData();
          console.log('Job Market Insights:', jobMarketData);
          break;
        case 'Exit':
          console.log('Thank you for using the Career Path CLI Application!');
          return;
      }
    } catch (error) {
      console.error('Error performing action:', error);
    }
  }
};

// Start the CLI application
startCLI();