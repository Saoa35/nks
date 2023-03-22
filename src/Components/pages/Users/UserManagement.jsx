function UserManagement() {
  return (
    <div className="user-manag_wrapper">
      <div className="select_inputs">
        <select name="search">
          <option value="" disabled hidden>
            Select State
          </option>
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          <option value="role3">Role 3</option>
        </select>
        <select name="state">
          <option value="" disabled hidden>
            State
          </option>
          <option value="text">Text search</option>
          <option value="roles">Roles</option>
          <option value="state">State</option>
        </select>
      </div>

      <div className="titles">
        <p>Name</p>
        <p>Email</p>
        <p>Roles</p>
        <p>Created at</p>
      </div>

      {/* <button onClick={handleClick}>Открыть окно</button>
      {isOpen && <div className="modal">Контент окна</div>} */}
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
