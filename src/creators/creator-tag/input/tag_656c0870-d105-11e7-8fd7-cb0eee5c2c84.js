window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    uuid: '656c0870-d105-11e7-8fd7-cb0eee5c2c84',
    skin: {
      background: {
        backgroundImage: [
          'url("bg")',
          'url("bg")',
        ],
      },
      click: 'http://localhost:3000/create-tag',
    }
  },
},'*');
window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_SKIN_DESTROY',
  },'*');
}, false);
