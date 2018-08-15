using System;
using System.Collections.Generic;
using TaskList.Global.Entities;
using TaskList.Global.Interfaces.Entities;

namespace TaskList.Global.Interfaces.Services
{
    public interface ITaskService
    {
        IEnumerable<Task> GetAllTasks();
        Task Create(Task task);
        Task GetTask(string id);
        Task MarkAsCompleted(Task task);
        Task MarkAsPending(Task task);
        Task UpdateTask(Task task);
        Task Remove(Task task);
    }
}
