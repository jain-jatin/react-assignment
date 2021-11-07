import React from "react";
import {
    UserRow,
    UserAvatarContainer,
    UserNameConatiner,
    Avatar,
    SkeletonImage,
} from "./style";
import { SkeletonText } from "./style";
type UserProps = {
    img: string;
    name: string;
    loading: boolean;
};
const User: React.FC<UserProps> = ({ loading, img, name }: UserProps) => {
    return (
        <UserRow>
            <UserAvatarContainer className="col-md-2 col-sm-2 col-xs-2">
                {loading ? <SkeletonImage /> : <Avatar src={img} />}
            </UserAvatarContainer>
            <UserNameConatiner className=" col-md-10 col-sm-10 col-xs-10">
                {loading ? <SkeletonText /> : name}
            </UserNameConatiner>
        </UserRow>
    );
};

export default User;
