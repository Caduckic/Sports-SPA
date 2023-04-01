import React, { useState } from "react";
import axios from "axios";

/*
  I thought I'd try something more involved here, so I've replaced the iframe widget with my own table data collected from
  an external api, my API key is exposed currently but this does make it easier for you to see what I've done so I'll leave it.
  Also you might notice on my package.json my axios version is pretty out of date, this is due to a weird error I could'nt fix,
  I was unable to import it, this older version works fine however.
*/

// I got a 2 birds with 1 stone here, Third party package & error handling

// Used for before you click "Get Stadiums", probably a better way of doing this but this is quick and easy
const placeholder = [
  {
    city: "...",
    name: "..."
  },
  {
    city: "...",
    name: "..."
  },
  {
    city: "...",
    name: "..."
  },
  {
    city: "...",
    name: "..."
  },
  {
    city: "...",
    name: "..."
  },
]

const FailMessage = () => {
  return(
    <p className="ErrorMessage">The stadium data was unable to be collected</p>
  )
}

// returns a table row for stadium data
const StadiumData = ({ stadium, city }) => {
  return (
    <tr>
      <td>{stadium}</td>
      <td>{city}</td>
    </tr>
  )
}

// now uses axios and "https://www.api-football.com/" is the api I choose to use, please don't press the button too much haha
const SportsWidget = () => {
  const [data, setData] = useState(null)
  const [failed, setFailed] = useState(false)
  const getData = () => {
    // try breaking the url to see the error handling
    axios
    .get("https://api-football-v1.p.rapidapi.com/v3/venues?country=Australia",
      {
        headers: {
          'X-RapidAPI-Key': '0270fd52aemsh82327c96ad516e2p1d027djsn96ce4be8bb75',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      }
    )
    .then((res) => {
      console.log(res.data.response)
      setData(res.data.response)
    }
    )
    .catch(e => {
      console.log(e)
      setFailed(true)
    })
    // btw this catch counts as error handling right?
  }

  /*
    I use a button here instead of useEffect mainly due to how the page will refresh from every change,
    which could be an issue, this api is free but not unlimitedly free
  */
  return (
    <section className="LiveSports" id="live_sports">
      {data === null ? <button className="DataButton" onClick={getData}>Get Stadiums</button> : null}
      {failed ? <FailMessage /> : null}
      <table className="ScheduleTable">
        <thead>
          <tr>
            <th>Stadium</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {
          (data !== null && !failed) ? data.filter((stadium, index) => index < 5).map((stadium, index) => {
              return <StadiumData key={index} stadium={stadium.name} city={stadium.city} />
            })
            : placeholder.map((stadium, index) => <StadiumData key={index} stadium={stadium.name} city={stadium.city}/>)
          }
        </tbody>
      </table>
    </section>
  )
}

export default SportsWidget;
