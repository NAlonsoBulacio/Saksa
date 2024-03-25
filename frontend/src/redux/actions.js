import axios from "axios";
export const GET_PROJECTS = "GET_PROJECTS";
export const GET_PROJECTS_ID = "GET_PROJECTS_ID";
export const EMPTY = "EMPTY";

export const getProjects = () => {
    return async function(dispatch) {
      try {
        const backData = await axios.get(`http://localhost:1337/api/proyectos?populate=*`);
        const projects = backData.data.data;
        dispatch({ type: GET_PROJECTS, payload: projects });
      } catch (error) {
        console.log(error);
      }
    };
  };
  export const getProjectId = (id) => {
    return async function (dispatch) {
      const backData = await axios.get(`http://localhost:1337/api/proyectos/${id}?populate=*`);
      const project = backData.data;
      dispatch({ type: GET_PROJECTS_ID, payload: project.data });
    };
  };

  export const emptyDetail = () => {
    return async function (dispatch) {
      dispatch({ type: EMPTY });
    };
  };
  