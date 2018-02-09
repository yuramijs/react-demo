const template = data => {
  const {html, css, js} = data;

  return `<!doctype html>
            <html>
             <head>
              <meta charset="utf-8">
              <title>test</title>
              <style>${css ? css : ''}</style>
             </head>
             <body>
                ${html ? html : ''}
              <script>${js ? js : ''}</script>
             </body>
            </html>
`

};

export default template;
