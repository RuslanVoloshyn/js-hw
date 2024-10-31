'use strict';

function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.attendance = new Array(10).fill(null);
    this.grades = new Array(10).fill(null);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getAverageGrade = function () {
        const validGrades = this.grades.filter((mark) => mark !== null);
        const total = validGrades.reduce((acc, mark) => acc + mark, 0);
        return validGrades.length ? total / validGrades.length : 0;
    };

    this.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.warn('Вже відмічено 10 відвідувань.');
        }
    };

    this.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.warn('Вже відмічено 10 відвідувань.');
        }
    };

    this.mark = function (grade) {
        if (grade < 0 || grade > 10) {
            console.error('Оцінка має бути в межах від 0 до 10.');
            return;
        }

        const index = this.grades.indexOf(null);
        if (index !== -1) {
            this.grades[index] = grade;
        } else {
            console.warn('Вже додано 10 оцінок.');
        }
    };

    this.getAverageAttendance = function () {
        const validAttendance = this.attendance.filter((day) => day !== null);
        const total = validAttendance.reduce(
            (acc, day) => acc + (day ? 1 : 0),
            0
        );
        return validAttendance.length ? total / validAttendance.length : 0;
    };

    this.summary = function () {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageGrade > 9 && averageAttendance > 0.9) {
            return 'Ух ти, який молодчинка!';
        } else if (averageGrade >= 9 || averageAttendance >= 0.9) {
            return 'Нормально, але можна краще';
        } else {
            return 'Редька!';
        }
    };
}

const student1 = new Student('Іван', 'Іванов', 2000);
const student2 = new Student('Марія', 'Петренко', 1999);

student1.mark(8);
student1.mark(9);
student1.mark(10);

student2.mark(6);
student2.mark(10);
student2.mark(7);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.present();

console.log(
    `${student1.firstName} ${student1.lastName}: ${student1.summary()}`
);
console.log(
    `${student2.firstName} ${student2.lastName}: ${student2.summary()}`
);
