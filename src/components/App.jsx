import { useState } from "react";
import "../styles/App.css";
import GeneralSection from "./GeneralSection.jsx";
import EducationSection from "./EducationSection.jsx";
import ExperienceSection from "./Experience.jsx";
import ButtonedFunction from "./Button.jsx";

export default function App() {
  return (
    <div>
      <h1
        style={{
          borderBottom: "1px solid white",
          display: "block",
          margin: "20px 0",
          paddingBottom: "10px",
        }}
      >
        
        CV Application
      </h1>

      <div className="App">
        <h1
          style={{
            borderBottom: "1px solid white",
            display: "block",
            margin: "20px 0",
            paddingBottom: "10px",
          }}
        >
          General Information
        </h1>
        <GeneralSection />

        <h1
          style={{
            borderBottom: "1px solid white",
            display: "block",
            margin: "20px 0",
            paddingBottom: "10px",
          }}
        >
          {" "}
          Education{" "}
        </h1>
        <ButtonedFunction component={EducationSection} title={"Education"} />
        <h1
          style={{
            borderBottom: "1px solid white",
            display: "block",
            margin: "20px 0",
            paddingBottom: "10px",
          }}
        >
          {" "}
          Experience{" "}
        </h1>
        <ButtonedFunction component={ExperienceSection} title={"Experience"} />
      </div>
    </div>
  );
}
