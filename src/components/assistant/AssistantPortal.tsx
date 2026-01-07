'use client';

import { LedFace } from './LedFace';
import { useAssistantAnimation } from './useAssistantAnimation';

import './assistant.css';

export function AssistantPortal() {
    const { phase, blink } = useAssistantAnimation();

    return (
        <div
            className={`
        assistant-portal
        ${phase !== 'hidden' ? 'open' : ''}
        ${phase === 'face' || phase === 'idle' ? 'face-visible' : ''}
      `}
        >
            <LedFace blink={blink} />
        </div>
    );
}
