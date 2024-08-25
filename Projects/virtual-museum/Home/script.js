//PAINTINGS SECTION
let p_titles = ['Hiker in the woods', 'The Scream', 'Napoleon crossing the Alps', 'Guitarist Dream', 'Splashes'];
let painters = ['John Xavier','Edvard Munch', 'Jacques-Louis David', 'Sarah James', 'Gulliver Arnold'];
let p_desc = ["In the enchanting creation by artist John Xavier titled \"Man in the Woods,\" verdant strokes weave a mesmerizing tale. Within this green-hued masterpiece, a solitary figure gracefully navigates the forest, capturing the essence of a serene communion between man and nature.","The Scream by Edvard Munch, painted in 1893, portrays a figure in distress against a turbulent backdrop. The central figure\'s distorted face and hands convey a profound sense of anguish and existential fear. This iconic work is a powerful expression of universal human emotions and existential anxiety.",
"Completed in 1805-1808. The artwork depicts Napoleon Bonaparte on a spirited white steed, leading his army through the challenging Alpine terrain during the Italian campaign of 1800. Known for its historical significance, the painting reflects David's neoclassical style, characterized by precise details and a focus on heroic themes.",
"Sarah James' vibrant creation, a yellow abstract, forms a guitar through playful geometric shapes. Harmonizing sunny hues, it's a rhythmic composition that invites viewers into a lively melody of art.",
"Gulliver Arnold's portrait is a mesmerizing dance of spontaneity and beauty, where random yet powerful splashes of paint converge to form a captivating visual symphony. Each stroke tells a unique tale, creating a portrait that is both dynamic and artistically expressive."]

//SCULPTURE SECTION
let s_titles = ['Chiaramonti Niobid', 'Belvedere Apollo', 'Discobolus', 'The Golden Pharoah', 'Marble bust of a man'];
let sculptors = ['Unknown', 'Unknown', 'Myron', 'Egyptians', 'Early Imperial, Julio-Claudian'];

let s_desc = ["This statue represents one of the daughters of Niobe as she attempts to escape from the arrows of Apollo and Artemis. This work was found around the middle of the 1500s at Hadrian's Villa near Tivoli during the excavations organised by Cardinal Ippolito d'Este.", "The renowned Greek statue unveils the divine countenance of Apollo, the epitome of classical grace and beauty. Carved with masterful precision, Apollo's head radiates an ethereal serenity, capturing the god's timeless allure. This iconic sculpture, a testament to ancient artistry, immortalizes the Hellenistic ideal of aesthetic perfection in the visage of the sun god.", "The Discobolus by Myron is an ancient Greek sculpture completed at the start of the Classical period in around 460–450 BC that depicts an ancient Greek athlete throwing a discus", "Behold the allure of the famous golden mummy—a captivating fusion of ancient artistry and divine reverence. Wrapped in a resplendent golden shroud, it speaks to the opulence and spiritual significance bestowed upon the departed, connecting us to the mysteries of ancient burial rituals.", "The Roman marble bust of a man stands frozen in time, a masterful expression of classical portraiture. Carved with meticulous detail, it captures the essence of a bygone era, showcasing the dignified features and timeless allure of its subject. This evocative sculpture invites contemplation, offering a glimpse into the dignified countenance of an anonymous figure from ancient Rome."]


const p1 = document.getElementById("img-1");
const p2 = document.getElementById("img-2");
const p3 = document.getElementById("img-3");
const p4 = document.getElementById("img-4");
const p5 = document.getElementById("img-5");

const s1 = document.getElementById("simg-1");
const s2 = document.getElementById("simg-2");
const s3 = document.getElementById("simg-3");
const s4 = document.getElementById("simg-4");
const s5 = document.getElementById("simg-5");



p1.addEventListener("click", function(){
    document.querySelector("#img-desc-container1 h3").innerText = p_titles[0];
    document.querySelector("#img-desc-container1 h4").innerText = painters[0];
    document.querySelector("#img-desc-container1 p").innerText = p_desc[0];
});

p2.addEventListener("click", function(){
    document.querySelector("#img-desc-container1 h3").innerText = p_titles[1];
    document.querySelector("#img-desc-container1 h4").innerText = painters[1];
    document.querySelector("#img-desc-container1 p").innerText = p_desc[1];
});

p3.addEventListener("click", function(){
    document.querySelector("#img-desc-container1 h3").innerText = p_titles[2];
    document.querySelector("#img-desc-container1 h4").innerText = painters[2];
    document.querySelector("#img-desc-container1 p").innerText = p_desc[2];
});

p4.addEventListener("click", function(){
    document.querySelector("#img-desc-container1 h3").innerText = p_titles[3];
    document.querySelector("#img-desc-container1 h4").innerText = painters[3];
    document.querySelector("#img-desc-container1 p").innerText = p_desc[3];
});

p5.addEventListener("click", function(){
    document.querySelector("#img-desc-container1 h3").innerText = p_titles[4];
    document.querySelector("#img-desc-container1 h4").innerText = painters[4];
    document.querySelector("#img-desc-container1 p").innerText = p_desc[4];
});

s1.addEventListener("click", function(){
    document.querySelector("#img-desc-container2 h3").innerText = s_titles[0];
    document.querySelector("#img-desc-container2 h4").innerText = sculptors[0];
    document.querySelector("#img-desc-container2 p").innerText = s_desc[0];
});

s2.addEventListener("click", function(){
    document.querySelector("#img-desc-container2 h3").innerText = s_titles[1];
    document.querySelector("#img-desc-container2 h4").innerText = sculptors[1];
    document.querySelector("#img-desc-container2 p").innerText = s_desc[1];
});

s3.addEventListener("click", function(){
    document.querySelector("#img-desc-container2 h3").innerText = s_titles[2];
    document.querySelector("#img-desc-container2 h4").innerText = sculptors[2];
    document.querySelector("#img-desc-container2 p").innerText = s_desc[2];
});

s4.addEventListener("click", function(){
    document.querySelector("#img-desc-container2 h3").innerText = s_titles[3];
    document.querySelector("#img-desc-container2 h4").innerText = sculptors[3];
    document.querySelector("#img-desc-container2 p").innerText = s_desc[3];
});

s5.addEventListener("click", function(){
    document.querySelector("#img-desc-container2 h3").innerText = s_titles[4];
    document.querySelector("#img-desc-container2 h4").innerText = sculptors[4];
    document.querySelector("#img-desc-container2 p").innerText = s_desc[4];
});

function membership_message(){
    alert("Your application has been received.")
}

function donation_message(){
    confirm("Are you sure you want to confirm the payment?")
}
