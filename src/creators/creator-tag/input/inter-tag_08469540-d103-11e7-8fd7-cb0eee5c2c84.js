window.top.postMessage({
  type: 'ADSM_RMB_INTERSCROLL_INIT',
  payload: {
    uuid: '08469540-d103-11e7-8fd7-cb0eee5c2c84',
    interscroll: {
      background: {
        backgroundImage: 'url("bg")',
      },
      click: 'http://www.google.com',
    }
  },
},'*');

window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_INTERSCROLL_DESTROY',
  },'*');
}, false);