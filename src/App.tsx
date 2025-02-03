import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

function App() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-bold tracking-wider">calendar</h1>
        </div>
        <a
          href="https://keiooon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <span>KEIOOON</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Today's Date */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <h2 className="text-gray-400 mb-2">Today</h2>
              <span className="text-8xl font-bold text-blue-400">{currentDay}</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-7 gap-4">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-gray-400 font-medium">
                    {day}
                  </div>
                ))}
                {Array(firstDay)
                  .fill(null)
                  .map((_, index) => (
                    <div key={`empty-${index}`} />
                  ))}
                {days.map((day) => (
                  <div
                    key={day}
                    className={`text-center p-2 rounded-lg ${
                      day === currentDay
                        ? 'bg-blue-500 text-white font-bold'
                        : 'hover:bg-gray-700 cursor-pointer'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;