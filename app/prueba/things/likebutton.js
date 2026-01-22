'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setlikes] = useState(0);

    function Likes() {
        setlikes(likes + 1);
    }

    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors" onClick={Likes}>Like ({likes})</button>
}