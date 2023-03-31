import React, { FC } from 'react';

type Props = {
    children: JSX.Element;
    // children?: JSX.Element | JSX.Element[];
};

const Header: React.FC<Props> = ({ children }) => {
    return <header>{children}</header>;
};

export default Header;
