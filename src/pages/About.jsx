import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About ()
{
    const imageBakir = "https://media.licdn.com/dms/image/D4E03AQECv5AIHJVbnA/profile-displayphoto-shrink_400_400/0/1696838133870?e=1715817600&v=beta&t=B4JWE244XdJScOxuPb2kqmJyZTcfF5EaWSZUClzDhjs";
    const imageMarius = "https://media.licdn.com/dms/image/C4D03AQEOM4nWrlcOZw/profile-displayphoto-shrink_400_400/0/1605082377095?e=1715817600&v=beta&t=Rl62rNSdMAG_HNStxLNoUjt16Kzn09_CyGGi3DKqPUU";

    return (
        <div>
            <Navbar />
            <div className="flex w-full mt-5 mb-5">
    <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-[5rem]">
        <img src={imageBakir} alt="Description of the image" className=""/>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </div>
    <div className="divider divider-horizontal"></div>
    <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-[5rem]">
        <img src={imageBakir} alt="Description of the image" className=""/>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>

            <Footer />
        </div>
    );
}