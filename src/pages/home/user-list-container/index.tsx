import React, { useCallback, useRef, useState } from "react";
import User from "./user";
import { UserListContainer } from "./style";
import { useUserList } from "../hooks/useUserList";

const UserList: React.FC = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    const { users, hasMore, loading, error, setLoading } =
        useUserList(pageNumber);
    const observer = useRef<any>(null);
    const lastUserRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setLoading(true);
                    setTimeout(
                        () =>
                            setPageNumber(
                                (prevPageNumber) => prevPageNumber + 1
                            ),
                        1000
                    );
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <UserListContainer className="conatiner-fluid">
            {users.map((user: any, index: number) => {
                if (users.length === index + 1) {
                    return (
                        <div ref={lastUserRef}>
                            <User
                                key={index}
                                img={user.img}
                                name={user.userName}
                                loading={loading}
                            />
                        </div>
                    );
                } else {
                    return (
                        <User
                            key={index}
                            img={user.img}
                            name={user.userName}
                            loading={loading}
                        />
                    );
                }
            })}
            <div>{error && "Error"}</div>
        </UserListContainer>
    );
};

export default UserList;
