const isDev = process.env.NODE_ENV === 'development';

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Title</title>

  ${isDev ? '' : '<link href="css/styles.css" rel="stylesheet" />'}
</head>
<body>
  <header class="header">
    <select id="models-list">
      <option selected disabled hidden>Загружается список моделей</option>
    </select>
    <button id="load-model-btn">Загрузить</button>
  </header>

  <main class="content">
    <div class="working-area">
      <div id="scheme" class="scheme"></div>
      <div class="events-feed">
        <h3 class="events-feed__header">Список событий</h3>
        <ul id="events-feed" class="events-feed__events"></ul>
      </div>
    </div>
    
    <div id="message-box" class="message-box">
      <div class="message-box__header">
        <i class="icon icon-close"></i>
      </div>
      <div class="message-box__info">

      </div>
    </div>
  </main>
  <script src="${isDev ? 'http://localhost:8080' : 'js'}/app.bundle.js" type="text/javascript"></script>
</body>
</html>
`;

module.exports = template;
