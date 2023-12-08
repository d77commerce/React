import React, { useState } from 'react';

export default function ThreeButtonsWithText() {
  const [buttonText, setButtonText] = useState('Click a button');

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButtonText(<div><h1>Button 1</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, optio consequatur! Perspiciatis cumque suscipit incidunt rem sit maiores? Asperiores nostrum aut animi? Consectetur amet impedit delectus voluptatem adipisci ducimus iure!</p></div>);
    } else if (buttonNumber === 2) {
      setButtonText(<div><h1>Button 2</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptates earum harum, dolorum aliquid vero eaque sapiente in voluptatum nostrum veniam eius sint! Ad repellat pariatur earum minus animi iusto.</p></div>);
    } else {
      setButtonText(<div><h1>Button 3</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sint eos est quo alias illum nulla fugit eius beatae voluptatem voluptatibus libero totam, soluta eaque eligendi provident necessitatibus pariatur odio!</p></div>);
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button 1</button>
      <button onClick={() => handleButtonClick(2)}>Button 2</button>
      <button onClick={() => handleButtonClick(3)}>Button 3</button>
      <div className='semitrans'>
      {buttonText}
      </div>
    </div>
  );
}