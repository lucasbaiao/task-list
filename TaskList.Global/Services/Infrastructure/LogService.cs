using System;
using TaskList.Global.Interfaces.Infrastructure;

namespace TaskList.Global.Services.Infrastructure
{
    public class LogService : ILogService
    {
        public LogService()
        {
        }

        public void WriteLine(string line)
        {
            System.Console.WriteLine(line);
        }
    }
}
