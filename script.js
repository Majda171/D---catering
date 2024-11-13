const cateringCompanies = {
    justFood: (numberOfPeople) => (numberOfPeople <= 100 ? 700 : 600) * numberOfPeople,
    yourMama: (numberOfPeople) => (numberOfPeople <= 100 ? 1000 : 900) * numberOfPeople,
    flavourHaven: (numberOfPeople) => (numberOfPeople <= 100 ? 2000 : 1900) * numberOfPeople
};

const supplierNames = {
    justFood: "Just Food",
    yourMama: "Your Mama",
    flavourHaven: "Flavour Haven"
};

const createOrder = () => {
    const supplier = document.querySelector("#supplier").value;
    const numberOfPeople = parseInt(document.querySelector("#numberOfPeople").value);
    const event = document.querySelector("#event").value;
    const service = document.querySelector("#service").checked;

    if (isNaN(numberOfPeople) || numberOfPeople < 10) {
        document.querySelector("#result").innerHTML = `<span id="error-message">Zadejte platný počet hostů (minimálně 10).</span>`;
        return; 
    }

    let price = cateringCompanies[supplier](numberOfPeople);

    if (service) {
        price += numberOfPeople * 100;
    }

    const result = `<h2>Shrnutí</h2> Událost "${event}" s cateringem od ${supplierNames[supplier]} pro ${numberOfPeople} lidí za ${price} Kč.`;
    document.querySelector("#result").innerHTML = result;
}    
