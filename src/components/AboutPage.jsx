import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div className="about-container">
        <h1>
          <span style={{ backgroundColor: "yellow" }}>Fragrance World</span>
        </h1>
        <section className="para1">
          <br></br>
          <h2>Discover the Latest Fragrances</h2>
          <p>
            At{" "}
            <span style={{ backgroundColor: "yellow" }}>Fragrance World</span>,
            we pride ourselves on offering the latest and most exclusive
            fragrances on the market. Our dedicated team scours the globe to
            bring you the most captivating scents that resonate with elegance
            and sophistication.
          </p>
        </section>
        <br></br>
        <section className="para2">
          <h2>Personalized Recommendations</h2>
          <p>
            Finding the perfect fragrance can be a journey, and we're here to
            guide you every step of the way. Whether you're searching for a
            signature scent or exploring new olfactory territories, our expert
            recommendations cater to your unique preferences and style.
          </p>
        </section>
        <br></br>
        <section className="para3">
          <h2>Our Commitment</h2>
          <p>
            Quality, authenticity, and customer satisfaction are at the heart of
            our ethos. We collaborate with renowned perfumers and brands to
            ensure that every fragrance you discover on our platform is genuine
            and exceptional.
          </p>
        </section>
        <br></br>
        <section className="para4">
          <h2>Join Our Fragrance Community</h2>
          <p>
            Become a part of our vibrant community of fragrance enthusiasts.
            Stay updated with the latest trends, participate in exclusive
            events, and immerse yourself in the captivating world of scents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
