"use strict";

function Person({name, age, hobbies}) {

  return (
    <div>
      <h2>Learn some information about this person.</h2>
      <Button />
      <h3>{age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
      <h3>{name.length > 8 ? name.substring(0, 6) : name}</h3>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  )
}