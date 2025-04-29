import React from 'react'

interface SelectProps{
    options: (string | number)[];
    currentState: number | string;
    setState: React.Dispatch<React.SetStateAction<string | number>>;
}
function Select({ options, setState, currentState} : SelectProps) {
  return (
    <div className='select-cont'>
        <div className='select-selected'>{currentState}</div>
        <div className='select-options-cont'>
            {
                options.map((option, index) => {
                    return <div key={index} className='select-option' onClick={() => setState(option)}>{option}</div>
                })
            }
        </div>
    </div>
  )
}

export default Select