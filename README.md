# Приложение для мониторинга устройств и данных ТСД Онлайн

Написано с использованием [ant-design-vue](https://www.antdv.com/docs/vue/introduce/).
Содержит общую структуру-скелет для дальнейшей разработки. Является тестовой версией.

## Структура кодовой базы (`/src`)

`/assets` графика и другие статические файлы;

`/components` компоненты приложения;

`/config` параметры для http-запросов -
> В `/apiHosts.js` можно добавить дополнительные источники данных (SAP), в `/endpoints` расположены отдельные пути сервера для обращения.

`/pages` секции приложения -
> Operations, Devices и Users содержат таблицы и файлы с описанием полей (`columns.js`) и тестовые данные (`mocks.js`). В Devices есть комментарии для лучшего понимания как организована работа таблицы

> AdapterServer подразумевает иной набор данных и там структура из одного файла.

`/router.js` описание и инициализация маршрутизации.

## Мониторинг ошибок (sentry.js)

Для мониторинга ошибок необходимо развернуть [локальный сервер Sentry.io](https://develop.sentry.dev/self-hosted/) и указать в `/main.js` в поле dsn эндпойнт для приёма данных. Сервер принимает <b>только обработанные</b> с помощью <i>try/catch</i> ошибки и логирует все данные на сервере.

## Деплой

В репозиторий добавлен файл `.gitlab.yml`, через который можно настроить CI/CD для автоматического деплоя. Для этого требуется дополнительная настройка окружения.

Команды для ввода в терминале (из корневой директории проекта):

````sh
  $ npm install - установка зависимостей
  $ npm start - запуск в режиме разработки (на http://localhost:3000)
  $ npm run build - собрать продакшн версию в папку ```/dist```
  $ npm run deploy - развернуть платформу на :8015
````

Для ручного обновления интерфейса (зайти на сервер через `ssh -l user 192.168.8.98`):

```sh
  $ cd ~/monitoring-app-vue
  $ git pull
  $ npm install && npm run build
  $ rm -R /var/www/html/*
  $ cp -r ./dist/* /var/www/html
```

После этого по адресу 192.168.8.98:8015 будет развёрнута новая сборка.
