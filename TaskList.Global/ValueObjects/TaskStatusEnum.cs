using System;
namespace TaskList.Global.ValueObjects
{
    public class TaskStatusEnum
    {
        public static TaskStatusEnum Pendente = new TaskStatusEnum(0, "Pendente");
        public static TaskStatusEnum Concluido = new TaskStatusEnum(1, "Concluida");

        public TaskStatusEnum(int codigo, string valor)
        {
            Codigo = codigo;
            Valor = valor;
        }

        public int Codigo { get; private set; }
        public string Valor { get; private set; }
    }
}
