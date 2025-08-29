// ========================================================================
// FUNÇÃO: Componente de formulário para os dados do indicador.
// ========================================================================

import React from 'react';
import Input from '../common/Input.jsx';

// Exibe a div que o Indicador deve preencher

const ReferrerForm = ({ referrerData, setReferrerData, errors }) => {
  // Função para formatar o número de telefone enquanto o usuário digita
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    // Remove todos os caracteres que não são dígitos
    const onlyNums = value.replace(/[^\d]/g, '');
    // Limita a 11 dígitos
    if (onlyNums.length <= 11) {
      // Aplica a máscara (XX) XXXXX-XXXX
      let maskedValue = onlyNums.replace(/^(\d{2})(\d)/g, '($1) $2');
      maskedValue = maskedValue.replace(/(\d{5})(\d)/, '$1-$2');
      setReferrerData(prevData => ({ ...prevData, [name]: maskedValue }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReferrerData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <fieldset className="space-y-6">
      <legend className="text-2xl font-semibold text-gray-800 border-b-2 border-[#00adbd] pb-2 mb-6">
        Seus Dados
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo <span className="text-red-500">*</span></label>
          <Input id="referrerName" name="name" value={referrerData.name} onChange={handleChange} placeholder="Seu nome completo" error={errors.referrerName} />
        </div>
        <div>
          <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-1">Telefone <span className="text-red-500">*</span></label>
          <Input id="referrerPhone" name="phone" type="tel" value={referrerData.phone} onChange={handlePhoneChange} placeholder="(XX) XXXXX-XXXX" error={errors.referrerPhone} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-1">E-mail (Opcional)</label>
          <Input id="referrerEmail" name="email" type="email" value={referrerData.email} onChange={handleChange} placeholder="seu.email@exemplo.com" error={errors.referrerEmail} />
        </div>
      </div>
    </fieldset>
  );
};
export default ReferrerForm;