let inputNumber = 1;

const renderInputField = (label) => {
  const inputId = `input$(inputNumber)`;
  inputNumber++;
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input type="text" name={label} id={inputId} />
    </>
  );
};
export default renderInputField;
