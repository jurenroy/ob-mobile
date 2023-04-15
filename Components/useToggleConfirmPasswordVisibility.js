import { useState } from "react";

export const useToggleConfirmPasswordVisibility = () => {
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [rightIconConfirm, setRightIconConfirm] = useState('eye');
  
    const handleConfirmPasswordVisibility = () => {
      if (rightIconConfirm === 'eye') {
        setRightIconConfirm('eye-off');
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      } else if (rightIconConfirm === 'eye-off') {
        setRightIconConfirm('eye');
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      }
    };
  
    return {
      confirmPasswordVisibility,
      rightIconConfirm,
      handleConfirmPasswordVisibility
    };
  };