const inquirer = require('inquirer');

class Quiz {
  constructor() {
    this.questions = [
      {
        question: "What type of work environment do you prefer?",
        options: ["Remote", "Office", "Hybrid"],
        key: "workEnvironment"
      },
      {
        question: "Which of the following interests you the most?",
        options: ["Web Development", "Data Science", "Mobile Development", "Game Development"],
        key: "interest"
      },
      {
        question: "How would you rate your problem-solving skills?",
        options: ["Beginner", "Intermediate", "Advanced"],
        key: "problemSolving"
      },
      {
        question: "Do you enjoy working with numbers?",
        options: ["Yes", "No"],
        key: "enjoyNumbers"
      }
    ];
    this.answers = {};
  }

  async startQuiz() {
    try {
      for (const question of this.questions) {
        const answer = await inquirer.prompt([
          {
            type: 'list',
            name: question.key,
            message: question.question,
            choices: question.options
          }
        ]);
        this.answers[question.key] = answer[question.key];
      }
      return this.evaluateAnswers();
    } catch (error) {
      console.error('Error running quiz:', error);
      return ["Error occurred while processing your answers."];
    }
  }

  evaluateAnswers() {
    const careerPaths = [];
    if (this.answers.interest === "Web Development") {
      careerPaths.push("Frontend Developer", "Backend Developer", "Full Stack Developer");
    }
    if (this.answers.interest === "Data Science") {
      careerPaths.push("Data Analyst", "Data Scientist", "Machine Learning Engineer");
    }
    if (this.answers.interest === "Mobile Development") {
      careerPaths.push("iOS Developer", "Android Developer");
    }
    if (this.answers.interest === "Game Development") {
      careerPaths.push("Game Designer", "Game Programmer");
    }

    if (this.answers.enjoyNumbers === "Yes") {
      careerPaths.push("Financial Analyst", "Statistician");
    }

    return careerPaths.length > 0 ? careerPaths : ["No specific career path found based on your answers."];
  }
}

module.exports = { Quiz };
