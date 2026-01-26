'use client';

import Navbar from './jsx/navbar.jsx';
import Title from './jsx/title.jsx';

export default function HomePage() {

    return (
        <div className='bg-[#F8F9FA] h-screen'>

            <Navbar />
            <Title title="Gestión de Productos"/>
            
            <div className="box-border size-32 border-2 p-2">
                ...
            </div>
            

        </div>

        
        

    );
}

{/* <div className="box-border size-32 border-4 p-4">
                <Images archivoImagen={require('./images/goku.png')} nombre="Goku" className="mx-1 size-5 self-center rounded-full" />
                <Images archivoImagen={require('./images/vegeta.jpg')} nombre="Vegeta" className="mx-1 size-5 self-center rounded-full" />
            </div>

             <div className="p-4">
                <div className="flow-root">
                    <div className="my-4">Well, let me tell you something, ...</div>
                </div>
                <div className="flow-root">
                    <div className="my-4">Sure, go ahead, laugh if you want...</div>
                </div>
            </div>

            <span className="inline-flex items-baseline">
                <Images archivoImagen={require('./images/vegeta.jpg')} nombre="Vegeta" className="mx-1 size-5 self-center rounded-full" />
                <span>Kramer</span>
            </span> */}