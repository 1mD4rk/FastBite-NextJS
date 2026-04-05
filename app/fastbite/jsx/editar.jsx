'use client';
import { useState, useEffect, useRef } from 'react';
import { nunito } from './font.jsx';

export default function EditarProducto({ isOpen, onClose, producto, categorias = [] }) {
  // Estado para controlar el renderizado físico en el DOM para la animación de cierre
  const [shouldRender, setShouldRender] = useState(isOpen);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      // Desbloquear scroll del body
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Función que se ejecuta cuando termina la animación de CSS
  const handleAnimationEnd = () => {
    if (!isOpen) setShouldRender(false); // Desmontar del DOM solo si se está cerrando
  };

  // Cerrar al hacer click en el fondo borroso
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!shouldRender || !producto) return null;

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      onAnimationEnd={handleAnimationEnd}
      // Contenedor del fondo (Overlay) con transición de opacidad
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all duration-300 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        // Contenedor del Modal con transición de opacidad, escala y borde superior azul
        className={`bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border-t-8 border-gray-600 ${nunito.className} transition-all duration-300 ease-out transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Header - Coincide con la imagen */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Editar Producto: {producto.nombre}</h2>
          <button onClick={onClose} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-2xl">✕</button>
        </div>

        {/* Formulario - Estructura fiel a la imagen */}
        <form className="p-6 space-y-6">
          
          {/* Campo: Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
            <input 
              type="text" 
              defaultValue={producto.nombre} 
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-600/20 focus:border-gray-600 text-gray-800 bg-gray-50/50" 
            />
          </div>

          {/* Campo: Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Descripción</label>
            <textarea 
              rows="4" 
              defaultValue={producto.descripcion} 
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-600/20 focus:border-gray-600 text-gray-800 bg-gray-50/50 resize-none"
            ></textarea>
          </div>

          {/* Grid para Precio y Categoría */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Campo: Precio (con prefijo $) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Precio</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">$</span>
                <input 
                  type="number" 
                  step="0.01" 
                  defaultValue={producto.precio} 
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 outline-none focus:ring-2 focus:ring-gray-600/20 focus:border-gray-600 text-gray-800 bg-gray-50/50" 
                />
              </div>
            </div>

            {/* Campo: Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Categoría</label>
              <div className="relative">
                <select 
                  defaultValue={producto.id_categoria} 
                  className="cursor-pointer w-full border border-gray-300 rounded-lg p-3 pr-10 outline-none focus:ring-2 focus:ring-gray-600/20 focus:border-gray-600 text-gray-800 bg-gray-50/50 appearance-none"
                >
                  {categorias.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                  ))}
                </select>
                {/* Icono de flecha personalizado */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
              </div>
            </div>
          </div>

          {/* Sección: Imagen del producto (Estilo imitando a aniadir.jsx) */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Imagen del producto</label>
            
            {/* Input de archivo estilizado CON ESTILO DE ANIADIR */}
            {/* He usado las clases de aniadir.jsx pero adaptando los colores a azul para editar */}
            <input 
                type="file" 
                className="w-full text-sm text-gray-700 
                           file:mr-4 file:py-2.5 file:px-5 
                           file:rounded-full file:border-0 
                           file:text-sm file:font-semibold 
                           file:bg-gray-600/10 file:text-gray-700 
                           hover:file:bg-gray-600/20 cursor-pointer
                           border border-gray-300 rounded-lg bg-gray-50/50" 
            />

            {/* Textos de ayuda */}
            <p className="text-xs text-gray-500">Formatos aceptados: PNG, JPG, JPEG, WEBP. Tamaño máximo: 5MB</p>
            <p className="text-xs text-gray-600 truncate">
              Imagen actual: <span className="text-gray-600 font-medium">{producto.imagen || 'Sin imagen'}</span>
            </p>
          </div>

          {/* Footer - Botones alineados a la derecha */}
          <div className="flex justify-end gap-3 mt-10 pt-6 border-t border-gray-200">
            <button 
              type="button" 
              onClick={onClose} 
              className="cursor-pointer px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition duration-150"
            >
              Cerrar
            </button>
            <button 
              type="submit" 
              className="cursor-pointer px-6 py-2.5 bg-[#6c757d] text-white rounded-lg font-semibold hover:bg-[#5a6268] shadow transition duration-150"
            >
              Actualizar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}