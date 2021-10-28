import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../PatientReducer/PatientReducer';

const ManagePatient = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState)
    const nameRef = useRef();
    const handleSubmit = (event) => {

        dispatch({
            type: "ADD_PATIENT",
            name: nameRef.current.value,
            id: state.patient.length + 1
        })

        console.log(nameRef.current.value)
        event.preventDefault();
        nameRef.current.value = '';
    }

    return (
        <div>
            <h1>Manage Patient: {state.patient.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patient.map(pd => <li 
                    key={pd.id}
                    onClick={()=> dispatch({type: 'REMOVE_PATIENT' , id: pd.id})}
                    >{pd.name}</li>
                )
            }
        </div>
    );
};

export default ManagePatient;