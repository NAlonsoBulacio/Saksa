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
        name: project.attributes.titulo,
        type: project.attributes.tipo,
        img: project.attributes.proyecto_img.data[0].attributes.formats.large.url
      }))
      return { ...state, projects: cleanProjects };
      case GET_PROJECTS_ID:
        const imagesDetail = action.payload.attributes.proyecto_img.data?.map((img) => (img.attributes.formats.large.url))
        const cleanProject = {
          id: action.payload.id,
          name: action.payload.attributes.titulo,
          type: action.payload.attributes.tipo,
          // img: imagesDetail,
        }
        console.log(cleanProject);
        return{...state, detail: cleanProject};
        case EMPTY: 
        return {...state, detail: []};
      default:
        return{...state};
  }
};

export default reducer;
