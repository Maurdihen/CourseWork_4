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

### `npm run start`

Запуск прокта. Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.
