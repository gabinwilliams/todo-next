import React from "react";

type Props = {};

const StatusHero = (props: Props) => {
    return (
        <div className="flex justify-center py-5">
            <div className="border bg-black-500 w-1/3 px-2 py-3 rounded-2xl">
                circle container
                <div>
                    <h3>Todo Done</h3>
                    <h5>Keep it up</h5>
                </div>
                <div>
                    <div>circle here</div>
                </div>
            </div>
        </div>
    );
};

export default StatusHero;
