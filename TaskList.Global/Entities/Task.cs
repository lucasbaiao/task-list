using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TaskList.Global.Interfaces.Entities;
using TaskList.Global.ValueObjects;

namespace TaskList.Global.Entities
{
    public class Task : ITask, IEntity
    {
        public static TaskFactory Factory => new TaskFactory();

        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; private set; }
        public string Content { get; private set; }
        public DateTime LastUpdate { get; private set; }
        public DateTime CompletedAt { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public int Status { get; private set; }

        public bool Completed 
        {    
            get
            {
                return Status == TaskStatusEnum.Concluido.Codigo;
            } 
        }

        private Task(string title, string content)
        {
            Title = title;
            Content = content;
            Status = TaskStatusEnum.Pendente.Codigo;
        }

        public class TaskFactory
        {
            public Task Instance { get; private set; }

            public TaskFactory Create(string title, string content)
            {
                Instance = new Task(title, content);
                Instance.CreatedAt = DateTime.Now;
                return this;
            }

            public TaskFactory From(Task task)
            {
                Instance = task.MemberwiseClone() as Task;
                return this;
            }

            public TaskFactory WithContent(string content)
            {
                Instance.Content = content;
                return this;
            }

            public TaskFactory WithTitle(string title)
            {
                Instance.Title = title;
                return this;
            }

            internal TaskFactory Completed()
            {
                Instance.Status = TaskStatusEnum.Concluido.Codigo;
                Instance.LastUpdate = DateTime.Now;
                Instance.CompletedAt = DateTime.Now;
                return this;
            }


            internal TaskFactory Pending()
            {
                Instance.Status = TaskStatusEnum.Pendente.Codigo;
                Instance.LastUpdate = DateTime.Now;
                Instance.CompletedAt = default(DateTime);
                return this;
            }
        }
    }
}
