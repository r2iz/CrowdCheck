import { useState } from 'react';

export const InputBody = () => {
    const [congestion, setCongestion] = useState('');

    const handleClick = (value: string) => {
        setCongestion(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">混雑度を選択してください</h1>
            <div className="space-y-2">
                <button 
                    className={`px-4 py-2 border border-indigo-600 text-indigo-600 rounded ${congestion === 'Low' ? 'bg-indigo-600 text-white' : ''}`}
                    onClick={() => handleClick('Low')}
                >
                    低
                </button>
                <button 
                    className={`px-4 py-2 border border-indigo-600 text-indigo-600 rounded ${congestion === 'Medium' ? 'bg-indigo-600 text-white' : ''}`}
                    onClick={() => handleClick('Medium')}
                >
                    中
                </button>
                <button 
                    className={`px-4 py-2 border border-indigo-600 text-indigo-600 rounded ${congestion === 'High' ? 'bg-indigo-600 text-white' : ''}`}
                    onClick={() => handleClick('High')}
                >
                    高
                </button>
            </div>
        </div>
    );
};
