const interScroll = (id, data) => {
  const {backgroundURL, clickURL} = data;

  return `window.top.postMessage({
  type: 'ADSM_RMB_INTERSCROLL_INIT',
  payload: {
    uuid: '${id}',
    interscroll: {
      background: {
        backgroundImage: 'url("${backgroundURL}")',
      },
      click: '${clickURL}',
    }
  },
},'*');

window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_INTERSCROLL_DESTROY',
  },'*');
}, false);`
};

export default interScroll;
