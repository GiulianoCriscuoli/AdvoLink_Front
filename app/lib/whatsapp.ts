// Número que recebe as mensagens: DDI + DDD + número, só dígitos.
export const WHATSAPP_NUMBER = "5500000000000";

export function whatsappLink(text = "Olá! Vim pelo site do AdvoLink.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
