// ========================================================================
// FUNÇÃO: Componente de formulário para os dados de um indicado.
// ========================================================================
import React from 'react';
import { TrashIcon } from '../common/Icons.jsx';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';

// Exibe a div que o Indicado deve preencher

const RefereeForm = ({ id, refereeData, onDataChange, onRemove, errors, index }) => {
    // Função para formatar o número de telefone enquanto o usuário digita
    const handlePhoneChange = (e) => {
        const { name, value } = e.target;
        const onlyNums = value.replace(/[^\d]/g, '');
        if (onlyNums.length <= 11) {
            let maskedValue = onlyNums.replace(/^(\d{2})(\d)/g, '($1) $2');
            maskedValue = maskedValue.replace(/(\d{5})(\d)/, '$1-$2');
            onDataChange(id, name, maskedValue);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange(id, name, value);
    };

    return (
        <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 relative animate-fade-in space-y-4">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-700">Indicado {index + 1}</h4>
                <Button onClick={() => onRemove(id)} variant="ghost" className="!w-auto" aria-label="Remover indicado">
                    <TrashIcon />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor={`refereeName-${id}`} className="block text-xs font-medium text-gray-600 mb-1">Nome Completo <span className="text-red-500">*</span></label>
                    <Input id={`refereeName-${id}`} name="name" value={refereeData.name} onChange={handleChange} placeholder="Nome do amigo" error={errors.name} />
                </div>
                <div>
                    <label htmlFor={`refereePhone-${id}`} className="block text-xs font-medium text-gray-600 mb-1">Telefone <span className="text-red-500">*</span></label>
                    <Input id={`refereePhone-${id}`} name="phone" type="tel" value={refereeData.phone} onChange={handlePhoneChange} placeholder="(XX) XXXXX-XXXX" error={errors.phone} />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor={`refereeEmail-${id}`} className="block text-xs font-medium text-gray-600 mb-1">E-mail (Opcional, para confirmação)</label>
                    <Input id={`refereeEmail-${id}`} name="email" type="email" value={refereeData.email} onChange={handleChange} placeholder="email.amigo@exemplo.com" error={errors.email} />
                </div>
            </div>
        </div>
    );
};
export default RefereeForm;

