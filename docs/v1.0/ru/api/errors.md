# Ошибки

## Формат

```json
{
  "error": "validation_error",
  "message": "Human-readable message",
  "details": { "field": "reason" }
}
```

| Поле | Тип | Описание |
|------|-----|----------|
| `error` | string | Код ошибки (машиночитаемый) |
| `message` | string | Сообщение для UI |
| `details` | object? | Детали валидации |

## HTTP-коды

| Код | Типичные случаи |
|-----|-----------------|
| 400 | Невалидное тело запроса |
| 401 | Нет или просрочен JWT |
| 403 | Недостаточно прав |
| 404 | Ресурс не найден |
| 503 | Maintenance mode, СДЭК без ключей |

## Maintenance

```json
{
  "error": "maintenance",
  "message": "…"
}
```

См. [health](./health.md).
