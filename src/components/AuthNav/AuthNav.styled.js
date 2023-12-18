import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: ${p => p.theme.spacing(3)};
    font-size: 18px;
    font-weight: 700;
    color: ${p => p.theme.colors.black};

    &.active {
        color: ${p=> p.theme.colors.orange};
    }
`;


