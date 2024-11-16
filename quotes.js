document.getElementById('quoteForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const projectDetails = document.getElementById('projectDetails').value;
    const budget = document.getElementById('budget').value;

    const quote = { id: Date.now(), clientName, projectDetails, budget };
    const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    storedQuotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(storedQuotes));

    alert(`Orçamento enviado para ${clientName}!`);
    document.getElementById('quoteForm').reset();
    renderQuotes();
});

function renderQuotes() {
    const quoteList = document.getElementById('quoteList');
    const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];

    if (quoteList) {
        quoteList.innerHTML = '';
        storedQuotes.forEach(quote => {
            const li = document.createElement('li');
            li.textContent = `${quote.clientName} - R$${quote.budget}`;
            quoteList.appendChild(li);
        });
    }
}

renderQuotes();