# fastify-rest-api

Учебный REST API на [Fastify](https://fastify.dev/), отдающий выдуманные данные.

## Зачем это нужно

Тестировщику и фронтендеру нужен API, который можно поднять за одну команду и
дёргать как угодно: он ничего не хранит, ничего не ломает и на каждый запрос
отдаёт правдоподобные данные. Их генерирует [faker](https://fakerjs.dev/),
поэтому база не нужна вовсе.

Подходит как заглушка для тренировки запросов, написания автотестов на API и
демонстрации структуры проекта на Fastify: плагины в `plugins/`, маршруты в
`routes/`, автозагрузка через fastify-cli.

## Запуск

```bash
make install
make dev     # http://localhost:3000, с перезапуском на изменения
make test
```

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=fastify-rest-api)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=fastify-rest-api).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
