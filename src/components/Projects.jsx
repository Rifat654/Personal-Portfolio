import { IoArrowBackCircle } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import card1 from "../assets/gaming.jpg";
import card2 from "../assets/show.jpg";

const Projects = () => {
    return (
        <div id="projects" className="py-20">
            <div>
                <h1 className="text-center text-4xl font-light py-16 text-white">Projects Section</h1>
            </div>
            <div>
                <VerticalTimeline className="bg-transparent overflow-hidden" >
                    {/* First Project */}
                    <VerticalTimelineElement
                        className="cursor-pointer overflow-hidden"
                        contentStyle={{ background: "transparent" }}
                        contentArrowStyle={{ borderRight: "7px solid transparent" }}
                        icon={
                            <IoArrowBackCircle className="text-3xl text-white bg-orange-600 w-full h-full rounded-full cursor-pointer hover:text-green-700 hover:bg-white transition-all duration-300" />
                        }
                    >
                        <div className="back">
                            <img src={card1} alt="Project Image" />
                            <a href="https://rifat654.github.io/Gaming-World/">
                                <ImGithub className="text-xl" />
                            </a>
                        </div>
                    </VerticalTimelineElement>

                    {/* Second Project */}
                    <VerticalTimelineElement
                        className="cursor-pointer overflow-hidden"
                        contentStyle={{ background: "transparent" }}
                        contentArrowStyle={{ borderRight: "7px solid transparent" }}
                        icon={
                            <FaCircleArrowRight className="text-3xl text-white bg-orange-600 w-full h-full rounded-full cursor-pointer hover:text-green-700 hover:bg-white transition-all duration-300" />
                        }
                    >
                        <div className="back">
                            <img src={card2} alt="Project Image" />
                            <a href="https://rifat654.github.io/Tailwindcss-web-page/">
                                <ImGithub className="text-xl" />
                            </a>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Projects;
