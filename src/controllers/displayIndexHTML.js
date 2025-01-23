import { LinkCard } from "../modules/LinkCard.js";
import { TriviaCard } from "../modules/TriviaCard.js";

const card1 = {
  title: "About",
  desc1:
    "This is the about card of my imaginary online tea shop website. You can learn more about the different features in the project in the About section. You can get to the about section by clicking on the button below or the About tab at the top of the page.",
  desc2: "",
  desc3: "",
  link: "https://yuki-konn.github.io/capstone-project-level-3/about",
  buttonName: "Learn More",
};
const card2 = {
  title: "Locations",
  desc1:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor magnis scelerisque quam turpis sem parturient. Urna elit habitasse accumsan torquent consequat consequat. Dictum ad metus phasellus magna eleifend scelerisque sem. Magna euismod aliquam finibus conubia ad. Erat adipiscing molestie; fringilla dolor nisi suscipit pulvinar pretium? Nulla class justo sapien egestas placerat! Penatibus iaculis aliquet molestie, porta pulvinar tristique. Finibus ut nullam urna quisque mi.",
  desc2:
    "Duis odio facilisi ullamcorper suspendisse a vitae nibh. Inceptos aenean egestas aenean ultrices senectus massa. Tempor aliquet eleifend non porta habitasse elementum lobortis. Curae vulputate lorem cras parturient facilisi erat proin leo. Vestibulum integer litora amet quis; torquent dolor malesuada. Maximus purus elementum, cras sodales hac semper vivamus. Augue leo ultricies hendrerit; in bibendum iaculis. Porttitor penatibus at sociosqu porta rhoncus.",
  desc3: "",
  link: "",
  buttonName: "Learn More",
};
const card3 = {
  title: "History",
  desc1:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae torquent dictum montes enim libero nec parturient, enim neque. Malesuada nullam scelerisque conubia; porttitor semper rhoncus finibus. Dui natoque volutpat sociosqu curabitur ac nulla viverra. Curae felis ultrices aliquet ante pellentesque mollis porta. Interdum nisi consequat, neque tempus orci nostra lacus litora scelerisque. Ornare viverra dolor volutpat; potenti eleifend cubilia nostra potenti.",
  desc2:
    "Blandit quam fermentum enim justo mi? Per eget sem elit erat convallis in rhoncus. Faucibus duis conubia justo sagittis conubia vulputate! Erat praesent imperdiet praesent tempus gravida, senectus auctor sagittis proin. Consectetur consequat porta fusce amet nisi et commodo. Potenti nibh risus torquent a in torquent. Habitant ultricies curae vehicula ullamcorper curae nostra. Mus nibh risus neque penatibus molestie. Consequat eget magnis vulputate aliquet est arcu.",
  desc3:
    "Volutpat suspendisse sit pharetra at ultrices risus. Nostra aliquam facilisis metus nulla inceptos. Dictum in diam feugiat hac aenean curae. Venenatis fames curae leo magna vivamus aenean aliquet mi elementum. Tellus euismod augue torquent duis hac ex suscipit netus. Condimentum potenti euismod id ornare vestibulum. Felis habitasse turpis conubia arcu maximus.",
  link: "",
  buttonName: "Learn More",
};

// Trivia Card
const triviaCard = {
  title: "Random Trivia",
  buttonName: "Brew Question",
};

sectionAbout.innerHTML = new LinkCard(card1);
sectionLocation.innerHTML = new LinkCard(card2);
sectionHistory.innerHTML = new LinkCard(card3);
sectionTriva.innerHTML = new TriviaCard(triviaCard);
