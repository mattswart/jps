import { useState, useEffect } from 'react';

export default function WebGLChecker({ children, fallback }) {
    const [isBroken, setIsBroken] = useState(false);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        try {
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            // The key check for the Safari bug
            if (gl && gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision === 0) {
                console.log('Safari WebGL bug detected, falling back.');
                setIsBroken(true);
            }
        } catch (e) {
            // This will catch cases where WebGL is not supported at all
            console.log('WebGL is not supported, falling back.');
            setIsBroken(true);
        }
    }, []); // The empty dependency array ensures this effect runs only once

    // If WebGL is broken, render the fallback. Otherwise, render the children.
    return isBroken ? fallback : children;
};