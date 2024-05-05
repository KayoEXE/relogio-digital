// Define a função chamada updateClock
function updateClock() {
    // Cria um objeto Date que armazena a data e hora atuais
    const now = new Date();

    // Obtém a hora atual, converte para string e garante que tenha dois dígitos
    let hours = now.getHours().toString().padStart(2, '0');

    // Obtém os minutos atuais, converte para string e garante que tenha dois dígitos
    let minutes = now.getMinutes().toString().padStart(2, '0');

    // Obtém os segundos atuais, converte para string e garante que tenha dois dígitos
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Obtém o dia do mês atual, converte para string e garante que tenha dois dígitos
    let day = now.getDate().toString().padStart(2, '0');

    // Obtém o mês atual, ajusta para a numeração humana (1-12), converte para string e garante que tenha dois dígitos
    let month = (now.getMonth() + 1).toString().padStart(2, '0');

    // Obtém o ano atual
    let year = now.getFullYear();

    // Atualiza o texto do elemento com ID 'clock' para mostrar a hora atual formatada
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;

    // Atualiza o texto do elemento com ID 'date' para mostrar a data atual formatada
    document.getElementById('date').innerText = `${day}/${month}/${year}`;

    // Obtém a saudação apropriada para a hora atual e atualiza o texto do elemento com ID 'greeting'
    document.getElementById('greeting').innerText = getGreeting(hours);
}

// Define a função chamada getGreeting, que retorna uma saudação baseada na hora do dia
function getGreeting(hours) {
    // Converte a string de horas para um número inteiro
    hours = parseInt(hours, 10);

    // Condicional para determinar a saudação adequada baseada na hora
    if (hours < 12) {
        // Retorna "Bom dia!" se for antes do meio-dia
        return "Bom dia!";
    } else if (hours < 18) {
        // Retorna "Boa tarde!" se for antes das 18h
        return "Boa tarde!";
    } else {
        // Retorna "Boa noite!" se for depois das 18h
        return "Boa noite!";
    }
}


// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // inicializa o relógio imediatamente
