const Testimonial = () => {
    const testimonialData = [
        {
            image: "https://example.com/img/john.png",
            description:
                "The service provided was exceptional! The team went above and beyond to ensure our satisfaction. Highly recommend for anyone looking for top-notch quality.",
            name: "John Doe",
            title: "Project Manager",
        },
        {
            image: "https://example.com/img/jane.png",
            description:
                "I was impressed with the professionalism and dedication shown by the team. They delivered exactly what we needed, on time and within budget.",
            name: "Jane Smith",
            title: "Marketing Specialist",
        },
        {
            image: "https://example.com/img/alex.png",
            description:
                "Their attention to detail and creative approach made all the difference. We couldn’t be happier with the results!",
            name: "Alex Johnson",
            title: "Creative Director",
        },
    ];


    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className="text-center text-4xl font-bold text-black mb-2">
                        Testimonials
                    </h1>
                    <h2 className="text-center text-xl font-semibold mb-10 text-gray-700">
                        What our <span className="text-gray-500">customers</span> are saying
                    </h2>
                    <div className="flex flex-wrap -m-4">
                        {testimonialData.map((testimonial, index) => (
                            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full bg-black text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-4 border-white"
                                        src={testimonial.image}
                                    />
                                    <p className="leading-relaxed mb-4">
                                        {testimonial.description}
                                    </p>
                                    <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                    <h2 className="text-lg font-medium title-font tracking-wider uppercase">
                                        {testimonial.name}
                                    </h2>
                                    <p className="text-gray-200">{testimonial.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
