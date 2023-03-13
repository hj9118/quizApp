import { useState } from 'react';
import './App.css';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  const question = [
    {
      text: 'What is the capital of America?',
      options: [
        { id: 0, text: 'New York City', isCorrect: false },
        { id: 1, text: 'Boston', isCorrect: false },
        { id: 2, text: 'Santa Fe', isCorrect: false },
        { id: 3, text: 'Washington DC', isCorrect: true },
      ],
    },
    {
      text: 'What year was the Constitution of America written?',
      options: [
        { id: 0, text: '1787', isCorrect: true },
        { id: 1, text: '1776', isCorrect: false },
        { id: 2, text: '1774', isCorrect: false },
        { id: 3, text: '1826', isCorrect: false },
      ],
    },
    {
      text: 'Who was the second president of the US?',
      options: [
        { id: 0, text: 'John Adams', isCorrect: true },
        { id: 1, text: 'Paul Revere', isCorrect: false },
        { id: 2, text: 'Thomas Jefferson', isCorrect: false },
        { id: 3, text: 'Benjamin Franklin', isCorrect: false },
      ],
    },
    {
      text: 'What is the largest state in the US?',
      options: [
        { id: 0, text: 'California', isCorrect: false },
        { id: 1, text: 'Alaska', isCorrect: true },
        { id: 2, text: 'Texas', isCorrect: false },
        { id: 3, text: 'Montana', isCorrect: false },
      ],
    },
    {
      text: 'Which of the following countries DO NOT border the US?',
      options: [
        { id: 0, text: 'Canada', isCorrect: false },
        { id: 1, text: 'Russia', isCorrect: true },
        { id: 2, text: 'Cuba', isCorrect: true },
        { id: 3, text: 'Mexico', isCorrect: false },
      ],
    },
  ];

  const restart = () => {
    setScore(0);
    setCurrentQ(0);
    setShowResult(false);
  }

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQ + 1 < question.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className='App'>
      <h1>Quiz</h1>
      <h2 className='q-text'>Your Score: {score}</h2>
      {showResult ? (
        <div className='a-result'>
          <h1>Results</h1>
          <h2>{score} of {question.length} - ( {(score/question.length)*100}% )</h2>
          <button onClick={() => restart()}>Restart</button>
        </div>
      ) : (
        <div className='quizArea'>
          <h2>
            Question {currentQ + 1} of {question.length}
          </h2>
          <h3 className='q-text'>{question[currentQ].text}</h3>

          <ul>
            {question[currentQ].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
