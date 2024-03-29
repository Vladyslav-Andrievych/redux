import { TOGGLE_OPTION } from './options.actions.js';

const optionsList = [
  {
    id: 'id-0',
    name: '19-inch wheels',
  },
  {
    id: 'id-1',
    name: 'Leather-trimmed Sport Seats',
  },
  {
    id: 'id-2',
    name: 'B&O Sound System',
  },
  {
    id: 'id-3',
    name: 'Adaptive Cruise Control',
  },
  {
    id: 'id-4',
    name: 'Daytime running lights',
  },
  {
    id: 'id-5',
    name: 'Auto High-Beam Headlamps',
  },
  {
    id: 'id-6',
    name: 'Carbon Sport Interior',
  },
];

const initialState = {
  optionsList,
  selected: [],
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;

      const newSelectedList = state.selected.includes(optionId)
        ? state.selected.filter((id) => id !== optionId)
        : state.selected.concat(optionId);

      return {
        ...state,
        selected: newSelectedList,
      };
    }
    default:
      return state;
  }
};
