import { useState } from "react";

export default function GeneralSection() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="general-section">
      {isEditing ? (
        <GeneralInput
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      ) : (
        <RenderGeneralInfo generalInfo={generalInfo} />
      )}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}

function GeneralInput({ generalInfo, setGeneralInfo }) {
  return (
    <div className="input-row">
      <label>
        First Name :
        <input
          type="text"
          value={generalInfo.firstName}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, firstName: e.target.value })
          }
        />
      </label>

      <label>
        Last Name :
        <input
          type="text"
          value={generalInfo.lastName}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, lastName: e.target.value })
          }
        />
      </label>

      <label>
        Email :
        <input
          type="email"
          value={generalInfo.email}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, email: e.target.value })
          }
        />
      </label>

      <label>
        Phone :
        <input
          type="tel"
          value={generalInfo.phone}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, phone: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function RenderGeneralInfo({ generalInfo }) {
  return (
    <div className="render-general-info">
      <h3>
        {" "}
        Name : {generalInfo.firstName} {generalInfo.lastName}{" "}
      </h3>
      <h3>Email : {generalInfo.email} </h3>
      <h3>Phone : {generalInfo.phone} </h3>
    </div>
  );
}
