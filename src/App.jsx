import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  
  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  
  function handleDeleteTask(task) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(t => t.id !== task.id),
      };
    });
  }
  
  function handleStartCreateProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  
  function handleCancelStartCreateProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      };
    });
  }
  
  let content = <SelectedProject
    onProjectDelete={handleDeleteProject}
    project={selectedProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
  />;
  
  if (projectsState.selectedProjectId === null) {
    content = <NewProject
      onCancelStartCreateProject={handleCancelStartCreateProject}
      onAdd={handleAddProject}
    />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartCreateProject={handleStartCreateProject} />
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartCreateProject={handleStartCreateProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
