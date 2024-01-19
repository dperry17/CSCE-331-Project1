// Sample data for dog breeds
const dogBreeds = [
    { name: "Labrador Retriever", image: "labrador.jpg", description: "Friendly and outgoing. Labs are one of the most popular dog breeds." },
    { name: "German Shepherd", image: "german_shepherd.jpg", description: "Intelligent and versatile. German Shepherds are often used as police and service dogs." },
    { name: "Golden Retriever", image: "golden_retriever.jpg", description: "Intelligent and friendly. Goldens are known for their gentle temperament." },
];

// Function to dynamically generate dog breed content
function generateDogList() {
    const dogListElement = document.getElementById("dogList");

    dogBreeds.forEach(breed => {
        const dogCard = document.createElement("div");
        dogCard.classList.add("dog-card");

        const imgElement = document.createElement("img");
        imgElement.src = breed.image;
        imgElement.alt = breed.name;

        const breedName = document.createElement("h3");
        breedName.textContent = breed.name;

        const description = document.createElement("p");
        description.textContent = breed.description;

        dogCard.appendChild(imgElement);
        dogCard.appendChild(breedName);
        dogCard.appendChild(description);

        dogListElement.appendChild(dogCard);
    });
}

// Call the function to generate dog breed content
generateDogList();
