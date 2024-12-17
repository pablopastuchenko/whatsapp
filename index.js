require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

// Enviar mensagem de template
async function enviarMensagemTemplate() {
    const resposta = await axios({
        url: 'https://graph.facebook.com/v20.0/seu_numero/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: 'numero_de_telefone',
            type: 'template',
            template: {
                name: 'desconto', // Nome do template configurado no WhatsApp
                language: {
                    code: 'pt_BR' 
                },
                components: [
                    {
                        type: 'header',
                        parameters: [
                            {
                                type: 'text',
                                text: 'João da Silva' // Nome personalizado
                            }
                        ]
                    },
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: '50' // Exemplo de valor dinâmico
                            }
                        ]
                    }
                ]
            }
        })
    })

    console.log(resposta.data)
}

// Enviar mensagem de texto
async function enviarMensagemTexto() {
    const resposta = await axios({
        url: 'https://graph.facebook.com/v20.0/seu_numero/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: 'numero_de_telefone',
            type: 'text',
            text: {
                body: 'Esta é uma mensagem de texto' // Corpo da mensagem em português
            }
        })
    })

    console.log(resposta.data)
}

// Enviar mensagem com mídia
async function enviarMensagemMidia() {
    const resposta = await axios({
        url: 'https://graph.facebook.com/v20.0/seu_numero/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: 'numero_de_telefone',
            type: 'image',
            image: {
                //link: 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io',
                id: '512126264622813', // ID da mídia já enviada
                caption: 'Esta é uma mensagem com mídia' // Legenda da imagem
            }
        })
    })

    console.log(resposta.data)
}

// Fazer upload de imagem
async function fazerUploadImagem() {
    const dados = new FormData()
    dados.append('messaging_product', 'whatsapp')
    dados.append('file', fs.createReadStream(process.cwd() + '/logo.png'), { contentType: 'image/png' })
    dados.append('type', 'image/png')

    const resposta = await axios({
        url: 'https://graph.facebook.com/v20.0/phone_number_id/media',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
        },
        data: dados
    })

    console.log(resposta.data)
}

// Chame as funções desejadas descomentando-as abaixo:
// enviarMensagemTemplate()
// enviarMensagemTexto()
// enviarMensagemMidia()
// fazerUploadImagem()
