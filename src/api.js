export default {
  saveFile: (saveFile) => {
    localStorage.setItem('saveFile', JSON.stringify(saveFile));
    return Promise.resolve(true);
  },

  getSaveFile: () => {
    return Promise.resolve(JSON.parse(localStorage.getItem('saveFile')));
  },
}
