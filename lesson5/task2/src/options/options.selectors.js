import { createSelector } from 'reselect';

export const optionsListSelector = (state) => state.options.optionsList;

export const selectedIdsSelector = (state) => state.options.selected;

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => !selectedIds.includes(option.id));
  }
);

// export const availableOptionsSelector = (state) => {
//   const allOptions = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptions.filter((option) => !selectedIds.includes(option.id));
// };

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => selectedIds.includes(option.id));
  }
);

// export const selectedOptionsSelector = (state) => {
//   const allOptions = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptions.filter((option) => selectedIds.includes(option.id));
// };
