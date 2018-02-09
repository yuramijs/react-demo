const tag = (id, data) => {
  const {backgroundURL, backgroundWideURL, clickURL} = data;

  return `window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    uuid: '${id}',
    skin: {
      background: {
        backgroundImage: [
          'url("${backgroundURL}")',
          'url("${backgroundWideURL}")',
        ],
      },
      click: '${clickURL}',
    }
  },
},'*');
window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_SKIN_DESTROY',
  },'*');
}, false);
`;
};

export default tag;
