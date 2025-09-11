import React, {
  createContext,
  forwardRef,
  use,
  useId,
  useMemo,
  useState,
} from "react";

const RadioButtonContext = createContext(null);

const RadioButtonContextProvider = ({ children, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const value = useMemo(
    () => ({ selectedOption, setSelectedOption }),
    [selectedOption]
  );

  return <RadioButtonContext value={value}>{children}</RadioButtonContext>;
};

function RadioButtonGroup({ children, defaultValue }) {
  return (
    <RadioButtonContextProvider defaultValue={defaultValue}>
      {children}
    </RadioButtonContextProvider>
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
