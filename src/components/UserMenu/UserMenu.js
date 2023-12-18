import { useDispatch } from "react-redux";
import { useAuth } from "hooks";
import { logOut } from "redux/auth/operations";
import { BtnLogOut, UserName, Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Wrapper>
            <UserName>Welcome, {user.name}</UserName>
            <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
                Logout
            </BtnLogOut>
        </Wrapper>
    );
};