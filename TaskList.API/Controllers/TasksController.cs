using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskList.Global.Entities;
using TaskList.Global.Interfaces.Services;

namespace TaskList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private ITaskService _taskService;

        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> Get()
        {
            var tasks = _taskService.GetAllTasks();
            var result = tasks.Select(x => Domain.DTO.TaskDto.Create(x));
            return Ok(result);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> Get(string id)
        {
            var task = _taskService.GetTask(id);
            var result = Domain.DTO.TaskDto.Create(task);
            return Ok(result);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> Create(Domain.DTO.TaskDto dto)
        {
            var task = Task.Factory.Create(dto.Title, dto.Content).Instance;
            var result = _taskService.Create(task);
            return Ok(result);
        }

        [HttpPost("{id}/completed")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> MarkAsCompleted(Domain.DTO.TaskDto dto)
        {
            var task = _taskService.GetTask(dto.Id);
            if (task == null)
            {
                throw new Exception("Task não encontrada");
            }

            var temp = _taskService.MarkAsCompleted(task);
            var result = Domain.DTO.TaskDto.Create(temp);
            return Ok(result);
        }

        [HttpPost("{id}/pending")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> MarkAsPending(Domain.DTO.TaskDto dto)
        {
            var task = _taskService.GetTask(dto.Id);
            if (task == null)
            {
                throw new Exception("Task não encontrada");
            }

            var temp = _taskService.MarkAsPending(task);
            var result = Domain.DTO.TaskDto.Create(temp);
            return Ok(result);
        }


        [HttpPut("{id}")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> UpdateTask(Domain.DTO.TaskDto dto)
        {
            var task = _taskService.GetTask(dto.Id);
            if (task == null)
            {
                throw new Exception("Task não encontrada");
            }

            var toUpdate = Task.Factory.From(task)
                .WithContent(dto.Content)
                .WithTitle(dto.Title)
                .Instance;

            var temp = _taskService.UpdateTask(toUpdate);
            var result = Domain.DTO.TaskDto.Create(temp);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Domain.DTO.TaskDto>> Delete(string id)
        {
            try
            {
                var task = _taskService.GetTask(id);
                if (task == null)
                {
                    throw new Exception("Task não encontrada");
                }

                var deleted = _taskService.Remove(task);
                var result = Domain.DTO.TaskDto.Create(deleted);
                return Ok(result);
            }
            catch(Exception e)
            {
                return StatusCode(500, new { code = 500, message = e.Message });
            }
        }
    }
}
