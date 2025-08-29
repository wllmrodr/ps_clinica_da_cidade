// ========================================================================
// FUNÇÃO: Gerencia toda a lógica dos módulos página, limita as entradas do usuário e executa as medidas de comunicação/confirmação.
// ========================================================================
import React, { useState, useCallback, useEffect } from 'react';
import Header from '../components/layout/Header.jsx';
import ReferrerForm from '../components/modules/ReferrerForm.jsx';
import RefereeForm from '../components/modules/RefereeForm.jsx';
import TermsAndConditions from '../components/modules/TermsAndConditions.jsx';
import SuccessModal from '../components/modules/SuccessModal.jsx';
import { PlusIcon } from '../components/common/Icons.jsx';
import Button from '../components/common/Button.jsx';


// Define parâmetros aceitáveis para as entradas do usuário, evitando respostas problemáticas.
const IndicateAndWinPage = () => {
    const [referees, setReferees] = useState([
        { id: Date.now(), name: '', phone: '', email: '' }
    ]);
    const [referrerData, setReferrerData] = useState({ name: '', phone: '', email: '' });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
  
    const MAX_REFEREES = 5;
  
    const handleAddReferee = useCallback(() => {
      if (referees.length < MAX_REFEREES) {
        setReferees(prev => [...prev, { id: Date.now(), name: '', phone: '', email: '' }]);
      }
    }, [referees.length]);
  
    const handleRemoveReferee = useCallback((id) => {
      setReferees(prev => prev.filter(referee => referee.id !== id));
    }, []);
  
    const handleRefereeDataChange = useCallback((id, field, value) => {
      setReferees(prev => prev.map(referee => 
        referee.id === id ? { ...referee, [field]: value } : referee
      ));
    }, []);
    
    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        const seenNames = new Set();
        const seenEmails = new Set();
        const seenPhones = new Set();

        const referrerName = referrerData.name.trim();
        const referrerPhone = referrerData.phone.trim().replace(/[^\d]/g, '');
        const referrerEmail = referrerData.email.trim().toLowerCase();

        if (!referrerName) {
            newErrors.referrerName = 'Nome completo é obrigatório.';
        } else if (referrerName.split(' ').filter(n => n).length < 2) {
            newErrors.referrerName = 'Por favor, insira nome e sobrenome.';
        }
        seenNames.add(referrerName.toLowerCase());

        if (!referrerPhone) {
             newErrors.referrerPhone = 'Telefone é obrigatório.';
        } else if (referrerPhone.length < 10) {
            newErrors.referrerPhone = 'Telefone deve ter 10 ou 11 dígitos.';
        }
        seenPhones.add(referrerPhone);

        if (referrerEmail && !emailRegex.test(referrerEmail)) {
            newErrors.referrerEmail = 'Formato de e-mail inválido.';
        } else if (referrerEmail) {
            seenEmails.add(referrerEmail);
        }

        newErrors.referees = {};
        referees.forEach(referee => {
            const refereeErrors = {};
            const refereeName = referee.name.trim();
            const refereePhone = referee.phone.trim().replace(/[^\d]/g, '');
            const refereeEmail = referee.email.trim().toLowerCase();

            if (!refereeName) {
                refereeErrors.name = 'Nome é obrigatório.';
            } else if (refereeName.split(' ').filter(n => n).length < 2) {
                refereeErrors.name = 'Por favor, insira nome e sobrenome.';
            }

            if (!refereePhone) {
                refereeErrors.phone = 'Telefone é obrigatório.';
            } else if (refereePhone.length < 10) {
                refereeErrors.phone = 'Telefone deve ter 10 ou 11 dígitos.';
            }

            if (referee.email.trim() && !emailRegex.test(referee.email.trim())) {
                refereeErrors.email = 'Formato de e-mail inválido.';
            }

            if (refereeName.toLowerCase() && refereeName.toLowerCase() === referrerName.toLowerCase()) refereeErrors.name = 'Indicado não pode ter o mesmo nome do indicador.';
            if (refereePhone && refereePhone === referrerPhone) refereeErrors.phone = 'Indicado não pode ter o mesmo telefone do indicador.';
            if (refereeEmail && referrerEmail && refereeEmail === referrerEmail) refereeErrors.email = 'Indicado não pode ter o mesmo e-mail do indicador.';

            if (refereeName && seenNames.has(refereeName.toLowerCase())) refereeErrors.name = 'Este nome já foi indicado.';
            seenNames.add(refereeName.toLowerCase());

            if (refereePhone && seenPhones.has(refereePhone)) refereeErrors.phone = 'Este telefone já foi indicado.';
            seenPhones.add(refereePhone);

            if (refereeEmail && seenEmails.has(refereeEmail)) refereeErrors.email = 'Este e-mail já foi indicado.';
            if(refereeEmail) seenEmails.add(refereeEmail);

            if (Object.keys(refereeErrors).length > 0) {
                newErrors.referees[referee.id] = refereeErrors;
            }
        });

        if (!termsAccepted) newErrors.terms = 'Você precisa aceitar os termos.';
        
        setErrors(newErrors);
        return !newErrors.referrerName && !newErrors.referrerPhone && !newErrors.referrerEmail && Object.keys(newErrors.referees).length === 0 && !newErrors.terms;
    };
  
  // Executa o caminho necessário para mandar o e-mail de confirmação para o indivíduo indicado.
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        const formData = new FormData();
        
        const refereeEntries = [
            { name: 'entry.676658909', email: 'entry.503209336' },
            { name: 'entry.2067776328', email: 'entry.1391392257' },
            { name: 'entry.1507159361', email: 'entry.130212510' },
            { name: 'entry.428275547', email: 'entry.1060054256' },
            { name: 'entry.419113000', email: 'entry.671860179' }
        ];
        
        // Adiciona os dados do INDICADOR (apenas nome e e-mail).
        formData.append('entry.1426780992', referrerData.name);
        formData.append('entry.154486872', referrerData.email);

        // Adiciona os dados dos INDICADOS (apenas nome e e-mail).
        referees.forEach((referee, index) => {
            if (refereeEntries[index]) {
                formData.append(refereeEntries[index].name, referee.name);
                formData.append(refereeEntries[index].email, referee.email);
            }
        });

        const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
        
        try {
            await fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });
        } catch (error) {
            console.error('Erro ao submeter para o Google Form:', error);
        }

        setSubmittedData(JSON.stringify({ referrer: referrerData, referees }));
        setIsModalOpen(true);
      }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setReferrerData({ name: '', phone: '', email: '' });
        setReferees([{ id: Date.now(), name: '', phone: '', email: '' }]);
        setTermsAccepted(false);
        setErrors({});
    };
  
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Indique e Ganhe</h2>
            <p className="text-gray-600 mt-2">Indique amigos e ganhe descontos em seus cuidados.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-10">
            <ReferrerForm referrerData={referrerData} setReferrerData={setReferrerData} errors={errors} />
            <fieldset>
              <div className="flex justify-between items-center border-b-2 border-[#00adbd] pb-2 mb-6">
                <legend className="text-2xl font-semibold text-gray-800 whitespace-nowrap">Seus Indicados</legend>
                <Button onClick={handleAddReferee} disabled={referees.length >= MAX_REFEREES} className="text-sm !w-auto">
                  <PlusIcon />
                  Adicionar
                </Button>
              </div>
              <div className="space-y-6">
                {referees.map((referee, index) => (
                  <RefereeForm key={referee.id} id={referee.id} refereeData={referee} onDataChange={handleRefereeDataChange} onRemove={handleRemoveReferee} errors={errors.referees?.[referee.id] || {}} index={index} />
                ))}
              </div>
              {referees.length >= MAX_REFEREES && ( <p className="text-amber-600 text-sm mt-4 text-center">Você atingiu o limite de 5 indicações.</p> )}
            </fieldset>
            <TermsAndConditions isChecked={termsAccepted} setIsChecked={setTermsAccepted} errors={errors} />
            <div className="text-center pt-4">
              <Button type="submit" className="md:!w-auto text-lg">
                Enviar Indicações
              </Button>
            </div>
          </form>
          {submittedData && (
              <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Dados Salvos (Simulação JSON)</h2>
                  <div className="bg-gray-800 text-green-400 p-6 rounded-lg shadow-lg font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                      <code>{submittedData}</code>
                  </div>
              </div>
          )}
        </main>
        <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} referrerName={referrerData.name} />
      </div>
    );
};
export default IndicateAndWinPage;
