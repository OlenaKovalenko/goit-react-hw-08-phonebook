import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(4)};
`;

export const UserName = styled.p`
    font-style: italic;
    font-size: 16px;
    font-weight: 700;
    color: ${p => p.theme.colors.black};
`;

export const BtnLogOut = styled.button`
    background-color: ${p => p.theme.colors.lightGrey};
    padding: ${p => p.theme.spacing(1)};
    color:${p => p.theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    border-radius: ${p => p.theme.radii.md};
    border: 1px solid ${p => p.theme.colors.black};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: ${p => p.theme.colors.grey};
        color: ${p=>p.theme.colors.white};
    }
`;

