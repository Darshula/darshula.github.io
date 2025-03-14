'use client'

import React, { ReactNode } from "react";


const GradientPosition = () => {

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev: { clientX: number; clientY: number; }) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};


interface GradientBackProps {
    children: ReactNode
    className: string
}
const GradientBack: React.FC<GradientBackProps> = ({ children, className }) => {
    return (
        <div
            style={{
                backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgba(29, 78, 216, 0.15), transparent 80% )`
            }}
            className={className}>
            {children}
        </div>
    )
}

export default GradientBack
