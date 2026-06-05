import { useState } from "react";

export default function EducationSection({ onDelete }) {
  const [educationalInfo, setEducationalInfo] = useState({
    UniversityName: "Harvard University",
    Degree: "Bachelor of Science",
    CGPA: "3.8",
    GraduationYear: "2022",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="education-section">
      {isEditing ? (
        <EducationInput
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
        />
      ) : (
        <RenderEducationInfo educationalInfo={educationalInfo} />
      )}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      <button
        onClick={onDelete}
        style={{
          marginLeft: "10px",
          backgroundColor: "#ff4d4d",
          color: "white",
        }}
      >
        {"Delete"}
      </button>
    </div>
  );
}

function EducationInput({ educationalInfo, setEducationalInfo }) {
  return (
    <div className="input-row">
      <label>
        University Name :
        <input
          type="text"
          value={educationalInfo.UniversityName}
          onChange={(e) =>
            setEducationalInfo({
              ...educationalInfo,
              UniversityName: e.target.value,
            })
          }
        />
      </label>

      <label>
        Degree :
        <input
          type="text"
          value={educationalInfo.Degree}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, Degree: e.target.value })
          }
        />
      </label>

      <label>
        CGPA :
        <input
          type="text"
          value={educationalInfo.CGPA}
          onChange={(e) =>
            setEducationalInfo({ ...educationalInfo, CGPA: e.target.value })
          }
        />
      </label>

      <label>
        Graduation Year :
        <input
          type="text"
          value={educationalInfo.GraduationYear}
          onChange={(e) =>
            setEducationalInfo({
              ...educationalInfo,
              GraduationYear: e.target.value,
            })
          }
        />
      </label>
    </div>
  );
}

function RenderEducationInfo({ educationalInfo }) {
  return (
    <div className="render-education-info">
      <h3>University Name : {educationalInfo.UniversityName} </h3>
      <h3>Degree : {educationalInfo.Degree} </h3>
      <h3>CGPA : {educationalInfo.CGPA} </h3>
      <h3>Graduation Year : {educationalInfo.GraduationYear} </h3>
    </div>
  );
}
