const { User, Task } = require('./models')

const findAllWithTasks = async () => {
    const users = await User.findAll({
        include: [{
            model: Task
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

const run = async () => {
    await findAllWithTasks()
    await process.exit()
}

run();
