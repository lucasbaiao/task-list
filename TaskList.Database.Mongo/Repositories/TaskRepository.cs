using System.Collections.Generic;
using MongoDB.Driver;
using TaskList.Global.Interfaces.Entities;
using TaskList.Global.Interfaces.Repositories;

namespace TaskList.Database.Mongo.Repositories
{
    public class TaskRepository : MongoBaseRepository<Global.Entities.Task>, ITaskRepository
    {
        public TaskRepository(IMongoDatabase database) 
            : base(database, "tasks")
        {
        }
    }
}
