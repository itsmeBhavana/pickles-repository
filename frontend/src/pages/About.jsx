import React from "react";
import "./About.css";

const About = () => {
  return (
    <section class="about-section" id="about">
      <div class="about-container">
        <h2 class="about-title">About Us</h2>
        <p class="about-intro">
          Welcome to <strong>Momade Pickles</strong>, Where Tradition Meets
          Taste!
        </p>
        <div class="about-content">
          <p>
            At <strong>Mom Made Pickles</strong>, we're not just selling
            pickles; we're sharing a legacy of love, tradition, and authentic
            flavors crafted with care. Born from generations of secret family
            recipes, our pickles carry the rich essence of homemade goodness
            that you've been craving.
          </p>
          <ul class="about-highlights">
            <li>
              <strong>Authentic Recipes:</strong> Carefully curated from
              traditional Indian households.
            </li>
            <li>
              <strong>Fresh Ingredients:</strong> Only the best, locally-sourced
              produce makes it into our jars.
            </li>
            <li>
              <strong>No Compromises:</strong> 100% preservative-free and
              natural.
            </li>
          </ul>
          <p>
            Ready to taste tradition? Join our family and savor the goodness of
            homemade pickles delivered right to your doorstep. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
