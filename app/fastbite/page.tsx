'use client';

import { nunito } from './jsx/font.jsx';
import Navbar from './jsx/navbar.jsx';
import Title from './jsx/title.jsx';
import Cardfood from './jsx/tarjeta.jsx';

export default function HomePage() {

    return (
        <div className='bg-[#F8F9FA] min-h-screen'>

            <header><Navbar /></header>
            <Title title="Gestión de Productos"/>
            
            <div className='flex justify-center'>
                    {/* Contenedor de la tarjeta */}
                    <div className="rounded-lg border border-[#d1d1d1] shadow-lg p-1 w-326 h-12">
                        
                        {/* Contenido Flex (Fila) */}
                        <div className="flex items-center">
      
                            {/* Círculo Rojo (Icono/Número) */}
                            <div className=" bg-[#B8001F]/12 p-0 rounded-full mr-3 mt-1 ml-2 size-7.5 flex items-center justify-center">
                                <span className={`text-[#B8001F] font-bold text-sm ${nunito.className}`}>
                                    {/* Aquí va tu variable, ej: {productos.length} */}
                                    3
                                </span>
                            </div>

                            {/* Texto */}
                            <div>
                                <p className={`font-bold text-[15px] text-[#000000ff] mt-1 ${nunito.className}`}>Total Productos</p>
                            </div>
                            
                        </div>
                    </div>
            </div>

            <div className="p-10 flex flex-wrap justify-center gap-6">
                <Cardfood 
                precio="12.50" 
                categoria="Hamburguesas" 
                tamaño="Grande" 
                titulo="Super HotDog Deluxe" 
                descripcion="I hate niggers" 
                estado="visible" 
                imagen ="hotdog.png"
                />

                <Cardfood 
                precio="12.50" 
                categoria="Hamburguesas" 
                tamaño="Grande" 
                titulo="Combo Goku" 
                descripcion="- Papas fritas medianas - Hamburguesa (pollo o carne) - Refresco frescolita - Juguete de Goku" 
                estado="novisible" 
                imagen ="goku.png"
                />

                
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