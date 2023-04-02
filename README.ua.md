# Parcel template

Цей проєкт був створений за допомогою Parcel. Для ознайомлення і налаштування
додаткових можливостей [звернися до документації](https://parceljs.org/).

## Підготовка нового проекту

1. Перевір, що на комп'ютері встановлена LTS-версія Node.js.
   [Скачай і встанови](https://nodejs.org/en/) її, якщо це необхідно.
2. Склонуй цей репозиторій.
3. Зміни ім'я папки з `parcel-project-template` на ім'я свого проекту.
4. Створи новий пустий репозиторій на GitHub.
5. Відкрий проект в VSCode, запусти термінал и зв'яжи проект з
   GitHub-репозиторієм
   [за інструкцією](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови залежності проекту в терміналі командою `npm install` .
7. Запусти режим розробки командою `npm start`.
8. Перейди в браузері за адресою [http://localhost:1234](http://localhost:1234).
   Ця сторінка буде автоматично перезавантажуватися після зберігання змін в
   файлах проекту.

## Файли та папки

- Всі паршали файлів стилів повинні лежати в папці `src/sass` та імпортуватися у
  файли стилів сторінок. Наприклад, для `index.html` файл стилів називається
  `index.scss`.
- Зображення додавай в папку `src/images`. Збірник оптимізує їх, але тільки під
  час деплою продакшн-версії проекту. Оптимізація відбувається в хмарі, щоб не
  перевантажувати комп'ютер, оскільки на слабших пристроях це може займати
  тривалий час.

## Деплой

Для налаштування деплою проекта необхідно виконати декілька додаткових кроків із
налаштування репозиторія. На вкладці `Settings` в підсекції `Actions` вибери
пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай сторінку до останньої секції, під час чого впевнись, що опції
відмічені як на наступному зображенні, і натисни `Save`. Без цих налаштувань у
збірки буде недостатньо прав для автоматизації процесу деплою.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн-версія проектубуде автоматично збиратися і деплоїтись на GitHub Pages у
гілку `gh-pages` кожного разу, коли оновлюється гілка `main`. Наприклад, після
прямого пушу або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` відредагувати поле `homepage` та скрипт `build`, замінивши
`your_username` і `your_repo_name` на свої, та надіслати зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Потім необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) і
встановити роздачу продакшн-версії файлів із папки `/root` гілки `gh-pages`,
якщо це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою останнього комміту відображається за допомогою іконки біля його
ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки або деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути, клікнувши на іконку, та
у випадаючому вікні перейти за посиланням `Details`.

![Deployment status](./assets/status.png)

### Жива сторінка

Через деякий час, зазвичай кілька хвилин, живу сторінку можна буде переглянути
за адресою, вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію:
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкривається пуста сторінка - впевнись, що у вкладці `Console` немає
помилок, пов'язаних із неправильними шляхами до CSS і JS файлів проекту
(**404**). Найвірогідніше, у тебе невірне значення властивості `homepage` або
скрипта `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пушу у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) з файла `.github/workflows/deploy.yml`.
2. Всі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн-версія файлів проекта
   надсилається у гілку `gh-pages`. У зворотньому випадку в логу виконання
   скрипта буде вказано, у чому проблема.