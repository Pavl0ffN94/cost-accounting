import {useState, useEffect} from 'react';

export const useValidait = (value, validatations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [ inputValid, setInputValid] = useState(false);

    useEffect(()=> {
        for (const validatation in validatations) {

            switch (validatation) {
                case 'minLength':
                    if(value.length < validatations[validatation]) {
                        setMinLengthError(true)
                    } else{ setMinLengthError(false)}
                break;

                case 'isEmpty':
                if(value) {
                    setEmpty(false)
                 } else {  setEmpty(true);}
                break;

                case 'isEmail':
                const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                re.test(String(value).toLowerCase())
                ? setEmailError(false) 
                : setEmailError(true);
                break;

                default: break;
            }
        }
    }, [value, validatations])

    useEffect(()=>{
 if(isEmpty || minLengthError || emailError){
    setInputValid(false)
 } else{
    setInputValid(true)
 }
    }, [isEmpty, minLengthError,  emailError])

return {
    isEmpty,
    minLengthError,
    emailError,
    inputValid,
}
}

