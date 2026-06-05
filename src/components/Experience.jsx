import { useState } from 'react';


export default  function ExperienceSection({onDelete}){
    const [experienceInfo, setExperienceInfo] = useState({
        Company: "Tech Far",
        Position: "Full Stack Dev",
        Responsibilities: "Fixing Code , Testing...",
        JoinedDate: "2022",
        WorkedTill: "2024",
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () =>{
        setIsEditing(!isEditing);
    }
     

    return(
        <div className="experience-section">
        
            {isEditing ? <ExperienceInput experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} /> : <RenderExperienceInfo experienceInfo={experienceInfo} />}
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={onDelete} style={{ marginLeft: "10px", backgroundColor: "#ff4d4d", color: "white" }}>
                {"Delete"}
            </button>
        </div>
    );
}

function ExperienceInput({ experienceInfo, setExperienceInfo }){

    return(
       <div className="input-row">
            <label>
                Company: 
                <input type="text" value={experienceInfo.Company} onChange={(e) => setExperienceInfo({...experienceInfo, Company: e.target.value})} /> 
            </label>
            
            <label>
                Position: 
                <input type="text" value={experienceInfo.Position} onChange={(e) => setExperienceInfo({...experienceInfo, Position: e.target.value})} /> 
            </label>
             <label>
                Responsibilities: 
                <input type="text" value={experienceInfo.Responsibilities} onChange={(e) => setExperienceInfo({...experienceInfo, Responsibilities: e.target.value})} /> 
            </label>
            
            <label>
                Joined: 
                <input type="text" value={experienceInfo.JoinedDate} onChange={(e) => setExperienceInfo({...experienceInfo, JoinedDate: e.target.value})} /> 
            </label>
            
            <label>
                Till: 
                <input type="text" value={experienceInfo.WorkedTill} onChange={(e) => setExperienceInfo({...experienceInfo, WorkedTill: e.target.value})} /> 
            </label>
        </div>
    );
}

function RenderExperienceInfo({ experienceInfo }) {
    return(
        <div className="render-experience-info" >
            <h3>Company Name : {experienceInfo.Company} </h3>
            <h3>Position Title : {experienceInfo.Position} </h3>
            <h3>Responsibilities : {experienceInfo.Responsibilities} </h3>
            <h3>Joined Date : {experienceInfo.JoinedDate} </h3>
            <h3>Worked Till : {experienceInfo.WorkedTill} </h3>
        </div>
    );
}