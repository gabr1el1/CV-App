import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return (
    <>
      <Input text={text} label="First input" handleChangeText={(text)=>setText(text)}/>
      <Input text={text} label="Second input" handleChangeText={(text)=>setText(text)}/>
    </>
  );
}

function Input({text, label, handleChangeText}) {
  

  function handleChange(e) {
    handleChangeText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}