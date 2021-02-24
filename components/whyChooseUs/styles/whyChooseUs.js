import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 300px;
  background-color: var(--color-white);
  margin-top: 70px;
  color: var(--color-black);
  padding: 60px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 80px;
  font-size: 30px;
`;

export const Content = styled.div``;

export const Grid = styled.div`
  /* display: grid; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; */
  grid-gap: 20px;
`;

export const GridItem = styled.div`
  padding: 10px;
`;

export const GridItemInner = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  color: var(--color-pink);
`;
export const Info = styled.div`
  margin-left: 10px;
`;

export const Card = styled.div`
  display: flex;
`;
