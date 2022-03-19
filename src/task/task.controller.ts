import { Controller, Get } from '@nestjs/common';
import { TaskModel } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  getAllTask(): TaskModel[] {
    return this.tasksService.getAllTasks();
  };
}
