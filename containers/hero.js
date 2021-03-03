import React from "react";
import { Hero } from "../components/";

export function HeroContainer({ children }) {
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>Natural Beauty Enhanced</Hero.H1>
          <Hero.SubHeading>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Hero.SubHeading>
        </Hero.TextWrapper>
      </Hero.Wrapper>
      <Hero.Showcase>
        <Hero.Card>
          <h2>Procedures</h2>
          <p>
            Click below to view all our available procedures, surgical, and
            non-surgical, including cosmetic and reconstructive.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
        <Hero.Card style={{ backgroundColor: "#9c526a" }}>
          <h2>Meet Dr Lutch</h2>
          <p>
            Click read more below to see more about Dr Lutch, her education,
            experience and passion.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
        <Hero.Card>
          <h2>Opening Hours</h2>
          <p>
            Click below to view all our available treatments, surgical, and
            non-surgical, including cosmetic and reconstructive.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
      </Hero.Showcase>
    </Hero>
  );
}
