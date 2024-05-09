import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-32 py-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-12'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, modi. Eius aut sint, aliquid error reiciendis excepturi quas pariatur, sed molestiae repudiandae minus hic deleniti.</p>

                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, modi. Eius aut sint, aliquid error reiciendis excepturi quas pariatur, sed molestiae repudiandae minus hic deleniti.</p>

                    <button className="btn btn-primary">GET MORE INFO</button>
                </div>
            </div>
        </div>
    );
};

export default About;