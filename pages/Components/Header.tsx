import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="bg-gray-300 flex px-3 py-5 justify-between rounded-sm">
            <h2>ChompChomp</h2>
            <div>logout</div>
        </div>
    );
};

export default Header;
