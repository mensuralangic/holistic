
function HomeQuote() {

    const image = ['https://img.freepik.com/premium-photo/female-doctor-with-glasses-stethoscope-her-neck_662214-709584.jpg?w=360'];
    return (
        <>
        <div className="grid col">
                <img className='size-full md:size-auto' src={image[0]} />
                <p>
                    "We must move away from an overdependence on pharmaceutical 'quick fixes' and adopt a variety of methods to promote health. It's essential to encourage well-being, empower self-care for chronic conditions, and support the mental and physical health of healthcare professionals. Most importantly, we need to focus on lasting and effective solutions for the millions who require more than what traditional biomedicine can provide."
                </p>
                <div className="font-bold italic">Dr. Catherine Wells</div>
                <div className="flex gap-2">
                    <button>click me</button>
                    <button>click me</button>
                </div>
            </div>
            <div className="grid col">
                <img className='size-full md:size-auto' src={image[0]} />
                <p>
                    "We must move away from an overdependence on pharmaceutical 'quick fixes' and adopt a variety of methods to promote health. It's essential to encourage well-being, empower self-care for chronic conditions, and support the mental and physical health of healthcare professionals. Most importantly, we need to focus on lasting and effective solutions for the millions who require more than what traditional biomedicine can provide."
                </p>
                <div className="font-bold italic">Dr. Catherine Wells</div>
            </div>
        </>
    );
}

export default HomeQuote;
