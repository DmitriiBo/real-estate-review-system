module.exports = {
  types: [
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    { value: 'chore', name: 'chore      Добавление/обновление/настройка инструментов и библиотек' },
  ],

  scopes: [{ name: 'custom' }, { name: 'components' }, { name: 'global' }],

  messages: {
    type: 'Тип изменений',
    scope: 'Область изменений (опционально):',
    customScope: 'Введите вашу область:',
    subject: 'Краткое описание изменений:\n',
    body: 'Подробное описание изменений:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\\n',
    confirmCommit: 'Сохранить получившийся коммит?',
  },
  skipQuestions: ['footer'],
  allowBreakingChanges: ['feat', 'fix', 'test', 'refactor', 'docs', 'chore'],
  allowCustomScopes: true,
  subjectLimit: 100,
};
