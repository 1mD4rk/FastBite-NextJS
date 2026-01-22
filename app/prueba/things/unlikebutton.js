'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [unlikes, setunlikes] = useState(0);

    function NoLikes() {
        setunlikes(unlikes - 1);
    }

    return <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors" onClick={NoLikes}>Unlikes ({unlikes})</button>
}