window.top.postMessage({
  type: 'ADSM_RMB_INTERSCROLL_INIT',
  payload: {
    uuid: 'ddce6400-d102-11e7-8fd7-cb0eee5c2c84',
    interscroll: {
      background: {
        backgroundImage: 'url("fds")',
      },
      click: 'fds',
    }
  },
},'*');

window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_INTERSCROLL_DESTROY',
  },'*');
}, false);