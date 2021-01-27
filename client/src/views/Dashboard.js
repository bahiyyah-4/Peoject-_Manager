import React, { useEffect } from "react";
import { Link, navigate } from "@reach/router";
import ProjectsTable from "../components/Projectslist";
import axios from "axios";

const Dashboard = (props) => {
    const { Projects, setProjects } = props;

    return (
        <>
            <h1>Peoject Manager</h1>
            <ProjectsTable Projects={Projects} setProjects={setProjects} />
            <Link class="btn btn-outline-secondary" to="/Projects/new">Add an Project</Link><br />
            <Link class="btn btn-outline-secondary" to="/">logout</Link>

        </>
    )
};

export default Dashboard;