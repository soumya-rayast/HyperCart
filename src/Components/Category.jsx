import { useNavigate } from "react-router-dom";

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home',
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books',
    },
];

const Category = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-16">
            {/* Main Container */}
            <div className="flex flex-col">
                <div className="flex overflow-x-scroll hide-scroll-bar lg:justify-center space-x-5 px-3">
                    {/* Category Items */}
                    {category.map((item, index) => (
                        <div
                            key={index}
                            onClick={()=>navigate(`/category/${item.name}`)}
                            className="flex flex-col items-center space-y-2 transition-all hover:scale-105"
                        >
                            {/* Image Container */}
                            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-black  p-1 shadow-lg hover:shadow-2xl">
                                <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-3/4 h-3/4"
                                    />
                                </div>
                            </div>
                            {/* Category Name */}
                            <h1 className="text-sm lg:text-lg text-center font-medium capitalize text-gray-700">
                                {item.name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide Scroll Bar Styles */}
            <style dangerouslySetInnerHTML={{ __html: `.hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }` }} />
        </div>
    );
};

export default Category;
