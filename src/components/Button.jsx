import { useState } from "react";

export default function ButtonedFunction( {component: Component, title}  ){
    const [ sections , setSections ] = useState([]);


    const addSection = () => {
        const newId = Date.now();
        setSections([...sections , newId ]);
  
    }

  const removeSection = (idToRemove) => {
        setSections(sections.filter(id => id !== idToRemove));
      
    };

    return(
        <div>
            <button onClick={addSection}>
                Add {title}
            </button>

            <div className="sections-list" style={{marginTop: '20px'}}>
                  {sections.map((id) => (
                    <Component key={id} onDelete={() => removeSection(id)} />
                )) }
            </div>
        </div>
    );
}