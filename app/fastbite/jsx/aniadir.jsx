'use client';

import { useState } from 'react';
import { nunito } from './font.jsx';

export default function ListaProductos({ isModalOpen, onClose, categorias = [] }) {
  const [tipoProducto, setTipoProducto] = useState('con_tamano');

  const categoriasConTamano = ['Pizzas', 'Bebidas', 'Papas Fritas', 'Alitas de Pollo', 'Postres'];

  if (!isModalOpen) return null;

  return (
    // Mantenemos 'backdrop-blur-sm' y el fondo oscuro suave para el contraste
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <div className={`bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border-t-8 border-[#B8001F] ${nunito.className}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Añadir Producto</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors text-2xl">✕</button>
        </div>

        <form className="p-6 space-y-5">
          {/* Selector de Tipo (Radio Buttons Estilizados) */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTipoProducto('con_tamano')}
              className={`flex-1 py-2 px-4 rounded-md font-semibold border transition-all ${
                tipoProducto === 'con_tamano' 
                ? 'bg-[#B8001F] text-white border-[#B8001F]' 
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#B8001F]'
              }`}
            >
              Con Tamaño
            </button>
            <button
              type="button"
              onClick={() => setTipoProducto('sin_tamano')}
              className={`flex-1 py-2 px-4 rounded-md font-semibold border transition-all ${
                tipoProducto === 'sin_tamano' 
                ? 'bg-[#B8001F] text-white border-[#B8001F]' 
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#B8001F]'
              }`}
            >
              Sin Tamaño
            </button>
          </div>

          {/* Nombre */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              // SOLUCIÓN: Añadimos 'placeholder:text-gray-500' para oscurecer el texto de ejemplo
              placeholder="Ej: Super Burger"
              className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#B8001F]/20 focus:border-[#B8001F] placeholder:text-gray-500 text-gray-800" 
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Descripción <span className="text-red-500">*</span></label>
            <textarea 
              rows="2" 
              // SOLUCIÓN: Aseguramos texto oscuro para el contenido y placeholder
              className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#B8001F]/20 focus:border-[#B8001F] text-gray-800"
            ></textarea>
            {/* SOLUCIÓN: Cambiamos 'text-gray-400' por 'text-gray-600' para mejor lectura */}
            <p className="text-xs text-gray-600 mt-1 font-medium">Máximo 500 caracteres</p>
          </div>

          {/* Secciones Dinámicas */}
          <div className="grid grid-cols-2 gap-4">
            {/* Categoría */}
            <div className="col-span-1">
              <label className="block text-sm font-bold text-gray-700 mb-1">Categoría</label>
              {/* SOLUCIÓN: Añadimos 'text-gray-800' para que la opción seleccionada se vea oscura */}
              <select className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#B8001F] text-gray-800 bg-white">
                {/* SOLUCIÓN: Oscurecemos el texto de la opción deshabilitada */}
                <option value="" className="text-gray-500">Seleccionar...</option>
                {categorias
                    .filter(cat => 
                    tipoProducto === 'con_tamano' 
                        ? categoriasConTamano.includes(cat.nombre) 
                        : !categoriasConTamano.includes(cat.nombre)
                    )
                    .map(cat => (
                    <option key={cat.id} value={cat.id} className="text-gray-800">
                        {cat.nombre}
                    </option>
                    ))
                }
              </select>
            </div>

            {tipoProducto === 'con_tamano' ? (
              <>
                {/* Tamaño */}
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tamaño</label>
                  {/* SOLUCIÓN: Texto oscuro para el selector */}
                  <select className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-[#B8001F] text-gray-800 bg-white">
                    <option className="text-gray-800">Pequeño</option>
                    <option className="text-gray-800">Mediano</option>
                    <option className="text-gray-800">Grande</option>
                    <option className="text-gray-800">Familiar</option>
                  </select>
                </div>
                {/* Precio (Con Tamaño) */}
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Precio</label>
                  <div className="relative">
                    {/* SOLUCIÓN: Oscurecemos el símbolo '$' */}
                    <span className="absolute left-3 top-2.5 text-gray-600 font-semibold">$</span>
                    <input type="number" step="0.01" className="w-full border border-gray-300 rounded-lg p-2.5 pl-7 outline-none focus:border-[#B8001F] text-gray-800" />
                  </div>
                </div>
              </>
            ) : (
              /* Precio (Sin Tamaño) */
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1">Precio</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-600 font-semibold">$</span>
                  <input type="number" step="0.01" className="w-full border border-gray-300 rounded-lg p-2.5 pl-7 outline-none focus:border-[#B8001F] text-gray-800" />
                </div>
              </div>
            )}
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Imagen del producto</label>
            {/* SOLUCIÓN: Mejoramos el contraste del texto del botón de archivo y el texto adjunto */}
            <input 
              type="file" 
              className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#B8001F]/10 file:text-[#B8001F] hover:file:bg-[#B8001F]/20 cursor-pointer" 
            />
          </div>

          {/* Footer / Acciones */}
          <div className="flex gap-3 mt-8 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="cursor-pointer flex-1 px-4 py-2.5 bg-[#B8001F] text-white rounded-lg font-bold hover:bg-[#9c0019ff] transition-colors shadow-lg shadow-[#B8001F]/20"
            >
              Crear Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}