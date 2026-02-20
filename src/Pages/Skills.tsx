
function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "PostgreSQL", "JAVA", "Git/Github"];
    return (<ul>
        {skills.map((skill) => (
            <li key={skill}>{skill}</li>
        ))}
    </ul>);
}
export default Skills;
