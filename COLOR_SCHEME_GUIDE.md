# Руководство по изменению цветовой схемы

## 🎨 Текущая цветовая схема: бежево-серые тона

### Основные цвета (CSS переменные)

```css
:root {
    --primary-beige: #d4c4a8;      /* Основной бежевый */
    --light-beige: #f5f1e8;        /* Светлый бежевый */
    --dark-beige: #b8a898;         /* Темный бежевый */
    --warm-gray: #8b8578;          /* Теплый серый */
    --cool-gray: #6b6b6b;          /* Холодный серый */
    --light-gray: #f8f6f3;         /* Светло-серый */
    --dark-gray: #4a4a4a;          /* Темно-серый */
    --accent-gold: #c4a484;        /* Акцентный золотистый */
    --text-dark: #2c2c2c;          /* Темный текст */
    --text-light: #6b6b6b;         /* Светлый текст */
}
```

## 🎯 Особенности дизайна

### Угловатый дизайн
- Все элементы имеют `border-radius: 0` для создания угловатого вида
- Карточки, кнопки, формы и другие элементы лишены скругленных углов

### Бесшовные блоки
- Секции имеют `padding: 0` для бесшовного соединения
- Минимальные отступы между блоками

### Уменьшенные отступы
- Container имеет `margin: 1px auto` (уменьшен в 10 раз с 10px)
- Все `#main > section > .container` элементы имеют `padding: 0 !important`
- Компактная компоновка элементов
- Переопределены все медиа-запросы для сохранения минимальных отступов

### Расширенные блоки
- Все блоки имеют увеличенную ширину: `width: 90em` (вместо стандартных 45em)
- Максимальная ширина: `max-width: 95%` для лучшего использования пространства
- Адаптивные медиа-запросы для корректного отображения на всех устройствах
- Применяется ко всем секциям: "О себе", "Навыки", "Проекты", "Образование", "Контакты"

## 📍 Где менять цвета вручную

### 1. Основные цвета (CSS переменные)
**Файл:** `assets/css/custom.css`  
**Строки:** 4-15

```css
:root {
    --primary-beige: #d4c4a8;      /* Изменить основной бежевый */
    --light-beige: #f5f1e8;        /* Изменить светлый бежевый */
    --dark-beige: #b8a898;         /* Изменить темный бежевый */
    --warm-gray: #8b8578;          /* Изменить теплый серый */
    --cool-gray: #6b6b6b;          /* Изменить холодный серый */
    --light-gray: #f8f6f3;         /* Изменить светло-серый */
    --dark-gray: #4a4a4a;          /* Изменить темно-серый */
    --accent-gold: #c4a484;        /* Изменить акцентный золотистый */
    --text-dark: #2c2c2c;          /* Изменить темный текст */
    --text-light: #6b6b6b;         /* Изменить светлый текст */
}
```

### 2. Header (шапка сайта)
**Файл:** `assets/css/custom.css`  
**Строки:** 656-690

```css
#header {
    background: linear-gradient(135deg, var(--primary-beige), var(--dark-beige)) !important;
    color: var(--text-dark) !important;
}
```

### 3. Заголовки секций
**Файл:** `assets/css/custom.css`  
**Строки:** 19-42

```css
section h3 {
    color: var(--text-dark);
}

section h3::after {
    background: linear-gradient(135deg, var(--primary-beige), var(--dark-beige));
}
```

### 4. Карточки контента
**Файл:** `assets/css/custom.css`  
**Строки:** 59-75

```css
.content-card {
    border: 1px solid var(--light-beige);
    box-shadow: 0 2px 8px rgba(139, 133, 120, 0.1);
}

.content-header {
    background: linear-gradient(135deg, var(--primary-beige), var(--dark-beige));
    color: var(--text-dark);
}
```

### 5. Прогресс-бары навыков
**Файл:** `assets/css/custom.css`  
**Строки:** 350-354

```css
.skill-level-negate {
    background: linear-gradient(90deg, var(--primary-beige), var(--accent-gold));
}
```

### 6. Акцентные элементы
**Файл:** `assets/css/custom.css`  
**Строки:** 123, 146, 150

```css
.content-description p:first-child {
    color: var(--accent-gold);
}

.detail-item strong {
    color: var(--accent-gold);
}

.content-section h5 {
    color: var(--accent-gold);
}
```

### 7. Навигация (меню)
**Файл:** `assets/css/custom.css`  
**Строки:** 691-710

```css
#header > nav ul li {
    border-top: solid 2px var(--primary-beige) !important;
}

#header > nav ul li a.active {
    background: #fff !important;
    color: var(--accent-gold) !important;
}

#header > nav ul li a {
    color: var(--text-dark) !important;
}

#header > nav ul li a:hover {
    color: var(--accent-gold) !important;
}
```

### 8. Feature Icons (иконки навыков)
**Файл:** `assets/css/custom.css`  
**Строки:** 711-720

```css
ul.feature-icons li:before {
    background: var(--primary-beige) !important;
    color: var(--text-dark) !important;
}

ul.feature-icons li:hover:before {
    background: var(--accent-gold) !important;
    color: #fff !important;
}
```

## 🎯 Рекомендации для HR

### Цвета, которые привлекают HR:

1. **Бежево-серые тона** ✅ (текущая схема)
   - Ассоциируются с профессионализмом
   - Создают доверие и стабильность
   - Выглядят престижно и солидно

2. **Синие тона** (альтернатива)
   - `#2c5aa0` - темно-синий
   - `#4a90e2` - голубой
   - `#7ba7d9` - светло-синий

3. **Зеленые тона** (альтернатива)
   - `#2d5a27` - темно-зеленый
   - `#4a7c59` - оливковый
   - `#6b8e23` - лесной зеленый

## 🔄 Как изменить цветовую схему

### Шаг 1: Выберите новую цветовую палитру
Определите 3-4 основных цвета для вашей схемы.

### Шаг 2: Обновите CSS переменные
Замените значения в `:root` секции файла `assets/css/custom.css`.

### Шаг 3: Проверьте контрастность
Убедитесь, что текст хорошо читается на фоне.

### Шаг 4: Протестируйте
Проверьте сайт в разных браузерах и устройствах.

## 📝 Пример изменения на синюю схему

```css
:root {
    --primary-beige: #2c5aa0;      /* Темно-синий */
    --light-beige: #e8f2f8;        /* Светло-голубой */
    --dark-beige: #1e3f6b;         /* Очень темно-синий */
    --warm-gray: #4a90e2;          /* Голубой */
    --cool-gray: #6b6b6b;          /* Серый */
    --light-gray: #f5f9fc;         /* Очень светло-голубой */
    --dark-gray: #2c2c2c;          /* Темно-серый */
    --accent-gold: #4a90e2;        /* Голубой акцент */
    --text-dark: #2c2c2c;          /* Темный текст */
    --text-light: #6b6b6b;         /* Светлый текст */
}
```

## ⚠️ Важные замечания

1. **Сохраняйте контрастность** - текст должен быть читаемым
2. **Используйте градиенты** - они создают современный вид
3. **Тестируйте на разных устройствах** - цвета могут выглядеть по-разному
4. **Следуйте принципам доступности** - WCAG 2.1 AA стандарты 