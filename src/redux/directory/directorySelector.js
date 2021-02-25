import { createSelector } from "reselect";
// create a selector
//this selector will return the directory state
const selectDirectory = (state) => state.directory;
//first argument is a collection of input selectors
//second argument will return the value we want out of the selector
//choose the sections state data from the directory state
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
