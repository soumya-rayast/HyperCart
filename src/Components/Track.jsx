const Track = () => {
    const tracks = [
        {
            id: 1,
            title: "Premium T-Shirts",
            description: "Our T-Shirts are 100% made of cotton.",
            icon: (
                <svg
                    className="text-white w-12 h-12 mb-3 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Premium Hoodies",
            description: "Our hoodies are made for comfort and style.",
            icon: (
                <svg
                    className="text-white w-12 h-12 mb-3 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Exclusive Accessories",
            description: "Explore our range of trendy accessories.",
            icon: (
                <svg
                    className="text-white w-12 h-12 mb-3 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                <div className="flex flex-wrap -m-4 text-center">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className="p-4 md:w-1/3 sm:w-1/2 w-full"
                        >
                            <div className="bg-black hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-white px-6 py-8 rounded-lg">
                                {track.icon}
                                <h2 className="title-font font-bold text-lg">
                                    {track.title}
                                </h2>
                                <p className="leading-relaxed mt-2 text-sm">
                                    {track.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Track;
