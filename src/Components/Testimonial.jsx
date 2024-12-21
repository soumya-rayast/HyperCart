const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* Main Section */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className="text-center text-4xl font-bold text-black mb-2">
                        Testimonials
                    </h1>
                    {/* Subtitle */}
                    <h2 className="text-center text-xl font-semibold mb-10 text-gray-700">
                        What our <span className="text-gray-500">customers</span> are saying
                    </h2>

                    {/* Testimonial Cards */}
                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full bg-black text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-4 border-white"
                                    src="https://ecommerce-sk.vercel.app/img/kamal.png"
                                />
                                <p className="leading-relaxed mb-4">
                                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="text-lg font-medium title-font tracking-wider uppercase">
                                    Kamal Nayan Upadhyay
                                </h2>
                                <p className="text-gray-200">Senior Product Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full bg-black gradient-to-r from-purple-500 to-pink-50black  text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-4 border-white"
                                    src="https://www.devknus.com/img/gawri.png"
                                />
                                <p className="leading-relaxed mb-4">
                                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="text-lg font-medium title-font tracking-wider uppercase">
                                    S Mishra
                                </h2>
                                <p className="text-gray-200">UI Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full bg-black gradient-to-r from-purple-500 to-pink-50black  text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-4 border-white"
                                    src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa"
                                />
                                <p className="leading-relaxed mb-4">
                                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="text-lg font-medium title-font tracking-wider uppercase">
                                    XYZ
                                </h2>
                                <p className="text-gray-200">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
