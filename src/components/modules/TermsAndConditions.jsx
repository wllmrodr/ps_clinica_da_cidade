// ========================================================================
// FUNÇÃO: Componente para a seção de Termos e Condições.
// ========================================================================
import React from 'react';

// Exibe numa janela os Termos obrigatórios para o usuário.

const TermsAndConditions = ({ isChecked, setIsChecked, errors }) => (
  <fieldset>
    <legend className="text-2xl font-semibold text-gray-800 border-b-2 border-[#00adbd] pb-2 mb-6">Termos e Condições</legend>
    <div className="terms-box h-48 overflow-y-auto bg-gray-100 p-4 border border-gray-200 rounded-lg text-sm text-gray-600">
      <h3 className="font-bold text-base text-gray-800 mb-2">Programa Indique e Ganhe</h3>
      <p className="mb-4">Ao participar, o indicador aceita integralmente os termos e condições abaixo:</p>
      <h4 className="font-semibold text-gray-700 mb-1">1. Funcionamento do Programa</h4>
      <ul className="list-disc list-inside space-y-1 mb-3">
        <li>O indicador poderá indicar até 5 (cinco) pessoas.</li>
        <li>Cada indicação convertida gera um desconto de 20%.</li>
        <li>O desconto é progressivo: 1 indicado = 20%, ..., 5 indicados = 100%.</li>
      </ul>
      <h4 className="font-semibold text-gray-700 mb-1">2. Validade do Benefício</h4>
      <ul className="list-disc list-inside space-y-1 mb-3">
        <li>O desconto é liberado 30 dias após a primeira conversão.</li>
        <li>O benefício é válido por 60 dias após a liberação.</li>
      </ul>
      <h4 className="font-semibold text-gray-700 mb-1">3. Regras Gerais</h4>
      <ul className="list-disc list-inside space-y-1 mb-3">
        <li>O benefício é intransferível e validado pelo CPF.</li>
        <li>Não pode ser convertido em dinheiro.</li>
        <li>Não é cumulativo com outras promoções.</li>
      </ul>
    </div>
    <div className="mt-4 flex items-center">
      <input type="checkbox" id="termsAccept" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="h-4 w-4 text-[#00adbd] focus:ring-[#00adbd] border-gray-300 rounded" />
      <label htmlFor="termsAccept" className="ml-2 block text-sm text-gray-900">Eu li e aceito os termos e condições. <span className="text-red-500">*</span></label>
    </div>
    {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
  </fieldset>
);
export default TermsAndConditions;
