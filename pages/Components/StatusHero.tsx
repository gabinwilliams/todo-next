import React from "react";

type Props = {};

const StatusHero = (props: Props) => {
    return (
        <div className="flex justify-center my-5">
            <div className="flex justify-around items-center border border-amber-100 bg-black-500  lg:w-1/3 w-[75%] px-2 py-3 rounded-2xl">
                <div>
                    <h3 className=" text-amber-100 font-serif font-extrabold text-lg">
                        Todo Done
                    </h3>
                    <h5 className=" text-amber-50 font-light text-sm">
                        Keep it up
                    </h5>
                </div>
                <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                        <span className="font-bold">1/2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusHero;
