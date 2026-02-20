function Projects() {
    const projects = [
        "https://github.com/Arnel-rah/web2-expense-tracker.git", 
        "https://github.com/NyRalaivao/pokedexReact.git"
    ]

    return(<>
        <h2>My projects</h2>
        <ul>
            {projects.map((project) => (
                <li><a href= {project}>{project}</a></li>
            ))} 
        </ul>
    </>
    )
}

export default Projects