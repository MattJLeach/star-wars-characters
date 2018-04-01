import React from 'react';
import './results.scss';

const results = (props) => {
  let peopleTable = (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Hair Colour</th>
          <th>Eye Colour</th>
          <th>Skin Colour</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(person => {
          return (
            <tr key={person.url}>
              <td>{person.name}</td>
              <td>{person.birth_year}</td>
              <td>{person.gender}</td>
              <td>{person.height}</td>
              <td>{person.hair_color}</td>
              <td>{person.eye_color}</td>
              <td>{person.skin_color}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <div>
      {peopleTable}
    </div>
  )
}

export default results;