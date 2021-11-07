import styled, { keyframes } from "styled-components";

export const UserListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    height: 80vh;
    width: 90%;
    overflow: scroll;
`;
export const UserRow = styled.div`
    display: flex;
    flex-direction: row;
    padding-y: 0.5rem;
    border-bottom: 0.0625rem solid black;
`;
export const UserAvatarContainer = styled.div`
    padding: 0.5rem;
    justify-content: center;
    display: flex;
    flex: 2;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
`;
export const UserNameConatiner = styled.div`
    padding: 0.5rem;
    display: flex;
    flex: 10;
    word-wrap: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1rem;
`;
export const SkeletonLoading = keyframes`
    0% { background-color: hsl(200, 20%, 70%);}
    100% { background-color: hsl(200, 20%, 95%);}
`;

export const SkeletonImage = styled.div`
    opacity: 0.7;
    animation: ${SkeletonLoading} 1s linear infinite alternate;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
`;

export const SkeletonText = styled.div`
    opacity: 0.7;
    animation: ${SkeletonLoading} 1s linear infinite alternate;
    width: 10rem;
    height: 0.625rem;
    margin: 0.625rem;
    border-radius: 0.125rem;
`;
