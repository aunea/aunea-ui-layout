import { useEffect, useState } from 'react';

export type AssistantPhase = 'hidden' | 'opening' | 'face' | 'idle';

export function useAssistantAnimation() {
    const [phase, setPhase] = useState<AssistantPhase>('hidden');
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        // Open portal
        const openTimer = setTimeout(() => {
            setPhase('opening');
        }, 300);

        // Face fade-in
        const faceTimer = setTimeout(() => {
            setPhase('face');
        }, 700);

        // Idle
        const idleTimer = setTimeout(() => {
            setPhase('idle');
        }, 1100);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(faceTimer);
            clearTimeout(idleTimer);
        };
    }, []);

    useEffect(() => {
        if (phase !== 'idle') return;

        const interval = setInterval(() => {
            setBlink(true);
            setTimeout(() => setBlink(false), 120);
        }, 4000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, [phase]);

    return {
        phase,
        blink,
    };
}
