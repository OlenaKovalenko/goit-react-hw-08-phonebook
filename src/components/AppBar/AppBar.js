import { useAuth } from "hooks";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};