import styled from "styled-components";

export const GridContainer = styled.table`
    background: #fff;
    border-spacing: 0;
    border-collapse: collapse;
    box-shadow: 0px 0px 10px #fff;
`
export const GridTbody = styled.tbody``

export const GridTr = styled.tr``

export const GridTd = styled.td<{ state: number }>`
    background: ${({ state }) => state ? '#000' : '#fff'};
    width: 12px;
    height: 12px;
    border: 1px solid #040e20;
` 