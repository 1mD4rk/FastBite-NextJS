'use client';

import { useState } from 'react';

    export default function ShowMore() {

        function MoreInfo() {
            return <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>;
        }

        function HideInfo() {
            return <p>Dale click al boton para mostrar mas</p>;
        }

        function handleShowMore() {
          setshowmore(!showmore);
        }

        const [showmore, setshowmore] = useState(false);

        return (
            <div>
                <br />
                <button className="sticky top-4 left-175 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors" onClick={handleShowMore}>
                    {showmore ? 'Hide' : 'Show'} details
                </button>
                
                {showmore ? <MoreInfo /> : <HideInfo />}
            </div>
        );
    }
    