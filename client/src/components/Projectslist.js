import React from "react";
import Project from "../components/Project"


const ProjectsTable = (props) => {
    const { Projects, setProjects } = props;

    return (
        <>
            <table class="table table-dark table-borderless" >
                <thead>
                    <tr>
                        <th>Backlog</th>
                        <th>In Progress</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {Projects.length > 0 &&
                        Projects.map((project) => <Project key={project.id} project={project} />)}
                </tbody>
            </table>
        </>
    )
}

export default ProjectsTable;
