let todoId = 1;

export const addtodo_action = text => ({
  id: todoId++,
  type: "ADD_TO_DO",
  text: text
});
