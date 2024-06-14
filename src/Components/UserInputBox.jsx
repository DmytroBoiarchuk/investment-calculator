import React from "react";

const UserInputBox = ({ children }) => {
  return (
    < div className='input-group' id='user-input'>
      {children}
    </div>
  );
};

export default UserInputBox;
