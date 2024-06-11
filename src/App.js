import React, { useState } from 'react';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSend = () => {
    console.log('Message:', message);
    console.log('Email:', email);
    console.log('Date:', `${selectedYear}-${selectedMonth}-${selectedDay}`);
    console.log('Private:', isPrivate);
  };

  
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1; 
  const todayDate = today.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 11 }, (_, i) => todayYear + i);

  return (
    <div className="flex flex-col bg-indigo-600 w-full h-screen">
      <nav className="flex items-center justify-between flex-wrap bg-indigo-600 pr-4 pt-2 pl-6 w-full h-16 sm:h-12 md:h-10 lg:h-8 xl:h-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold tracking-tight sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">ChronoMailer</span>
        </div>
        <div>
          <button className="inline-block font-semibold text-lg px-4 py-2 leading-none border rounded-md text-indigo-600 border-white bg-white mt-4 lg:mt-0 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            About Me
          </button>
        </div>
      </nav>

      <div className="flex flex-col flex-grow pb-48 pt-8 -mt-4 pl-12 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-12 pr-8">
        <div className="flex flex-grow pt-16">
          <div className="border-black rounded-md w-3/4 h-full">
            <textarea
              style={{ width: '100%', height: '100%', padding: '16px' }}
              className="resize-none rounded-md border border-gray-300 rounded-xl focus:outline-none focus:border-red-500"
              placeholder="Write your future email here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="mt-4 text-left text-white">
              <p>Send emails to your future self or others! Set the date and make it happen with ChronoMailer.</p>
            </div>
          </div>

          <div className="w-1/4 h-full ml-4 mr-4 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  placeholder="Enter recipient's email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="date">Date</label>
                <div className="flex space-x-2">
                  <select
                    className="w-1/3 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="">Month</option>
                    {monthNames.map((month, index) => (
                      <option key={month} value={index + 1}>{month}</option>
                    ))}
                  </select>
                  <select
                    className="w-1/3 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                  >
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    className="w-1/3 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="privacy">Privacy</label>
                <div className="flex space-x-2">
                  <button
                    className={`w-1/2 px-4 py-2 font-semibold border rounded-md ${
                      isPrivate ? 'text-white bg-pink-500' : 'text-red-500 bg-white'
                    }`}
                    onClick={() => setIsPrivate(true)}
                  >
                    Private
                  </button>
                  <button
                    className={`w-1/2 px-4 py-2 font-semibold border rounded-md ${
                      !isPrivate ? 'text-white bg-pink-500' : 'text-red-500 bg-white'
                    }`}
                    onClick={() => setIsPrivate(false)}
                  >
                    Public
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                className="w-full px-4 py-2 font-semibold text-indigo-600 bg-white border border-white rounded-md focus:outline-none hover:bg-gray-200"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;




