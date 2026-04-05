// aniadir.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { nunito } from './font.jsx';

export default function ListaProductos({ isModalOpen, onClose, categorias = [] }) {
  const [shouldRender, setShouldRender] = useState(isModalOpen);
  const [tipoProducto, setTipoProducto] = useState('con_tamano');
  const overlayRef = useRef(null);

  const categoriasConTamano = ['Pizzas', 'Bebidas', 'Papas Fritas', 'Alitas de Pollo', 'Postres'];

  useEffect(() => {
    if (isModalOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleAnimationEnd = () => {
    if (!isModalOpen) setShouldRender(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!shouldRender) return null;

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      onAnimationEnd={handleAnimationEnd}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all duration-300 ${
        isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border-t-8 border-[#B8001F] ${nunito.className} transition-all duration-300 transform ${
          isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Añadir Producto</h2>
          <button onClick={onClose} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-2xl">✕</button>
        </div>

        <form className="p-6 space-y-5">
          {/* Selector de Tipo */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTipoProducto('con_tamano')}
              className={`cursor-pointer flex-1 py-2 px-4 rounded-md font-semibold border transition-all duration-300 ${
                tipoProducto === 'con_tamano' ? 'bg-[#B8001F] text-white border-[#B8001F]' : 'bg-white text-gray-600 border-gray-300 hover:border-[#B8001F]'
              }`}
            >Con Tamaño</button>
            <button
              type="button"
              onClick={() => setTipoProducto('sin_tamano')}
              className={`cursor-pointer flex-1 py-2 px-4 rounded-md font-semibold border transition-all duration-300 ${
                tipoProducto === 'sin_tamano' ? 'bg-[#B8001F] text-white border-[#B8001F]' : 'bg-white text-gray-600 border-gray-300 hover:border-[#B8001F]'
              }`}
            >Sin Tamaño</button>
          </div>

          {/* Nombre y Descripción */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nombre <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Ej: Super Burger" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#B8001F]/20 focus:border-[#B8001F] text-gray-800 placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Descripción <span className="text-red-500">*</span></label>
              <textarea rows="2" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#B8001F]/20 focus:border-[#B8001F] text-gray-800"></textarea>
            </div>
          </div>

          {/* Sección Dinámica - Animación Suavizada */}
          <div className="space-y-4 transition-all duration-500 ease-in-out">
            {/* GRID 1: Categoría y (Tamaño o Precio) */}
            <div className="grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
              {/* Categoría - Siempre col-span-1 */}
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1">Categoría</label>
                <select className="cursor-pointer w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#B8001F] text-gray-800 bg-white">
                  <option value="">Seleccionar...</option>
                  {categorias
                    .filter(cat => tipoProducto === 'con_tamano' ? categoriasConTamano.includes(cat.nombre) : !categoriasConTamano.includes(cat.nombre))
                    .map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))
                  }
                </select>
              </div>

              {/* Lógica de Tamaño o Precio - Animación de Colapso Suave */}
              <div className="col-span-1 transition-all duration-500 ease-in-out">
                {/* Contenedor animado para el Tamaño */}
                {/* SOLUCIÓN: transition-all duration-500, opacity y max-height para un colapso suave */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  tipoProducto === 'con_tamano' ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 -translate-y-2'
                }`}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tamaño</label>
                  <select className="cursor-pointer w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#B8001F] text-gray-800 bg-white">
                    <option>Pequeño</option><option>Mediano</option><option>Grande</option>
                  </select>
                </div>

                {/* Contenedor animado para el Precio (Sin Tamaño) */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  tipoProducto === 'sin_tamano' ? 'opacity-100 max-h-40 translate-y-0 mt-0' : 'opacity-0 max-h-0 -translate-y-2'
                }`}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Precio</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-600 font-semibold">$</span>
                    <input type="number" step="0.01" placeholder="0.00" className="w-full border border-gray-300 rounded-lg p-2.5 pl-7 outline-none focus:border-[#B8001F] text-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* GRID 2: Precio abajo (Con Tamaño) - Animación fadeInDown suavizada */}
            {/* SOLUCIÓN: Usamos max-height para suavizar la aparición del Precio en la fila inferior */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                tipoProducto === 'con_tamano' ? 'opacity-100 max-h-40 translate-y-0 animate-fadeInDown' : 'opacity-0 max-h-0 -translate-y-2'
            }`}>
                <label className="block text-sm font-bold text-gray-700 mb-1">Precio</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-600 font-semibold">$</span>
                  <input type="number" step="0.01" placeholder="0.00" className="w-full border border-gray-300 rounded-lg p-2.5 pl-7 outline-none focus:border-[#B8001F] text-gray-800" />
                </div>
            </div>
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Imagen del producto</label>
            <input type="file" className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#B8001F]/10 file:text-[#B8001F] hover:file:bg-[#B8001F]/20 cursor-pointer" />
          </div>

          {/* Footer */}
          <div className="flex gap-3 mt-8 pt-4 border-t border-gray-200">
            <button type="button" onClick={onClose} className="cursor-pointer flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300">Cerrar</button>
            <button type="submit" className="cursor-pointer flex-1 px-4 py-2.5 bg-[#B8001F] text-white rounded-lg font-bold hover:bg-[#9c0019ff] shadow-lg shadow-[#B8001F]/20 transition-all duration-300">Crear Producto</button>
          </div>
        </form>
      </div>
    </div>
  );
}