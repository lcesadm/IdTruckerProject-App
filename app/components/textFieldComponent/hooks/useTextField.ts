import { useState } from 'react';

const useTextField = () => {
  const [showPassword, setShowPassword] = useState(true);

  return {
    showPassword,
    setShowPassword,
  };
};

export default useTextField;
