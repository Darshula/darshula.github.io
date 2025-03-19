"use client"

import React from "react";

function GradientPosition() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
        const updateMousePosition = (ev: { clientX: number; clientY: number; }) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return (mousePosition);
};


type GradientBackProps = {
    className: string
};

function GradientBack({ className }: GradientBackProps) {
    return (
        <div
            style={{
                backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgba(29, 78, 216, 0.15), transparent 80% )`
            }}
            className={"z-[-1] s-full inset-0 fixed" + " " + className}>
        </div>
    );
};

export default GradientBack;
