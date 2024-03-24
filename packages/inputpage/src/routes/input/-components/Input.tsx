import { useState } from 'react';

export const InputBody = () => {
    const [congestion, setCongestion] = useState('');

    const handleClick = (value: string) => {
        setCongestion(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">現在の混雑度を選択してください</h1>
            <div className=" space-y-2">
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === 'Low' ? 'bg-indigo-600 text-white' : 'text-indigo-600'}`}
                    onClick={() => handleClick('Low')}
                >
                    低
                </button>
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === 'Medium' ? 'bg-indigo-600 text-white' : 'text-indigo-600 '}`}
                    onClick={() => handleClick('Medium')}
                >
                    中
                </button>
                <button 
                    className={`px-4 py-2 border m-8 border-indigo-600 rounded ${congestion === 'High' ? 'bg-indigo-600 text-white' : 'text-indigo-600'}`}
                    onClick={() => handleClick('High')}
                >
                    高
                </button>
            </div>
        </div>
    );
};
