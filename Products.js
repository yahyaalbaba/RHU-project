let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "item001",
        name: "Harry Potter and the Sorcerer’s Stone",
        price: 20,
        description: "A young boy discovers he's a wizard and enters a magical world full of adventure and danger.",
        img: "Harry potter.jpg",
        author: "J.K. Rowling",
        longDescription: "Harry Potter has spent eleven miserable years living with the Dursleys, his cruel aunt and uncle. On his eleventh birthday, he discovers that he is actually a wizard and has been accepted to Hogwarts School of Witchcraft and Wizardry. There, he makes close friends, uncovers secrets about his past, and faces a dark enemy who seeks to return to power. The beginning of the beloved fantasy series, this book sets the stage for a magical journey that has enchanted readers around the world."
    },
    {
        id: "item002",
        name: "The Alchemist",
        price: 20,
        description: "A shepherd boy travels to find treasure and discovers his true purpose along the way.",
        img: "The alchemist.jpg",
        author: "Paulo Coelho",
        longDescription: "Santiago, a young Andalusian shepherd, has a recurring dream about finding treasure near the Egyptian pyramids. Leaving everything behind, he follows the path of destiny and meets a series of characters—a king, an Englishman, and an alchemist—who guide him through life's deeper lessons. Through trials and adventures, Santiago learns that true treasure lies in discovering one's personal legend. The Alchemist is a spiritual and philosophical tale about following your dreams and listening to your heart."
    },
    {
        id: "item003",
        name: "The Fault in Our Stars",
        price: 20,
        description: "Two teenagers with cancer fall in love and explore the beauty and pain of life.",
        img: "stars.jpg",
        author: "John Green",
        longDescription: "Hazel Grace Lancaster has terminal cancer and spends her days watching reality TV and rereading her favorite novel. When she meets Augustus Waters at a support group, her world changes. Augustus, charismatic and philosophical, challenges her to live fully, even in the shadow of death. Together, they embark on a journey to meet Hazel’s favorite author and confront the fragile nature of life and love. This bestselling novel is deeply emotional, witty, and unforgettable."
    },
    {
        id: "item004",
        name: "The Girl on the Train",
        price: 20,
        description: "A woman becomes entangled in a mystery after witnessing something shocking on her daily train ride.",
        img: "The Girl on the Train.jpg",
        author: "Paula Hawkins",
        longDescription: "Rachel takes the same commuter train every day, watching the same houses and imagining the lives of the people inside. One day, she sees something disturbing from the train window. Shortly after, a woman goes missing. As Rachel becomes obsessed with the case, she is drawn into a web of secrets, lies, and danger. A psychological thriller that keeps readers on edge, The Girl on the Train explores unreliable narration, obsession, and the darker side of suburban life."
    },
    {
        id: "item005",
        name: "The Hunger Games",
        price: 20,
        description: "In a dystopian world, a girl must fight for her life in a televised death match.",
        img: "The Hunger Games.jpg",
        author: "Suzanne Collins",
        longDescription: "In the nation of Panem, the Capitol forces its districts to send one boy and one girl to fight to the death in the annual Hunger Games. When 16-year-old Katniss Everdeen volunteers to replace her sister, she enters a brutal arena where survival means everything. With courage, strategy, and unexpected alliances, Katniss becomes a symbol of resistance. The Hunger Games is a gripping story of rebellion, survival, and sacrifice that launched a global phenomenon."
    },
    {
        id: "item006",
        name: "The Subtle Art of Not Giving a F*ck",
        price: 20,
        description: "A no-nonsense guide to living a meaningful life by focusing on what truly matters.",
        img: "The Subtle Art.jpg",
        author: "Mark Manson",
        longDescription: "Mark Manson delivers a brutally honest self-help guide that challenges conventional wisdom. Instead of trying to be positive all the time, he argues that life’s struggles give it meaning. Through humor and hard truths, Manson emphasizes the importance of setting boundaries, embracing discomfort, and choosing what to care about. With raw, real-life stories and philosophical insight, The Subtle Art of Not Giving a Fck* offers a refreshing take on personal growth in a world obsessed with positivity."
    },
    {
        id: "item007",
        name: "To Kill a Mockingbird",
        price: 20,
        description: "A young girl comes of age during a racially charged trial in the American South.",
        img: "To Kill.jpg",
        author: "Harper Lee",
        longDescription: "Set in the 1930s in the fictional town of Maycomb, Alabama, this Pulitzer Prize-winning novel follows young Scout Finch as she observes her father, Atticus, defend a black man falsely accused of raping a white woman. Through Scout's innocent eyes, readers witness the ugliness of racism, the strength of moral conviction, and the beauty of compassion. To Kill a Mockingbird is a profound story of justice, childhood, and the fight for equality that continues to resonate with readers worldwide."
    },
    {
        id: "item008",
        name: "1984",
        price: 20,
        description: "A dystopian classic where a totalitarian regime watches and controls every aspect of life.",
        img: "1984.jpg",
        author: "George Orwell",
        longDescription: "In a bleak future ruled by Big Brother and the Party, individuality is crushed and truth is manipulated. Winston Smith, a low-ranking member of the ruling Party, secretly dreams of rebellion. As he begins a forbidden romance and dares to question the system, he discovers the terrifying consequences of defying authority. 1984 is a chilling warning about surveillance, censorship, and the loss of personal freedom, making it one of the most powerful political novels of all time."
    },
    {
        id: "item010",
        name: "The Story of Art",
        price: 20,
        description: "The Story of Art by E.H. Gombrich is an accessible guide to art history.",
        img: "The Story of Art.jpg",
        author: "E.H. Gombrich",
        longDescription: "The Story of Art by E.H. Gombrich is one of the most celebrated and widely read books on the history of art. First published in 1950, it offers an engaging and thorough overview of the evolution of art across centuries, covering key periods such as the Renaissance, Baroque, and modernism. Gombrich's clear, approachable style makes complex artistic movements and ideas understandable for readers of all backgrounds. He emphasizes how art has been shaped by cultural, political, and social changes, focusing not only on famous masterpieces but also on the context in which they were created. With its accessible prose, this book serves as both a scholarly reference and a captivating introduction for anyone interested in understanding the story of art."
    }
];


let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) =>  {
        let {id, name, price, img, description} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div class="col">
            <div class="product-card">
                <img src="${img}">
                <div class="details">
                    <h2>${name}</h2>
                    <p>${description}</p>
                    <p class="price">$${price}</p>
                    <div class="buttons">
                    <button onclick="increment('${id}')" class="add-to-cart" id="add-to-cart">Add to Cart</button>
                    <a href="product-details.html" class="btn btn-success more-info" id="more-info" onclick="increment('${id}')">More Info</a>
                    </div>
                </div>
                </div>
            </div>
        `
    }).join(""));
};

generateShop();


let increment = (id) => {
    let selectedItem = shopItemsData.find(item => item.id === id);
    if (selectedItem) {
        console.log(selectedItem);
    } else {
        console.log("Item not found");
    }let search = basket.find((x) => x.id === selectedItem.id);
    
    if (search === undefined) {
        basket.push({
          selectedItem,
          item: 1,
        });
      } else {
        search.item += 1;
      }
      console.log(basket);
      localStorage.setItem("data", JSON.stringify(basket));
};


document.getElementById("more-info").addEventListener('click', () => {
    localStorage.setItem('data', JSON.stringify(basket));
})