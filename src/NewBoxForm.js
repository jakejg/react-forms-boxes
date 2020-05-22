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
        // setFormData(INITIAL_STATE);
    }

    return (
        <form>
            <label htmlFor="width">Width</label>
            <input type="text" 
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange} />
            <label htmlFor="heigth">height</label>
            <input type="text" 
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange} />
            <label htmlFor="backgroundColor">backgroundColor</label>
            <input type="text" 
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange} />
            <button onClick={handleSubmit}>Create a Box</button>
        </form>
    )
}

export default NewBoxForm;