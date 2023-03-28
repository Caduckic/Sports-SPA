import React from "react";

const SportsWidget = () => {
  return (
    <section id="live_sports">
      <iframe scrolling="no" id="live_sports_frame" src="http://www.goals365.com/feed/soccer/index.php" title="live sports data"></iframe>
    </section>
  )
}

export default SportsWidget;