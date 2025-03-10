import { GET_PROJECTS, GET_PROJECTS_ID, EMPTY} from "./actions";

const initialState = {
  projects: [],
  detail:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      const cleanProjects = action.payload.map(project => ({
        id: project.id,
        name: project.productName,
        type: project.type,
        img: project.images,
        description: project.description,
        year: project.year,
        surface: project.surface,
      }))
      return { ...state, projects: cleanProjects };
      case GET_PROJECTS_ID:
        const cleanProject = {
          id: action.payload.id,
          name: action.payload.productName,
          type: action.payload.type,
          img: action.payload.images,
          description: action.payload.description,
          year: action.payload.year,
          surface: action.payload.surface,
        }
        return{...state, detail: cleanProject};
        case EMPTY: 
        return {...state, detail: []};
      default:
        return{...state};
  }
};

export default reducer;
