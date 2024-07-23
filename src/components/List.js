import React, { useState } from "react";

function List({ actor }) {
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [actorName, setActorName] = useState("");

    function addItem() {
        if (name.trim() !== "" && actorName.trim() !== "") {
            const item = { name: name, favoriteActor: actorName };
            setList((previousState) => [...previousState, item]);
            setName("");
            setActorName("");
        }
    }

    return (
        <div className="container mx-auto p-6">
            <div className="bg-pink-50 w-full md:w-2/3 lg:w-1/2 rounded-2xl shadow-lg p-6 mx-auto my-10">
                <h1 className="text-3xl font-bold mb-6 text-center">Favorite Actor List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="mb-4 p-3 border rounded w-full"
                    />
                    <input
                        type="text"
                        value={actorName}
                        onChange={(e) => setActorName(e.target.value)}
                        placeholder="Favorite Actor"
                        className="mb-4 p-3 border rounded w-full"
                    />
                    <button
                        onClick={addItem}
                        className="bg-indigo-500 text-white rounded px-4 py-2 w-full hover:bg-indigo-600 transition"
                    >
                        Add Item
                    </button>
                </div>

                {list.length > 0 && (
                    <div className="overflow-x-auto mt-6">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-indigo-500 text-white">
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Favorite Actor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((el, index) => (
                                    <tr key={index} className="odd:bg-gray-100 even:bg-white">
                                        <td className="p-3 border-b border-gray-200">{el.name}</td>
                                        <td className="p-3 border-b border-gray-200">
                                            {actor}
                                            {el.favoriteActor}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default List;
