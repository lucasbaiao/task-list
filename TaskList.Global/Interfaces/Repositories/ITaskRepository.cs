using TaskList.Global.Entities;
using TaskList.Global.Interfaces.Base;
using TaskList.Global.Interfaces.Entities;

namespace TaskList.Global.Interfaces.Repositories
{
    public interface ITaskRepository : IBaseRepository<Global.Entities.Task>
    {
    }
}
