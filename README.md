# Демонстрационный Frontend стенд

## Возможны три варианта запуска стенда
- вернуть `index.html`
- запустить исходники
- поднять docker контейнер

### Вернуть `index.html` (самый простой вариант)

В репозитории есть папка **build**, а в ней папка **static**. 
Необходимо перенести эту папку в корень проекта.
После чего создать там же папку **templates** (с шаблонами) и перенести в эту папку
оставшиеся файлы из папки **build**.

> В таком случае адрес страницы с документацией flask_restx должен
> находиться по адресу, отличному от корня
```python
from flask import Flask, render_template
from flask_restx import Api

from config import Config
from setup_db import db
from views import directors_ns


api = Api(title="Flask Course Project 3", doc="/docs")

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    @app.route('/')
    def index():
        return render_template('index.html')

    db.init_app(app)
    api.init_app(app)

    api.add_namespace(directors_ns)
    
    return app
```


## Запуск из исходников

1. Для начала нужно скачать и установить [NodeJS](https://nodejs.org/en/download/)
2. Проверить, что в консоль установлена утилита npm

```shell
npm -v
```

3. В корне проекта написать команду `npm install` тем самым установить все необходимые зависимости.

>  Адрес, по которому будет frontend ожидать backend 
> приложение [http://127.0.0.1:5000](http://127.0.0.1:5000)

4. Запуск проекта

### `npm run start`

Запуск прокта. Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.
Если не удалось запустить приложение этой командой, используйте команду ниже.

### ```npm run start-legacy```

Запуск прокта (Если первая команда выполнилась с ошибкой). Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

> Чтобы все корректно работало, нам нужно в проект установить еще один пакет
```python

from flask import Flask
from flask_cors import CORS
from flask_restx import Api

from config import Config
from setup_db import db

api = Api(doc='/docs')


def create_app():
    app = Flask(__name__)
    app.config.from_object(get_config(Config))

    cors.init_app(app)
    db.init_app(app)
    api.init_app(app)
```

## Запуск из docker

1. Скачать и установить [docker](https://docs.docker.com/engine/install/)
2. Скачать образ командой `docker pull painassasin/node_cource_project:latest`
3. Запустить контейнер на 80 порту `docker run -p 80:80 painassasin/node_cource_project`

>Образ сконфигурирован таким образом, что он будет ожидать 
> backend на 5000 локальном порту
 
>Чтобы все корректно работало, нам нужно в проект установить еще один пакет
```python

from flask import Flask
from flask_cors import CORS
from flask_restx import Api

from config import Config
from setup_db import db

api = Api(doc='/docs')


def create_app():
    app = Flask(__name__)
    app.config.from_object(get_config(Config))

    cors.init_app(app)
    db.init_app(app)
    api.init_app(app)
```