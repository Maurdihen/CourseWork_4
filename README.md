## Демонстрационный Frontend стенд

## Подготовка к запуску

1. Для начала нужно скачать и установить [NodeJS](https://nodejs.org/en/download/)
2. Проверить, что в консоль установлена утилита npm

```shell
npm -v
```

3. В корне проекта написать команду `npm install` тем самым установить все необходимые зависимости.
4. Указать адрес, на котором будет работать backend-сервер в файле `/src/api/api.js`. По умолчанию
   указан http://127.0.0.1:5000, при необходимости его можно изменить в люмой момент.

```javascript
import axios from 'axios';
import {getCookie} from "../utils/cookies";

export default axios.create({
    baseURL: `http://127.0.0.1:5000`,
    // withCredentials: true,
    headers: {
        Authorization: "Bearer " + getCookie("AccessToken")
    }
});
```

## Запуск проекта

### ```npm run test```

Запуск тестов. Проверим, что приложение рабоатет корректно.

### `npm run start`

Запуск прокта. Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.
Если не удалось запустить приложение этой командой, используйте команду ниже.

### ```npm run start-legacy```

Запуск прокта (Если первая команда выполнилась с ошибкой). Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.


## Если не получилось запустить через npm, на помощь придет Docker
Если возникли трудности с запуском через npm, для вас был подготовлен Docker
контейнер с уже развернутым фронтендом

1. Скачать и установить [docker](https://docs.docker.com/engine/install/)
2. Скачать образ командой `docker pull painassasin/node_cource_project:latest`
3. Запустить контейнер на 8080 порту `docker run -p 8080:3000 painassasin/node_cource_project`

>Образ сконфигурирован таким образом, что он будет ожидать backend на 5000 локальном порту