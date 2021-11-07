import React from "react";
import { useHistory } from "react-router-dom";
import UserList from "./user-list-container";
import { useAuthorization } from "../../Application/authorization-context";
import { LogoutButton, HeadingContainer } from "./style";
import {
    HomeContainer,
    HeaderRow,
    ButtonContainer,
    ListContainer,
} from "./style";

const Home: React.FC = () => {
    let history = useHistory();
    const { handleAuthentication } = useAuthorization();
    const handleLogout = () => {
        handleAuthentication(false);
        history.push("./login");
    };
    return (
        <HomeContainer>
            <HeaderRow>
                <HeadingContainer>
                    Home Page
                </HeadingContainer>
                <ButtonContainer>
                    <LogoutButton
                        type="button"
                        className="btn btn-primary"
                        onClick={handleLogout}
                    >
                        Logout
                    </LogoutButton>
                </ButtonContainer>
            </HeaderRow>
            <ListContainer>
                <UserList />
            </ListContainer>
        </HomeContainer>
    );
};

export default Home;
