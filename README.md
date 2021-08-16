<img width="1608" alt="женя3" src="https://user-images.githubusercontent.com/61889941/129597475-b61295f2-0f05-4e90-b11a-6511a32a5bd0.png">
<img width="1608" alt="женя1" src="https://user-images.githubusercontent.com/61889941/129597546-8c07479b-0911-4eb2-a5c0-76bd795b2990.png">
This single page application was created for saving financial operations. Project was written in React + Typescript. Redux was also used for the convenience of exchanging data between components. All data is automatically save to local storage using redux persist.

At first site visiting, the user has the opportunity to set the initial balance value.

When creating a new operation, user have a choice between income / expenses with categories for them.

Also user can add a comment to the selected operation. If the comment is unique, it is saved for the selected category.

When user select the same category again, he will be offered the previous options for comments. In the process of typing, they are dynamically filtered and can be selected with a short screen tap, and with a long press proposition wil be deleted.

Statistics are displayed using the react-chartjs-2 library.

Svg are collected in a sprite and displayed in the operation cards depending on the category.

It is possible to change the theme of the application. Styles are written by css modules which will allow repeating class names.

There are pages for displaying only all income / expenses with their sum.

Any operation can be deleted. The balance and other data dependent on the deleted transaction are recalculated and saved.




Это Spa приложение было создано для учета финансов. Написано на React + Typescript. Так же был использован Redux для удобства обмена данными между компонентами. Все данные автоматически пишутся в local storage благодаря redux persist.

При первом посещении сайта у пользователя есть возможность установить начальное значение баланса.

При создании новой операции есть выбор между доходами/расходами с категориями для них.

Можно добавить комментарий к операции. В случае если комментарий уникален - он сохраняется для выбранной категории.

При повторном выборе этой же категории пользователю будут предложены предыдущие варианты комментариев. В процессе набора они динамирески фильтруются и могут быть выбраны при кототком нажатии, а при длительном - удалены.

Статистика отображается с помощью библиотеки react-chartjs-2.

Svg собраны в спрайт и отображаются в карточках операции в зависимости от категории.

Есть возможность смены темы приложения. Стили написаны css modules что позволет повтор названий классов.

Есть страницы для отображения только всех доходов/расходов c отображением их суммы.

Любая операция может быть удалена. Баланс и прочие данные, зависимые от удаленной операции пересчитываются.
