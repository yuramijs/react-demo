window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    uuid: '7ebf68f0-d103-11e7-8fd7-cb0eee5c2c84',
    skin: {
      background: {
        backgroundImage: [
          'url("fdsafdsa")',
          'url("fds")',
        ],
      },
      click: 'fdsa',
    }
  },
},'*');
window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_SKIN_DESTROY',
  },'*');
}, false);
