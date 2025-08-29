// ========================================================================
// FUNÇÃO: Linka a API do Gemini para gerar uma resposta personalizada para o usuário
// ========================================================================
import React, { useState, useEffect } from 'react';
import { CheckIcon } from '../common/Icons';
import Button from '../common/Button';

const SuccessModal = ({ isOpen, onClose, referrerName }) => {
    const [aiMessage, setAiMessage] = useState('Gerando mensagem de agradecimento...');

    useEffect(() => {
        if (isOpen && referrerName) {
            const generateMessage = async () => {
                try {
                    const systemPrompt = "Você é um assistente amigável da Clínica da Cidade. Sua tarefa é gerar uma mensagem de agradecimento calorosa e personalizada para um usuário que acabou de indicar amigos para a clínica. A mensagem deve ser curta, amigável e agradecer ao usuário pelo nome por ajudar a comunidade a crescer.";
                    const userQuery = `Gere uma mensagem de agradecimento para ${referrerName}.`;
                    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
                    const payload = { contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] }, };
                    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    const result = await response.json();
                    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                    setAiMessage(text || "Obrigado por sua indicação! Agradecemos por nos ajudar a crescer.");
                } catch (error) {
                    console.error("Erro ao gerar mensagem da IA:", error);
                    setAiMessage("Obrigado por sua indicação! Agradecemos muito por nos ajudar a cuidar de mais pessoas.");
                }
            };
            generateMessage();
        }
    }, [isOpen, referrerName]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm mx-auto">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <CheckIcon />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Indicação Enviada!</h3>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{aiMessage}</p>
                </div>
                <div className="mt-6">
                    <Button onClick={onClose} className="text-base">
                        Fechar
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default SuccessModal;
