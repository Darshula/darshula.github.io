'use client'

import { CSSProperties } from 'react';
import { TypeAnimation } from 'react-type-animation';

type CaretWriterProps = {
    strings: string[], delay: number, style?: CSSProperties
}

function CaretWriter({ strings, delay, style}: CaretWriterProps) {
    const sequence: Array<string | number> = [];
    for (let i = 0; i < strings.length; ++i) {
        sequence.push(strings[i], delay);
    }
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper='span'
            speed={50}
            style={style}
            repeat={Infinity}
        />
    );
};

export default CaretWriter;
