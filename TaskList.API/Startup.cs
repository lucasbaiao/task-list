using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using TaskList.Database.Mongo.Repositories;
using TaskList.Database.Mongo.Services;
using TaskList.Global.Interfaces.Repositories;
using TaskList.Global.Interfaces.Services;
using TaskList.Global.Services;

namespace TaskList.API.Configuration
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("DefaultCorsPolicyName", builder =>
                {
                    builder
                        .AllowAnyOrigin() //TODO: Will be replaced by above when Microsoft releases microsoft.aspnetcore.cors 2.0 - https://github.com/aspnet/CORS/pull/94
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            var t = ConnectionService.Create();
            var database = t.GetDatabase() as IMongoDatabase;

            services.AddSingleton(typeof(ITaskRepository), new TaskRepository(database));
            services.AddSingleton<ITaskService, TaskService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("DefaultCorsPolicyName");
            app.UseMvc();
        }
    }
}
