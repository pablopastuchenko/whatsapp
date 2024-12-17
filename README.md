# WhatsApp Integration API  

Este projeto é uma integração com a API oficial do WhatsApp Business, que permite enviar diferentes tipos de mensagens, como textos, templates e mídias. A aplicação foi desenvolvida utilizando **Node.js**, com suporte para gerenciamento de variáveis de ambiente via `dotenv` e requisições HTTP com a biblioteca **Axios**.  

## Funcionalidades Principais  
- **Envio de mensagens de texto:** Permite enviar mensagens diretas para números de telefone registrados.  
- **Mensagens com templates:** Suporte para envio de mensagens com templates pré-configurados na API do WhatsApp.  
- **Envio de mídia:** Suporte para envio de imagens com legendas.  
- **Upload de arquivos:** Permite fazer upload de arquivos (imagens) para obter um ID, que pode ser usado posteriormente para envio de mídia.  

## Tecnologias Utilizadas  
- **Node.js:** Plataforma principal para execução do projeto.  
- **Axios:** Para realizar as requisições HTTP à API do WhatsApp.  
- **dotenv:** Gerenciamento de variáveis de ambiente, como o token de autenticação.  
- **FormData:** Para lidar com upload de arquivos.  
- **fs:** Para manipulação de arquivos locais.  

---

## Como Executar as Funções  

### Pré-requisitos  
- Ter o **Node.js** instalado na máquina.  
- Criar uma conta no **Meta for Developers** e configurar um número de telefone para o WhatsApp Business API.  
- Obter o **whatssap token** para configurar no `.env`.  

### Configuração Inicial  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/pablopastuchenko/whatsapp.git