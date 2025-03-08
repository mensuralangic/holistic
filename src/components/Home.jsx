import HomeQuote from "./HomeQuote";

const Home = () => {

    return (
        <div className=' flex gap-20 px-40 pt-14 pb-16 leading-loose text-slate-600'>
            <HomeQuote/>
            <div>
                <h1 className="text-5xl py-5">What is holistic healthcare?</h1>
                <p>
                    A holistic view of health emphasizes the interconnectedness of the mind, body, and spirit in achieving overall well-being. This approach acknowledges that physical health is not isolated but deeply influenced by emotional, mental, and social factors. When people focus solely on physical symptoms or conditions, they may overlook other critical aspects of their health, leading to incomplete or short-term solutions. A holistic approach encourages individuals to address all facets of health, recognizing that imbalances in one area can impact others.

                    For example, stress or emotional strain can manifest as physical ailments, while neglecting mental health can affect productivity, relationships, and overall life satisfaction.
                </p>
                <h2 className="text-3xl py-5">A definition of holistic</h2>
                <p>
                    Additionally, the holistic view emphasizes self-care, mindfulness, and the importance of a balanced lifestyle, empowering individuals to take responsibility for their health. This approach encourages a more sustainable and fulfilling way of living, promoting long-term health and vitality rather than just managing disease or symptoms. Ultimately, it nurtures a deeper connection to oneself and the world, supporting a more harmonious and vibrant life.
                </p>

                <h2 className='italic text-center text-xl py-3 px-5 text-emerald-600 border-l-4 border-emerald-600 mx-20 my-5 '>
                    nothing can be fully understood unless one sees the whole system of which it is part – and the whole is always more than the sum of its parts.
                </h2>

                <p>
                    By considering the whole person, holistic health promotes a comprehensive understanding of well-being, fostering better outcomes. It also encourages preventative care, such as proper nutrition, exercise, stress management, and cultivating positive relationships, which can reduce the likelihood of chronic illnesses.
                </p>
            </div>
        </div>
    );
}

export default Home;