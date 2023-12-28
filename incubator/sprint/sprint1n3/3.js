// Обновление имени у второго юзера
const updatedUsers = users.map((user) => (
    user.id === 2 ? { ...user, name: 'Alice' } : user
));
console.log(updatedUsers);

// Добавление нового объекта
const newUser = {
    id: 4,
    name: 'Emily',
    surName: 'Davis',
    address: '321 Pine St'
};
const updatedUsersWithNewUser = [...users, newUser];
console.log(updatedUsersWithNewUser);


const tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
];

const updatedTasks = tasks.map(task => ({
    ...task,
    title: task.title === "JS" ? "I like JS" : task.title
}));

console.log(updatedTasks);


const newTask = { id: 4, title: "Next", isDone: false };
const tasksWithNewTask = [...tasks, newTask];
console.log(tasksWithNewTask);
