import React from "react";

const Welcome = () => {
  return (
    <section className="WelcomeSection">
      <section className="WelcomeText">
        <h2>Welcome</h2>
        <p>Welcome to our club homepage, here at
          sports club we have all the things you
          want from our club right here online! We
          offer club news, membership sign ups, an
          online store for merchandise, schedules
          for upcoming games as well as ticket
          purchasing.
          

          We hope you enjoy your time browsing
          what we have to offer, we value our fans
          and want to bring you all quality matches
          and content!</p>
      </section>
          <iframe 
            src="https://www.youtube.com/embed/Rwk5PdpTxSU"
            title="adidas | Ready for Sport" frameborder="0"
            allow="accelerometer; autoplay;"
            allowfullscreen></iframe>
    </section>
  )
}

export default Welcome;