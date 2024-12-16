import React from 'react';

const UserDetail = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-lg mt-10">
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-purple-600 font-bold">All Users</h1>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-purple-300 text-purple-500">
                    <thead>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-purple-300 text-slate-700 bg-slate-200 font-bold">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-purple-300 text-slate-700 bg-slate-200 font-bold">User Name</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-purple-300 text-slate-700 bg-slate-200 font-bold">Edit</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-purple-300 text-slate-700 bg-slate-200 font-bold">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-purple-600">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-purple-300 text-slate-500">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-purple-300 text-slate-500 first-letter:uppercase">
                                {'John Doe'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-purple-300 text-green-500 cursor-pointer">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-purple-300 text-red-500 cursor-pointer">
                                Delete
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDetail;
