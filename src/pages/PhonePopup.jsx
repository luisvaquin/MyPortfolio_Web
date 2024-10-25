import React from 'react';

function PhonePopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md text-center max-w-xs">
                <h2 className="text-lg font-semibold mb-4">Contacto Telefónico</h2>
                <p className="text-gray-700 mb-4">Puedes comunicarte al:</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">47242803</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default PhonePopup;
