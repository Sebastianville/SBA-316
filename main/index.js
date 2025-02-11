const quotes = [
    { person: 'Albert Einstein', quote: 'I have no special talents. I am only passionately curious' },
    { person: 'Michael Jordan', quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed." },
    { person: 'Dr. Seuss', quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go" },
    { person: 'Andrew Hendrixson', quote: "Anyone who has ever made anything of importance was disciplined." }
];

// Quote of the Day:
// "Strength and growth come only through continuous effort and struggle."
// -Napoleon Hill


const container = document.getElementById('quotes-container');

function iterateOver() {
    quotes.forEach(renderQuotes);
}

function renderQuotes(quoteObj) {
    
    let article = document.createElement('article');
    article.classList.add('media-post');

    
    let header = document.createElement('header');
    let h2 = document.createElement('h2');
    h2.innerHTML = `<span>${quoteObj.person}</span> says:`;
    
    //Going to change the p.textContent when clicked 
    let p = document.createElement('p');
    p.textContent = `Click me and find out what ${quoteObj.person}'s inspirational qoute is`

   
    let footer = document.createElement('footer');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('like');
    li.innerHTML = `Like! <span class="like-glyph">&#x2661;</span>`;

    
    ul.appendChild(li);
    footer.appendChild(ul);
    header.appendChild(h2);
    article.appendChild(header);
    article.appendChild(p);
    article.appendChild(footer);

    // Append article to the container
    container.appendChild(article);


    //create the addEvent Listener and Click me 
    p.addEventListener('click', event => {
        if (event.target.textContent === `Click me and find out what ${quoteObj.person}'s inspirational qoute is`) {
            event.target.textContent = quoteObj.quote
        } else { 
            event.target.textContent = `Click me and find out what ${quoteObj.person}'s inspirational qoute is`
        }
    })
}


iterateOver();