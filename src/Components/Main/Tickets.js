import React from "react";

const Tickets = () => {
  return (
    <section id="tickets">
      <section className="text_container">
        <h3>Schedule</h3>
        <table id="schedule">
          <tr>
              <th>Teams</th>
              <th>Date</th>
              <th>Location</th>
              <th>Tickets</th>
          </tr>
          <tr>
              <td>Club VS other4</td>
              <td>24/03/2023</td>
              <td>Marvel Stadium</td>
              <td><a href="#" onclick="bookTickets('other4');">Buy Tickets</a></td>
          </tr>
          <tr>
              <td>Club VS other5</td>
              <td>14/05/2023</td>
              <td>Allianz Stadium</td>
              <td><a href="#" onclick="bookTickets('other5');">Buy Tickets</a></td>
          </tr>
          <tr>
              <td>Club VS other6</td>
              <td>08/07/2023</td>
              <td>Marvel Stadium</td>
              <td><a href="#" onclick="bookTickets('other6');">Buy Tickets</a></td>
          </tr>
        </table>
      </section>
    </section>
  )
}

export default Tickets;