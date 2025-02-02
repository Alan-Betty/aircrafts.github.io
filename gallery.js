const aircraftData = [
    {
        name: "P-51 Mustang",
        img: "./Images/82140.jpg",
        description: "A legendary WWII fighter with outstanding performance and range.",
    },
    {
        name: "F-22 Raptor",
        img: "./Images/F22 Raptor.jpg",
        description: "A fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter aircraft.",
    },
    {
        name: "F-35 Lightning II",
        img: "./Images/F35 Lightning.jpg",
        description: "A family of single-seat, single-engine, all-weather stealth multirole fighters.",
    },
    {
        name: "B-2 Spirit",
        img: "./Images/B2 Spirit.jpg",
        description: "An American heavy strategic bomber, featuring low observable stealth technology.",
    },
    {
        name: "F-14 Tomcat",
        img: "./Images/F14 Tomcat.jpg",
        description: "A supersonic, twin-engine, two-seat, variable-sweep wing fighter aircraft.",
    },
    {
        name: "F-15 Eagle",
        img: "./Images/F15 Eagle.jpg",
        description: "An American twin-engine, all-weather tactical fighter aircraft.",
    },
    {
        name: "F-16 Fighting Falcon",
        img: "./Images/F16 Fighting Falcon.jpg",
        description: "A single-engine supersonic multirole fighter aircraft originally developed by General Dynamics.",
    },
    {
        name: "A-10 Thunderbolt II",
        img: "./Images/A10 Thunderbolt.jpg",
        description: "A single-seat, twin turbofan engine, straight wing jet aircraft developed by Fairchild-Republic.",
    },
    {
        name: "SR-71 Blackbird",
        img: "./Images/SR71 Blackbird.jpg",
        description: "A long-range, advanced, strategic reconnaissance aircraft that was capable of speeds over Mach 3.",
    },
    {
        name: "B-1 Lancer",
        img: "./Images/B1 Lancer.jpg",
        description: "A supersonic variable-sweep wing, heavy bomber used by the United States Air Force.",
    },
    {
        name: "C-130 Super Hercules",
        img: "./Images/C130 Super Hercules.jpg",
        description: "A four-engine turboprop military transport aircraft designed and built by Lockheed.",
    },
    {
        name: "F-117 Nighthawk",
        img: "./Images/F117 Nighthawk.jpg",
        description: "A single-seat, twin-engine stealth attack aircraft that was developed by Lockheed's secretive Skunk Works division.",
    },
    {
        name: "B-52 Stratofortress",
        img: "./Images/B52 Stratofortress.jpg",
        description: "An American long-range, subsonic, jet-powered strategic bomber.",
    },
    {
        name: "F-4 Phantom II",
        img: "./Images/F4 Phantom.jpg",
        description: "A tandem two-seat, twin-engine, all-weather, long-range supersonic jet interceptor and fighter-bomber.",
    },
    {
        name: "F-18 Hornet",
        img: "./Images/F18 Hornet.jpeg",
        description: "A twin-engine, supersonic, all-weather, carrier-capable, multirole combat jet.",
    },
    {
        name: "F-5 Tiger II",
        img: "./Images/f5-tiger.jpg",
        description: "A family of supersonic light fighter aircraft designed and built by Northrop.",
    },
    {
        name: "F-8 Crusader",
        img: "./Images/f8-crusader.jpg",
        description: "A single-engine, supersonic, carrier-based air superiority jet aircraft built by Vought.",
    },
    {
        name: "F-86 Sabre",
        img: "./Images/f86-sabre.jpg",
        description: "A transonic jet fighter aircraft developed by North American Aviation.",
    },
    {
        name: "F-100 Super Sabre",
        img: "./Images/f100-super-sabre.jpg",
        description: "An American supersonic jet fighter aircraft that served with the United States Air Force.",
    },
    {
        name: "F-101 Voodoo",
        img: "./Images/f101-voodoo.jpg",
        description: "A supersonic jet fighter designed by McDonnell Aircraft.",
    },
    {
        name: "F-102 Delta Dagger",
        img: "./Images/f102-delta-dagger.jpg",
        description: "An American interceptor aircraft that was built as part of the backbone of the United States Air Force's air defenses.",
    },
    {
        name: "F-104 Starfighter",
        img: "./Images/f104-starfighter.jpg",
        description: "An American single-engine, supersonic interceptor aircraft which was extensively deployed as a fighter-bomber during the Cold War.",
    },
    {
        name: "F-105 Thunderchief",
        img: "./Images/f105-thunderchief.jpg",
        description: "An American supersonic fighter-bomber used by the United States Air Force.",
    },
    {
        name: "F-106 Delta Dart",
        img: "./Images/f106-delta-dart.jpg",
        description: "An American interceptor aircraft designed as the primary all-weather interceptor aircraft for the United States Air Force.",
    },
    {
        name: "F-111 Aardvark",
        img: "./Images/f111-aardvark.jpg",
        description: "A medium-range, multipurpose tactical aircraft that also filled the roles of strategic bomber, reconnaissance, and electronic warfare in its various versions.",
    },
    {
        name: "F-117 Nighthawk",
        img: "./Images/f117-nighthawk.jpg",
        description: "A single-seat, twin-engine stealth attack aircraft that was developed by Lockheed's secretive Skunk Works division.",
    },
    {
        name: "B-29 Superfortress",
        img: "./Images/b29-superfortress.jpg",
        description: "A four-engine propeller-driven heavy bomber designed by Boeing.",
    },
    {
        name: "B-36 Peacemaker",
        img: "./Images/b36-peacemaker.jpg",
        description: "A strategic bomber built by Convair and operated by the United States Air Force.",
    },
    {
        name: "B-47 Stratojet",
        img: "./Images/b47-stratojet.jpg",
        description: "A long-range, six-engine, turbojet-powered strategic bomber designed to fly at high subsonic speed and at high altitude.",
    },
    {
        name: "B-58 Hustler",
        img: "./Images/b58-hustler.jpg",
        description: "The first operational supersonic jet bomber capable of Mach 2 flight.",
    },
    {
        name: "C-5 Galaxy",
        img: "./Images/C5 Galaxy.jpg",
        description: "A large military transport aircraft originally designed and built by Lockheed, and now maintained and upgraded by its successor, Lockheed Martin.",
    },
    {
        name: "C-17 Globemaster III",
        img: "./Images/C17 Globemaster.jpg",
        description: "A large military transport aircraft developed by McDonnell Douglas and Boeing.",
    },
    {
        name: "KC-135 Stratotanker",
        img: "./Images/KC135 Stratotanker.jpg",
        description: "An American military aerial refueling aircraft developed from the Boeing 367-80 prototype.",
    },
    {
        name: "E-3 Sentry",
        img: "./Images/e3-sentry.jpg",
        description: "An American airborne early warning and control (AEW&C) aircraft developed by Boeing.",
    },
    {
        name: "E-8 Joint STARS",
        img: "./Images/e8-jstars.jpg",
        description: "An airborne battle management, command and control, intelligence, surveillance and reconnaissance platform.",
    },
    {
        name: "P-3 Orion",
        img: "./Images/p3-orion.jpg",
        description: "A four-engine turboprop anti-submarine and maritime surveillance aircraft developed for the United States Navy.",
    },
    {
        name: "P-8 Poseidon",
        img: "./Images/p8-poseidon.jpg",
        description: "A military aircraft developed and produced by Boeing Defense, Space & Security, modified from the 737-800ERX.",
    },
    {
        name: "U-2 Dragon Lady",
        img: "./Images/u2 Dragon Lady.jpg",
        description: "An American single-jet engine, ultra-high altitude reconnaissance aircraft operated by the United States Air Force.",
    },
    {
        name: "C-141 Starlifter",
        img: "./Images/c141-starlifter.jpg",
        description: "A military strategic airlifter introduced to replace slower propeller driven cargo planes.",
    },
    {
        name: "C-123 Provider",
        img: "./Images/c123-provider.jpg",
        description: "An American military transport aircraft designed by Chase Aircraft and subsequently built by Fairchild Aircraft for the United States Air Force.",
    },
    {
        name: "C-47 Skytrain",
        img: "./Images/c47-skytrain.jpg",
        description: "A military transport aircraft developed from the civilian Douglas DC-3 airliner.",
    },
    {
        name: "C-54 Skymaster",
        img: "./Images/c54-skymaster.jpg",
        description: "A four-engine propeller-driven military transport aircraft developed by Douglas Aircraft Company.",
    },
    {
        name: "C-119 Flying Boxcar",
        img: "./Images/c119-flying-boxcar.jpg",
        description: "An American military transport aircraft designed to carry cargo, personnel, litter patients, and mechanized equipment, and to drop cargo and troops by parachute.",
    },
    {
        name: "C-124 Globemaster II",
        img: "./Images/C124 Globemaster.jpg",
        description: "An American heavy-lift cargo aircraft built by Douglas Aircraft Company.",
    },
    {
        name: "C-131 Samaritan",
        img: "./Images/c131-samaritan.jpg",
        description: "A military transport version of the Convair CV-240 family of airliners.",
    },
    {
        name: "C-133 Cargomaster",
        img: "./Images/C133 Cargomaster.jpg",
        description: "A large cargo aircraft built by the Douglas Aircraft Company between 1956 and 1961.",
    },
    {
        name: "C-135 Stratolifter",
        img: "./Images/C135 Stratolifter.jpg",
        description: "A transport aircraft derived from the Boeing 707 jet airliner.",
    },
    {
        name: "C-141 Starlifter",
        img: "./Images/c141-starlifter.jpg",
        description: "A military strategic airlifter introduced to replace slower propeller driven cargo planes.",
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