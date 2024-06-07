import React, { useState, useEffect } from 'react';

const SendMessage = () => {
  const[message, setMessage] = useState('');
  const[email, setEmail] = useState('');
  const[date, setDate] = useState('');

  return (
    <div className="text-right bg-amber-50 w-1/2">
      <h1 className="text-3xl font-bold underline">
        fs
      </h1>
    </div>
  );
  
}

export default SendMessage;
