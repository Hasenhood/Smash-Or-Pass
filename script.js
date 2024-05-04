document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const resultsList = document.querySelector('.results-list');

    let currentCardIndex = 0;
    const results = { smash: [], pass: [] };

    function showNextCard() {
        if (currentCardIndex < cards.length) {
            cards[currentCardIndex].style.display = 'none';
            currentCardIndex++;
            if (currentCardIndex < cards.length) {
                cards[currentCardIndex].style.display = 'block';
            } else {
                showResults();
            }
        }
    }

    function showResults() {
        cards.forEach(card => card.style.display = 'none');
        const smashList = document.createElement('li');
        smashList.textContent = 'Smash: ' + results.smash.join(', ');
        resultsList.appendChild(smashList);
        const passList = document.createElement('li');
        passList.textContent = 'Pass: ' + results.pass.join(', ');
        resultsList.appendChild(passList);
        resultsList.style.display = 'block';
    }

    cards.forEach(card => {
        card.style.display = 'none';
        card.querySelector('.smash').addEventListener('click', function() {
            results.smash.push(card.querySelector('h2').textContent);
            showNextCard();
        });
        card.querySelector('.pass').addEventListener('click', function() {
            results.pass.push(card.querySelector('h2').textContent);
            showNextCard();
        });
    });

    cards[currentCardIndex].style.display = 'block';
});
