const aircraftData = [
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "P-51 Mustang",
        img: "p51-mustang.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },

];

const gallery = document.querySelector('.gallery');
aircraftData.forEach(aircraft => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${aircraft.name}</h3>
        <img src="${aircraft.img}" alt="${aircraft.name}">
        <p>${aircraft.description}</p>
    `;
    gallery.appendChild(card);
});