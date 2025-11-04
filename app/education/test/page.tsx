"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Trophy, BookOpen } from "lucide-react";

// Quiz questions - Replace with API data in production
const quizQuestions = [
  {
    id: 1,
    question: "What does the 12th house represent in Vedic astrology?",
    options: [
      "Wealth and finances",
      "Losses, isolation, and spirituality",
      "Career and profession",
      "Marriage and partnerships",
    ],
    correctAnswer: 1,
    explanation: "The 12th house in Vedic astrology represents losses, isolation, spirituality, and liberation (moksha).",
  },
  {
    id: 2,
    question: "Which planet is known as the 'Shadow Planet' in Vedic astrology?",
    options: ["Rahu", "Ketu", "Saturn", "Mars"],
    correctAnswer: 1,
    explanation: "Ketu is known as the 'Shadow Planet' and represents spirituality, detachment, and karmic liberation.",
  },
  {
    id: 3,
    question: "What is the duration of Vimshottari Dasha system?",
    options: ["60 years", "90 years", "120 years", "150 years"],
    correctAnswer: 2,
    explanation: "The Vimshottari Dasha system has a total duration of 120 years, divided among nine planets.",
  },
  {
    id: 4,
    question: "Which Nakshatra is ruled by Ketu?",
    options: ["Ashwini", "Magha", "Mula", "Dhanishta"],
    correctAnswer: 2,
    explanation: "Mula is the Nakshatra ruled by Ketu, representing roots, destruction, and transformation.",
  },
  {
    id: 5,
    question: "What does 'Pitra Dosha' refer to?",
    options: [
      "Planetary affliction",
      "Ancestral curse or karmic debt",
      "Marital problems",
      "Financial difficulties",
    ],
    correctAnswer: 1,
    explanation: "Pitra Dosha refers to ancestral curses or karmic debts from past generations affecting the present life.",
  },
];

interface QuizState {
  currentQuestion: number;
  selectedAnswers: Record<number, number>;
  showResults: boolean;
  score: number;
  timeStarted: Date;
}

export default function TestPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswers: {},
    showResults: false,
    score: 0,
    timeStarted: new Date(),
  });

  const handleAnswerSelect = useCallback((questionId: number, optionIndex: number) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: optionIndex,
      },
    }));
  }, []);

  const handleNext = useCallback(() => {
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    }
  }, [quizState.currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }));
    }
  }, [quizState.currentQuestion]);

  const handleSubmit = useCallback(() => {
    let score = 0;
    quizQuestions.forEach((question) => {
      if (quizState.selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    setQuizState((prev) => ({
      ...prev,
      showResults: true,
      score,
    }));
  }, [quizState.selectedAnswers]);

  const handleRestart = useCallback(() => {
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: {},
      showResults: false,
      score: 0,
      timeStarted: new Date(),
    });
  }, []);

  const currentQuestionData = quizQuestions[quizState.currentQuestion];
  const isLastQuestion = quizState.currentQuestion === quizQuestions.length - 1;
  const isFirstQuestion = quizState.currentQuestion === 0;
  const allQuestionsAnswered = quizQuestions.every(
    (q) => quizState.selectedAnswers[q.id] !== undefined
  );

  // Calculate percentage score
  const scorePercentage = Math.round((quizState.score / quizQuestions.length) * 100);

  if (quizState.showResults) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center"
          >
            {/* Trophy Icon */}
            <div className="flex justify-center mb-6">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${
                  scorePercentage >= 80
                    ? "bg-green-100"
                    : scorePercentage >= 60
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <Trophy
                  className={`w-12 h-12 ${
                    scorePercentage >= 80
                      ? "text-green-600"
                      : scorePercentage >= 60
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                />
              </div>
            </div>

            {/* Score Display */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            <div className="mb-8">
              <div className="text-6xl sm:text-7xl font-bold text-blue-600 mb-2">
                {scorePercentage}%
              </div>
              <p className="text-xl text-gray-600">
                You scored {quizState.score} out of {quizQuestions.length}
              </p>
            </div>

            {/* Performance Message */}
            <div className="mb-8 p-4 rounded-lg bg-gray-50">
              <p className="text-lg text-gray-700">
                {scorePercentage >= 80
                  ? "🎉 Excellent! You have a strong understanding of Vedic astrology!"
                  : scorePercentage >= 60
                  ? "👍 Good job! Keep learning to master Vedic astrology."
                  : "📚 Keep practicing! Review the concepts and try again."}
              </p>
            </div>

            {/* Detailed Results */}
            <div className="mt-8 space-y-4 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Detailed Results
              </h2>
              {quizQuestions.map((question, index) => {
                const selectedAnswer = quizState.selectedAnswers[question.id];
                const isCorrect = selectedAnswer === question.correctAnswer;
                return (
                  <div
                    key={question.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Your answer:</span>{" "}
                          {question.options[selectedAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-medium">Correct answer:</span>{" "}
                            {question.options[question.correctAnswer]}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 italic">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Retake Quiz
              </button>
              <a
                href="/education/Books"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Explore Books
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Test Your Astrology Knowledge
          </h1>
          <p className="text-gray-600">
            Question {quizState.currentQuestion + 1} of {quizQuestions.length}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={quizState.currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6"
          >
            <h2 id="question-label" className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              {currentQuestionData.question}
            </h2>

            <div className="space-y-3" role="radiogroup" aria-labelledby="question-label">
              {currentQuestionData.options.map((option, index) => {
                const isSelected =
                  quizState.selectedAnswers[currentQuestionData.id] === index;
                const optionId = `option-${currentQuestionData.id}-${index}`;
                return (
                  <button
                    key={index}
                    id={optionId}
                    onClick={() => handleAnswerSelect(currentQuestionData.id, index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-200"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                    aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}${isSelected ? " (selected)" : ""}`}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Previous
          </button>

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={
                quizState.selectedAnswers[currentQuestionData.id] === undefined
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Read each question carefully and select the best answer. You can
            navigate between questions using Previous and Next buttons. All questions must be
            answered before submitting.
          </p>
        </div>
      </div>
    </main>
  );
}
