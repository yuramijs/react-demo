const template = id =>
  `<script async='async' src='https://macro.adnami.io/adsm.macro.${id}.js'></script>
   <script>
     var adsmtag = adsmtag || {};
     adsmtag.cmd = adsmtag.cmd || [];
   </script>`;

export default template;