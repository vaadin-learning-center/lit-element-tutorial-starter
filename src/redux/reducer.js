

export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};


const INITIAL_STATE = {
  todos: [],
  filter: VisibilityFilters.SHOW_ALL,
  task: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

  }
};