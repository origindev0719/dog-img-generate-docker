# Project Title

Dog Image Random Generate by Breeds

# Installing

1. Clone the repo: `git clone https://github.com/andre-silva0716/dog-image-generator.git`
2. Move to the project directory: `cd your-repo-url`
3. Install dependencies: `npm install` or `npm install --force`
4. Start the server: `npm start`

# Architecture of the Project

- `BreedListComponent`: Displays a list of dog breeds fetched from the API. When a breed is selected, it calls the `updateDogData` action to update the selected breed in the context.
- `DogImageComponent`: Displays an image of a dog of the selected breed. It also has a button that, when clicked, calls the `updateDogData` action to fetch a new image of the selected breed.
- `ProtocolComponent`: This is the main layout component that uses the `BreedListComponent` and `DogImageComponent`.
- `AppRouter`: Sets up the routing for the application and wraps the main `ProtocolComponent` in the `ProtocolProvider` to provide context.

# Main Tech Stacks

1. React
2. Typescript
3. Tailwind CSS
4. Context API
5. Jest
6. Docker

# Testing

- *BreedListComponent*: The tests for this component check that the `getDogAllImages` action is called when the component is mounted. This ensures that the list of dog breeds is fetched from the API as soon as the component is displayed.

- *DogImageComponent*: The tests for this component verify that it renders the breed title, image, and a button. It also checks that the `updateDogData` action is called when the button is clicked. This ensures that a new image is fetched when the button is clicked.

# How to run

- Clone the repository

- Navigate to the project directory

- npm install or npm install --legacy-peer-deps

- npm start

# Deploying the dockerized task

1. Clone this repository to local machine.
2. Build the Docker image.
 - docker build -t dockerized-react-app
3. Run the Docker container.
 - docker run -p 3000:3000 dockerized-react-app