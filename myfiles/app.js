// Make Projects Section Responsive
const tabletScreen = 900;

const projectCards = `
    <div class="card" style="width: 18rem;">
        <img src="{src}" class="card-img-top" alt="{alt}">
        <div class="card-body">
            <h4>{title}</h4>
            <p class="card-text">{description}</p>
        </div>
    </div>
`;

const projectsContent = [
    {
        src: "/images/fit-track-img.webp",
        alt: "Fit-Track-App Image",
        title: "Fit-Track App",
        description: "A sleek fitness tracking app with a user-friendly dashboard, displaying health metrics, workout logs, and goals."
    },
    {
        src: "/images/recipe-hub-img.webp",
        alt: "Recipe Hub App Image",
        title: "Recipe Hub",
        description: "A vibrant cooking recipes platform featuring high-quality food images, a variety of recipes, and user reviews."
    },
    {
        src: "/images/task-master-img.webp",
        alt: "Task Master App Image",
        title: "Task-Master App",
        description: "A clean project management tool with task boards, collaboration features, and project timelines for efficient management."
    }
];

function generateCards(isCarousel = false) {
    return projectsContent.map((project, index) => {
        let cardHTML = projectCards
            .replace("{src}", project.src)
            .replace("{alt}", project.alt)
            .replace("{title}", project.title)
            .replace("{description}", project.description);

        return isCarousel ? `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                ${cardHTML}
            </div>
        ` : cardHTML;
    }).join('');
}

function adjustScreen() {
    const projects = document.querySelector('#projects');
    const innerWidth = window.innerWidth;
    const isCarousel = innerWidth < tabletScreen;

    const carouselControls = `
        <button class="carousel-control-prev me-5" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev" style="position: absolute; left: -40px; color: black;">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next" style="position: absolute; right: -40px; color: black;">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `;

    const carouselInner = `
        <div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="d-flex justify-content-center align-items-center position-relative">
                ${carouselControls}
                <div class="carousel-inner" style="width: 18rem;">
                    ${generateCards(true)}
                </div>
            </div>
        </div>
    `;

    const cardsLayout = `
        <div class="projects d-flex flex-row column-gap-5">
            ${generateCards()}
        </div>
    `;

    projects.innerHTML = `
        <h1 class="mt-4 mb-3 projects-title">Projects</h1>
        ${isCarousel ? carouselInner : cardsLayout}
        ${isCarousel ? '<hr>' : ''}
    `;
}

window.addEventListener('resize', adjustScreen);
document.addEventListener('DOMContentLoaded', adjustScreen);

//Make About Section Responsive

document.getElementById('read-more').addEventListener('click', function() {
    document.getElementById('short-text').classList.add('d-none');
    document.getElementById('full-text').classList.remove('d-none');
    document.getElementById('read-less').classList.remove('d-none');
});

document.getElementById('read-less').addEventListener('click', function() {
    document.getElementById('full-text').classList.add('d-none');
    document.getElementById('short-text').classList.remove('d-none');
    document.getElementById('read-less').classList.add('d-none');
});

//Up Button on Home Page's Bottom
const upButton = document.querySelector('#up-button');
upButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})