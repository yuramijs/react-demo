window.top.postMessage({
  type: 'ADSM_RMB_SKIN_INIT',
  payload: {
    uuid: '5256ee80-d105-11e7-8fd7-cb0eee5c2c84',
    skin: {
      background: {
        backgroundImage: [
          'url("das")',
          'url("dsa")',
        ],
      },
      click: 'dsa',
    }
  },
},'*');
window.addEventListener('unload', function() {
  window.top.postMessage({
    type: 'ADSM_RMB_SKIN_DESTROY',
  },'*');
}, false);
