const template = (name, path, size) => `
    adsmtag.define('${name}', {
      path: '${path}',
      size: ${size},
      inview: [],
      refresh: 0
    });
    
    adsmtag.display('cncpt-lb1', '${name}');
  `;

export default template