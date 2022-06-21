// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.




// Creo l'array di oggetti che rappresenteranno ciascun post:
const postElements = [
    {
        id: 1,
        name: 'Giuseppe Verdi',
        picsProfile:'https://unsplash.it/300/300?image=66',
        date: '06-18-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet dignissimos laudantium quidem maxime, iste totam, pariatur molestias animi, labore voluptas possimus voluptatem consectetur placeat incidunt unde quas beatae voluptate.',
        image:'https://i.picsum.photos/id/100/600/300.jpg?hmac=p9e3SNrtRq-rxECA36kiO8zTjqYlRLytPHZIJWn8YGs',
        likes:'837'
    },
    {
        id: 2,
        name: 'Mario Rossi',
        picsProfile:'https://unsplash.it/300/300?image=53',
        date: '06-19-2022',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque possimus veritatis dignissimos vero assumenda fugiat cupiditate velit eligendi id, delectus, rerum quo labore necessitatibus unde quae alias corporis eaque placeat!',
        image:'https://i.picsum.photos/id/200/600/300.jpg?hmac=S-urqDczGFmPMS3Qm1uC0PZrWuCgGHmiEkwLNVadQK0',
        likes:'452'
    },
    {
        id: 3,
        name: 'Carlo Bianchi',
        picsProfile:'https://unsplash.it/300/300?image=63',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eum, sapiente, rem exercitationem reiciendis iusto itaque labore ex distinctio nostrum dolores neque. Aspernatur asperiores accusantium unde perferendis iure repellat esse.',
        image:'https://i.picsum.photos/id/83/600/300.jpg?hmac=uRytwnemlALk3_0YaCI64vnGp6LfHOeL5ZYlo_50sC0',
        likes:'725'
    },
    {
        id: 4,
        name: 'Alfredo Nero',
        picsProfile:'https://unsplash.it/300/300?image=38',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate dolorum ex! Aut repellendus eum rem tempore, ipsa optio magnam ad dolore alias voluptas. Nemo tenetur excepturi rem ducimus totam!',
        image:'https://i.picsum.photos/id/28/600/300.jpg?hmac=qff9TJVVoguAsM4oYT2isXBnCfma0HL3rqIRIasvIEM',
        likes:'672'
    },
    {
        id: 5,
        name: 'Gianluca Porpora',
        picsProfile:'https://unsplash.it/300/300?image=42',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus animi quos voluptate eius praesentium repudiandae aliquid voluptatibus. Debitis, asperiores! Deserunt officiis ratione totam eos recusandae, assumenda quae dolore veniam.',
        image: null,
        likes:'75'
    },
];

// Invoco la funzione:
drawallPosts(postElements)

// ------------------------------------------- //
//                EVENT LISTENERS              //
// ------------------------------------------- //

// Seleziono tutti gli elementi del DOM con le seguenti classi:
const allLikeBtn = document.querySelectorAll('.js-like-button');
const allLikesCounter = document.querySelectorAll('.js-likes-counter');

// Eseguo un ciclo for per consulterà tutti gli elementi con la classe selezionata:
for(let i = 0; i < allLikeBtn.length; i++) {

    // dichiaro la variabile che conterrà il singolo elemento consultato dal ciclo for:
    const thisLikeBtn = allLikeBtn[i];

    // Associo un evento al rispettivo handler:
    thisLikeBtn.addEventListener('click', function(event) {

        // Elimino il comportamento di default del browser:
        event.preventDefault();

        // Se l'elemento non contiene la classe 'like-button--liked':
        this.classList.contains('like-button--liked') 

            // Aggiungo la classe 'like-button--liked':
            this.classList.add('like-button--liked');

            // Dichiaro la variabile che conterrà il singolo contatore dei likes:
            const relatedLikeCounter = allLikesCounter[i];

            // Trasformo la stringa in valore numerico:
            let relatedNumber = parseInt(relatedLikeCounter.innerHTML);

            // Incremento di 1:
            relatedNumber++;

            // Stampo il numero incrementato  dentro relatedLikeCounter:
            relatedLikeCounter.innerHTML = relatedNumber;
    });
}

// ------------------------------------------- //
//                 DOM FUNCTIONS               //
// ------------------------------------------- //

// Stampo in pagina ogni elemento di postElements:
function drawallPosts(postArray) {

    // seleziono la classe nel DOM che successivamente verrà popolata:
    const post = document.querySelector('.post');

    // Eseguo un ciclo for per consulterà tutto l'array dei post:
    for(let i = 0; i <postArray.length; i++) {

        // dichiaro la variabile che conterrà il singolo post consultato dal ciclo for:
        const thisPost = postArray[i];

        // con la destrutturazione conservo tutte le key:
        const { id, name, picsProfile, date, text, image, likes} = thisPost;
        // Creo il template per ogni post da inserire e lo stampo:
        const postTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${picsProfile}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                ${image === null ? '<span>no picture</span>' : `<img src="${image}" alt="">`}
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        // concateno i post:
        post.innerHTML += postTemplate;
    }
}

