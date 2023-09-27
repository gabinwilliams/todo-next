import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className=" bg-black flex px-3 py-5 justify-between rounded-sm">
            <h2 className=" text-amber-100">
                Chomp<span className=" text-orange-600">Chomp</span>
            </h2>
            <div className=" text-amber-100">logout</div>
        </div>
    );
};

export default Header;
