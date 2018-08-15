using System;
namespace TaskList.Global.Interfaces.Entities
{
    public interface ITask : IEntity
    {
        string Title { get; }
        string Content { get; }
        int Status { get; }
    }
}
