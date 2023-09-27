import React from "react";

type Props = {};

const AddTaskInput = (props: Props) => {
    return (
        <div className="flex justify-center my-5">
            <div className="flex justify-between lg:w-1/3 w-[75%] px-2 py-3">
                <input
                    className="bg-gray-500 rounded-lg px-2 py-3 lg:w-[75%]"
                    type="text"
                    placeholder="Write your next task"
                />
                <button className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                    <span className="font-bold text-lg">+</span>
                </button>
            </div>
        </div>
    );
};

export default AddTaskInput;
