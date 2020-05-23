import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(formData => 
            ({...formData, [name]: value}
        ));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {width, height, backgroundColor} = formData;
        addBox(+width, +height, backgroundColor);
        setFormData(INITIAL_STATE);
    }

    const inputs = Object.keys(INITIAL_STATE);

    const inputTags = inputs.map(inputType => (
        <div key={inputType}>
            <label htmlFor={inputType}>{inputType}</label>
            <input type="text" 
                    id={inputType}
                    name={inputType}
                    value={formData[inputType]}
                    onChange={handleChange} />
            <br></br>
        </div>
    ))

    return (
        <form>
            {inputTags}
            <button onClick={handleSubmit}>Create a Box</button>
        </form>
    )
}

export default NewBoxForm;

