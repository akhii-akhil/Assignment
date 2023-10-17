import React from 'react'
import './table.css'
import dum from './data.json'
function Tabl() {
    
  return (
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
        </tr>
          
              {
              dum.map((i) => {
                  return (
                      <>
                          <tr>
                  <td>{i.Id}</td>
                      <td>{i.Medals}</td>
                              <td>{i.Year}</td>
                              </tr>
                      </>
                  )
                  })
              }
    </table>
  )
}

export default Tabl