// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if ((msg.body.match(/(Início)/i) || msg.body.match(/(Inicio)/i) || msg.body.match(/(início)/i) || msg.body.match(/(inicio)/i)) && msg.from.endsWith('@c.us')) {
        //const chat = await msg.getChat();
        //await delay(3000); //delay de 3 segundos
        //await chat.sendStateTyping(); // Simulando Digitação
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '\nSou a Assistente Virtual Casa de Cipriano. Como posso te ajudar hoje? \n\n Por favor, digite uma das opções abaixo:\n\n1 - Sobre nossa casa\n2 - Agendamento de Jogo de Búzios\n3 - Atendimento com Mizael da Estrada\n\n *Para reiniciar o atendimento, digite Início*' ); //Primeira mensagem de texto
    }

    //1 - Como funciona
    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await client.sendMessage(msg.from, 'Com mais de 20 anos na caminhada espiritual, nosso sacerdote "Pai Cipriano" tem uma vasta experiência na Umbanda e na Quimbanda Tradicional Familiar.\n\nVenha fazer uma visita. Endereço: Estrada Iaraquã, numero 1620 - Campo Grande');
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await client.sendMessage(msg.from, 'Todas as segundas e quartas temos  Jogo de Búzios \n\n Para agendar sua consulta, acesse o link: https://tinyurl.com/yns929cj');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await client.sendMessage(msg.from, 'Todas as terças e quintas, temos consulta com Mizael da Estrada. \n\n Para agendar sua consulta, acesse o link: https://tinyurl.com/yns929cj');
    }
});