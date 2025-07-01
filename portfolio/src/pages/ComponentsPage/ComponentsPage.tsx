import React from "react";
import "./ComponentsPage.css";
import GlassPrismContainer from "../../components/GlassPrismContainer/GlassPrismContainer";
import GlassLiftContainer from "../../components/GlassLiftContainer/GlassLiftContainer";
import MadeWithCard from "../../components/MadeWithCard/MadeWithCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const techStack = [
    {
        tech: "Flutter",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png",
        backgroundColor: "#02569B",
    },
    {
        tech: "React",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        backgroundColor: "#20232a",
    },
    {
        tech: "Spring Boot",
        imageUrl: "https://img.icons8.com/?size=512&id=90519&format=png",
        backgroundColor: "#6DB33F",
    },
    {
        tech: "OpenTelemetry",
        imageUrl: "https://images.seeklogo.com/logo-png/43/2/opentelemetry-logo-png_seeklogo-430977.png",
        backgroundColor: "#563ACC",
    },
    {
        tech: "Kubernetes",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        backgroundColor: "#326CE5",
    },
    {
        tech: "Node.js",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        backgroundColor: "#3C873A",
    },
    {
        tech: "Flask",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQqX699Ii1yOe0IYdJ3SmuIA8DFyIMgRKLQ&s",
        backgroundColor: "#000000",
    },
];

const project = {
    title: "Transit+ Tracker",
    description: "AI-powered arrival prediction and smart public transit UI.",
    date: "June 2025",
    client: "Transit+ Inc.",
    images: [
        "https://via.placeholder.com/600x200",  // main
        "https://via.placeholder.com/150x100",  // sub1
        "https://via.placeholder.com/150x100",  // sub2
    ],
    stack: [
        {
            tech: "Flutter",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png",
            backgroundColor: "#02569B",
        },
        {
            tech: "Spring Boot",
            imageUrl: "https://img.icons8.com/?size=512&id=90519&format=png",
            backgroundColor: "#6DB33F",
        },
        {
            tech: "OpenTelemetry",
            imageUrl: "https://images.seeklogo.com/logo-png/43/2/opentelemetry-logo-png_seeklogo-430977.png",
            backgroundColor: "#563ACC",
        },
    ],
};


const ComponentsPage = () => {
    return (
        <div className="components-page">
            <h1 className="page-title">Component Showcase</h1>

            <section className="component-section">
                <h2>Glass Prism Container</h2>
                <GlassPrismContainer>
                    <p>This container glows with a rainbow prism effect on hover.</p>
                </GlassPrismContainer>
            </section>

            <section className="component-section">
                <h2>Glass Lift Container</h2>
                <GlassLiftContainer>
                    <p>This container lifts and lights up on hover.</p>
                </GlassLiftContainer>
            </section>

            <section className="component-section">
                <h2>Made With Cards</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {techStack.map(({ tech, imageUrl, backgroundColor }) => (
                        <MadeWithCard
                            key={tech}
                            tech={tech}
                            imageUrl={imageUrl}
                            backgroundColor={backgroundColor}
                        />
                    ))}
                </div>
            </section>


            <section className="component-section">
                <h2>Project Card</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>

                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        date={project.date}
                        client={project.client}
                        images={project.images}
                        stack={project.stack}
                    />
                </div>
            </section>
        </div>
    );
};

export default ComponentsPage;
