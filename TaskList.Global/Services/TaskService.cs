using System;
using System.Collections.Generic;
using TaskList.Global.Entities;
using TaskList.Global.Interfaces.Entities;
using TaskList.Global.Interfaces.Repositories;
using TaskList.Global.Interfaces.Services;

namespace TaskList.Global.Services
{
    public class TaskService : ITaskService
    {
        private ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;   
        }

        public Task Create(Task task)
        {
            if (string.IsNullOrEmpty(task.Title))
            {
                throw new Exception("Titulo da task não pode ser vazio");
            }

            if (string.IsNullOrEmpty(task.Content))
            {
                throw new Exception("Conteudo da task não pode ser vazio");
            }

            return _taskRepository.Insert(task);
        }

        public IEnumerable<Global.Entities.Task> GetAllTasks()
        {
            return _taskRepository.GetAll();
        }

        public Task GetTask(string id)
        {
            return _taskRepository.Get(id);
        }

        public Task MarkAsCompleted(Task task)
        {
            var toUpdate = Task.Factory.From(task).Completed().Instance;
            return _taskRepository.Update(toUpdate);
        }

        public Task MarkAsPending(Task task)
        {
            var toUpdate = Task.Factory.From(task).Pending().Instance;
            return _taskRepository.Update(toUpdate);
        }

        public Task Remove(Task task)
        {
            if (!task.Completed)
            {
                throw new Exception("Só é possivel remover task já concluidas");
            }

            _taskRepository.Delete(task);
            return task;
        }

        public Task UpdateTask(Task task)
        {
            return _taskRepository.Update(task);
        }
    }
}
