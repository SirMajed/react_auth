// function with two parameters (current state, action)
// the job of the reducer is to return a new state based on the action
let lastId = 0;
export default function reducer(state = [], action)  {
  switch (action.type) {
    case "postAdded":
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
        },
      ];
    case "postRemoved":
      return state.filter((post) => post.id !== action.payload.id);

    default:
      return state;
  }
  

  // if (action.type === 'postAdded')
  //     return [...state, {
  //         id: ++lastId,
  //         description: action.payload.description,

  //     }];
  //     else if(action.type === 'postRemoved')
  //     return state.filter(post => post.id !== action.payload.id)

  //     return state;
};

// export default reducer;
