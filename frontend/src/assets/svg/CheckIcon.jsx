import React from 'react';

export default function CheckIcon({ onClick, color = 'currentColor' }) { // Добавляем параметр color
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={color} // Используем stroke для изменения цвета
            className="icon checkIcon"
            style={{ cursor: 'pointer' }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}
