'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { nunito } from './jsx/font.jsx';
import Navbar from './jsx/navbar.jsx';
import Title from './jsx/title.jsx';
import Cardfood from './jsx/tarjeta.jsx';
import Aniadir from './jsx/aniadir.jsx';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categorias, setCategorias] = useState<any[]>([]);
    
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    useEffect(() => {
        const fetchCategorias = async () => {
            const { data, error } = await supabase
                .from('categorias')
                .select('*')
                .order('nombre', { ascending: true });

            if (error) {
                console.error('Error cargando categorías:', error);
            } else {
                setCategorias(data || []); 
            }
        };
        fetchCategorias();
    }, [supabase]);

    return (
        <div className='bg-[#F8F9FA] min-h-screen'>
            <header><Navbar /></header>
            <Title 
                title="Gestión de Productos" 
                onOpenModal={() => setIsModalOpen(true)} 
            />
            
            <div className="p-10 flex flex-wrap justify-center gap-6">
                <Cardfood 
                    precio="12.50" 
                    categoria="Hot Dogs" 
                    tamaño="Grande" 
                    titulo="Super HotDog Deluxe" 
                    descripcion="Delicioso hot dog con ingredientes premium y salsa especial de la casa." 
                    estado="visible" 
                    imagen="hotdog.png"
                />
                <Cardfood 
                    precio="12.50" 
                    categoria="Combos" 
                    tamaño="Grande" 
                    titulo="Combo Goku" 
                    descripcion="- Papas fritas medianas - Hamburguesa - Refresco - Juguete coleccionable." 
                    estado="novisible" 
                    imagen="goku.png"
                />
            </div>

            <Aniadir 
                isModalOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                categorias={categorias as never[]} 
            />
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

            // <table className="table-auto">
            //     <thead>
            //         <tr>
            //         <th>Song</th>
            //         <th>Artist</th>
            //         <th>Year</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         <tr>
            //         <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            //         <td>Malcolm Lockyer</td>
            //         <td>1961</td>
            //         </tr>
            //         <tr>
            //         <td>Witchy Woman</td>
            //         <td>The Eagles</td>
            //         <td>1972</td>
            //         </tr>
            //         <tr>
            //         <td>Shining Star</td>
            //         <td>Earth, Wind, and Fire</td>
            //         <td>1975</td>
            //         </tr>
            //     </tbody>
            // </table>