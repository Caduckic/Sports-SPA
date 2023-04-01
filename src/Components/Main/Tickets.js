import React from "react";

// used for mapping into a table
const matches = [
  {
    otherTeam: "other4",
    date: "24/03/2023",
    location: "Marvel Stadium",
    bookLink: "#"
  },
  {
    otherTeam: "other5",
    date: "14/05/2023",
    location: "Allianz Stadium",
    bookLink: "#"
  },
  {
    otherTeam: "other6",
    date: "08/07/2023",
    location: "Marvel Stadium",
    bookLink: "#"
  },
]

// used to make the map function in Tickets more readable and clean
const TicketRow = ({ match }) => {
  return (
    <tr>
      <td>{`Club VS ${match.otherTeam}`}</td>
      <td>{match.date}</td>
      <td>{match.location}</td>
      <td><a href={match.bookLink}>Buy Tickets</a></td>
    </tr>
  )
}

// used to display upcoming games and with booking links (not functional)

const Tickets = () => {
  return (
    <section className="TicketSection" id="tickets">
      <section className="TextContainer">
        <h3>Schedule</h3>
        <table className="ScheduleTable">
          <thead>
            <tr>
                <th>Teams</th>
                <th>Date</th>
                <th>Location</th>
                <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => <TicketRow key={index} match={match} />)}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default Tickets;