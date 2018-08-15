using TaskList.Global.Entities;
using TaskList.Global.Interfaces.Repositories;

namespace TaskList.Database.SQL
{
    public class TaskRepository : BaseRepository<Task>, ITaskRepository
    {
        public TaskRepository()
        {
        }
    }
}
