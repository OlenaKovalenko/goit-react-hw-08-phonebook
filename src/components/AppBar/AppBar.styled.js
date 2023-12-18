import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${p=> p.theme.spacing(5)};
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    border-bottom: 1.5px solid ${p => p.theme.colors.black};
`;