using System;
namespace TaskList.API.Domain.DTO
{
    public class TaskDto
    {
        public string Title { get; set; }
        public string Id { get; set; }
        public string Content { get; set; }
        public int Status { get; set; }
        public string CreatedAt { get; set; }
        public string CompletedAt { get; set; }
        public string LastUpdate { get; set; }

        public TaskDto()
        {
        }

        public static TaskDto Create(Global.Entities.Task x)
        {
            return new TaskDto
            {
                Title = x.Title,
                CompletedAt = x.CompletedAt.ToString("dd/MM/yyyy"),
                Content = x.Content,
                LastUpdate = x.LastUpdate.ToString("dd/MM/yyyy"),
                CreatedAt = x.CreatedAt.ToString("dd/MM/yyyy"),
                Id = x.Id,
                Status = x.Status
            };
        }
    }
}
