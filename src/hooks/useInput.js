import {useState} from "react";
import {useValidait} from "./useValidait";

export const useInput = (initialValue, validatations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidait(value, validatations)

    const onChange = (evt) => {
        setValue(evt.target.value)
    }

    const onBlur = (evt) => {
        setDirty(true)
    } 

    return {
        value,
        onChange,
        onBlur,
        isDirty,
      ...valid
}
}