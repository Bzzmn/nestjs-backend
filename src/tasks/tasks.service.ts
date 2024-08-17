import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {

        const taskFound = this.tasks.find(task => task.id === id);
        
        if (!taskFound) {
            return new NotFoundException('Task not found');
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto) {

        this.tasks.push({
            id: this.tasks.length + 1,
            ...task
        });
        return task
    }

    updateTask(task: UpdateTaskDto) {
        return 'Actualizando tarea';
    }

    deleteTask() {
        return 'Eliminando tarea';
    }

    updateTaskStatus() {
        return 'Parchando tarea';
    }
}