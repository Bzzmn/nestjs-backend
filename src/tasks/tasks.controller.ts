import {Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TasksController {

    private taskService: TasksService
    constructor(taskService: TasksService) {
        this.taskService = taskService; 
    }

    @Get()
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Return all tasks'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    getAllTasks() {
        return this.taskService.getTasks();
    }

    @Get('/:id')
    @ApiOperation({summary: 'Get a task by id'})
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(parseInt(id));
    }


    @Post()
    @ApiOperation({summary: 'Create a task'})
    createTask(@Body() task: CreateTaskDto) {
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.taskService.updateTaskStatus();
    }
}