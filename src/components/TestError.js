import React from 'react';

const TestError = () => {
  const handleClick = () => {
    throw new Error("This is a test error for Sentry");
  };

  return (
    <button onClick={handleClick}>
      Throw Test Error
    </button>
  );
};

export default TestError;
