function Projects() {
    const projects = [
        "https://github.com/Arnel-rah/web2-expense-tracker.git", 
        "https://github.com/NyRalaivao/pokedexReact.git"
    ]

    return(<section id="Projects">
        <h2>My projects</h2>
        <ul>
            {projects.map((project) => (
                <li><a href= {project}>{project}</a></li>
            ))} 
        </ul>
    </section>
    )
}

export default Projects