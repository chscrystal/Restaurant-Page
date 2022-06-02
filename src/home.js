

export function home() {
    //description
    const container = document.querySelector('#content');
    const home = document.createElement('main');
    home.classList.add('tabContent');
    home.id = "Home";
    container.appendChild(home);

    const description = document.createElement('div');
    home.appendChild(description);
    description.id = "description";
    description.innerText = "Korean fried rice, with seaweed, cheese, chicken, kimchi."

    //contact info
    const contactInfo = document.createElement('div');
    home.appendChild(contactInfo);

    const phoneNum = document.createElement('p');
    phoneNum.innerText = "Phone number: 9873849034";
    contactInfo.appendChild(phoneNum);

    const address = document.createElement('p');
    address.innerText = "Address: 1 Gloucestor Road, Wanchai, HK";
    contactInfo.appendChild(address);

    const openingHr = document.createElement('p');
    openingHr.innerText = "Opening Hours: Monday: Rest Tuesday to Sunday: 11am - 11pm";
    contactInfo.appendChild(openingHr);
}