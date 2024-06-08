import React, { useState, useEffect } from 'react';

const SendMessage = () => {
  const[message, setMessage] = useState('');
  const[email, setEmail] = useState('');
  const[date, setDate] = useState('');

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

      <div className="flex flex-start items-center pb-36 pt-28 pl-12 flex-grow sm:pl-4 md:pl-8 lg:pl-12 xl:pl-12 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        <div className= "border-black rounded-md w-full h-full">
        <textarea 
          style={{ width: '75%', height: '85%', padding: '16px' }}
          className="rounded-md border border-gray-300 rounded-xl focus:outline-none focus:border-red-500"
          placeholder="Write your future email here..."
        ></textarea>
        </div>
      </div>
      
    </div>
  );
}

export default SendMessage;
