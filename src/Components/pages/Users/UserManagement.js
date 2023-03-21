import { useState } from "react";

function UserManagement() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Открыть окно</button>
      {isOpen && <div className="modal">Контент окна</div>}
    </div>
  );
}

export default UserManagement;

// .modal {
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: white;
//     padding: 20px;
//     animation-name: slideIn;
//     animation-duration: 0.5s;
//     animation-timing-function: ease-out;
//   }

//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translate(-50%, -70%);
//     }
//     to {
//       opacity: 1;
//       transform: translate(-50%, -50%);
//     }
//   }

//   button {
//     padding: 10px 20px;
//     border-radius: 5px;
//     border: none;
//     background-color: blue;
//     color: white;
//     font-size: 16px;
//     cursor: pointer;
//   }
