import React, {useEffect, useState} from "react";

const DashBoard = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "http://localhost:5174/apiV1/jewelries/"
            );
            const newData = await response.json();
            setItem(newData);
        };

        fetchData();
    }, []);
    console.log(item);

    return (
        <div>
            <table className="mx-auto">
                <thead className="bg-black text-white">
                <tr>
                    <th id="name">Jewelry</th>
                    <th id="price">Price</th>
                    <th id="status">Status</th>
                    <th id="action">Action</th>
                </tr>
                </thead>
                {item.map((jewelry) => (
                    <tr>
                        <td className="text-leftr">{jewelry.name}</td>
                        <td className="text-center">{jewelry.price} €</td>
                        <td className="text-center">{jewelry.status}</td>
                        <td className="flex justify-around items-center">
                            <button id="modify">Modify</button>
                            <button id="delete">Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
export default DashBoard;
