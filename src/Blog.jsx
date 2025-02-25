import { blog } from "./data.js"

function BlogMenu({ img, title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg max-w-xs mx-auto">
            <img src={img} alt="" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl text-emerald-600 font-bold mt-4 text-center">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>

    )
}

function Blog() {
    return (
        <div className="flex justify-center items-center h-screen">
            <ul className="flex space-x-4">
                <BlogMenu {...blog[0]} />
                <BlogMenu {...blog[1]} />
                <BlogMenu {...blog[2]} />
                <BlogMenu {...blog[3]} />
            </ul>
        </div>
    )

}

export default Blog;
