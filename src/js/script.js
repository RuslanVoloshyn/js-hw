'use strict';

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskQueue {
    constructor(delayTime) {
        this.delayTime = delayTime;
        this.tasks = [];
        this.isRunning = false;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    run() {
        if (this.isRunning) {
            return Promise.reject('Черга вже виконується');
        }

        this.isRunning = true;

        let promiseChain = Promise.resolve();

        this.tasks.forEach((task, index) => {
            promiseChain = promiseChain
                .then(() => task())
                .then((result) => {
                    console.log(result);
                    return delay(this.delayTime);
                })
                .catch((error) => {
                    console.error(`Помилка у завданні ${index + 1}:`, error);
                    return delay(this.delayTime);
                });
        });

        return promiseChain.then(() => {
            this.isRunning = false;
            return 'Усі завдання завершено';
        });
    }
}

const queue = new TaskQueue(1000);

queue.addTask(() => Promise.resolve('Task 1 виконано'));
queue.addTask(() => Promise.resolve('Task 2 виконано'));
queue.addTask(() => Promise.resolve('Task 3 виконано'));

queue
    .run()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Помилка:', error);
    });
