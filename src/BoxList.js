import React, { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from "./Box";
import { v4 as uuid} from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (width, height, backgroundColor) => {
        const id = uuid();
        setBoxes(boxes => {
            const boxesCopy = [...boxes, {width, height, backgroundColor, id}];
            return boxesCopy;
        })
    }

    const remove = (id) => {
        setBoxes(boxes =>  boxes.filter(box => box.id !== id));
    }

    const boxlist = boxes.map(({backgroundColor, width, height, id}) => {
        return <Box 
            key={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            remove={() => remove(id)}
        />
    });
  
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxlist}
        </div>
    )
}

export default BoxList;