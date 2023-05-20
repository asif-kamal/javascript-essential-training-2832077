/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const updateHouse = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(house);
    console.info(update);
}

const house = {
    name: "Kamal Household",
    rooms: {
        basement: {
            bathroom: 1,
            den: 1,
        },
        groundFloor: {
            bathroom: 1,
            livingRoom: 1,
            familyRoom: 1,
            kitchen: 1,
            diningRoom: 1
        },
        secondFloor: {
            bathroom: 1,
            bedroom: 3
        },
        attic: "storage space"
    },
    frontDoorOpen: false,
    toggleFrontDoor: (doorStatus) => {
        this.frontDoorOpen = doorStatus;
        updateHouse('Door status changed')
    }
}

const markup = (house) => {
    return `
    <div>
    <h3>${house.name}
    <ul>
        <li>Number of rooms in basement: den: ${house.rooms.basement.den}, bathroom: ${house.rooms.basement.bathroom}</li>
        <li>Number of rooms on ground floor: bathroom: ${house.rooms.groundFloor.bathroom}, living room: ${house.rooms.groundFloor.livingRoom},
        family room: ${house.rooms.groundFloor.familyRoom}, kitchen: ${house.rooms.groundFloor.kitchen}, dining room: ${house.rooms.groundFloor.diningRoom} </li>
        <li>Number of rooms on second floor: bathroom: ${house.rooms.secondFloor.bathroom}, bedrooms ${house.rooms.secondFloor.bedroom}</li>
        <li>Attic: ${house.rooms.attic}</li>
        <li>Front door is: ${house.frontDoorOpen ? "Open" : "Closed"}</li>
    </ul>
    <div>`;
};

const main = document.createElement('main');
main.innerHTML = markup(house);
document.body.append(main);

console.log(house);