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

// Creo l'array di oggetti che rappresentano ciscun post:

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
        picsProfile:'https://unsplash.it/300/300?image=97',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eum, sapiente, rem exercitationem reiciendis iusto itaque labore ex distinctio nostrum dolores neque. Aspernatur asperiores accusantium unde perferendis iure repellat esse.',
        image:'https://i.picsum.photos/id/300/600/300.jpg?hmac=TqytqAXpB1rmXK7YMTnzToyE8k8PhlAbz8PO7nHMPnw',
        likes:'725'
    },
    {
        id: 4,
        name: 'Alfredo Celeste',
        picsProfile:'https://unsplash.it/300/300?image=29',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate dolorum ex! Aut repellendus eum rem tempore, ipsa optio magnam ad dolore alias voluptas. Nemo tenetur excepturi rem ducimus totam!',
        image:'https://i.picsum.photos/id/300/600/300.jpg?hmac=TqytqAXpB1rmXK7YMTnzToyE8k8PhlAbz8PO7nHMPnw',
        likes:'725'
    },
    {
        id: 5,
        name: 'Gianluca Porpora',
        picsProfile:'https://unsplash.it/300/300?image=42',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus animi quos voluptate eius praesentium repudiandae aliquid voluptatibus. Debitis, asperiores! Deserunt officiis ratione totam eos recusandae, assumenda quae dolore veniam.',
        image: null,
        likes:'725'
    },
];

// Invoco la funzione:
drawallPosts(postElements)

// ------------------------------------------- //
//                  FUNCTIONS
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
        const { name, picsProfile, date, text, image, likes} = thisPost;

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
                <img src="${image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        

    }
}

