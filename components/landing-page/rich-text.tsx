import styled from "styled-components";
import { media } from "@/lib/media";

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: "L";
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(22, 115, 255);
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(255, 255, 255);
  }

  th,
  td {
    border: 1px solid rgb(255, 255, 255);
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: rgb(255, 255, 255);
  }

  ${media("<=desktop")} {
    font-size: 1.5rem;
  }
`;

export default RichText;
