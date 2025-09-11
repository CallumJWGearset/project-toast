import React, { createContext, forwardRef, use, useId, useMemo } from "react";

const RadioButtonContext = createContext(null);

function RadioButtonGroup({ children, value, onChange }) {
  const contextValue = useMemo(
    () => ({
      selectedOption: value,
      setSelectedOption: onChange,
    }),
    [onChange, value]
  );

  return (
    <RadioButtonContext value={contextValue}>{children}</RadioButtonContext>
  );
}

export const RadioButton = forwardRef(({ children, value, ...rest }, ref) => {
  const { selectedOption, setSelectedOption } = use(RadioButtonContext);
  const id = useId();

  return (
    <label htmlFor={id}>
      <input
        id={id}
        ref={ref}
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={() => setSelectedOption(value)}
        {...rest}
      />
      {children}
    </label>
  );
});

export default RadioButtonGroup;
