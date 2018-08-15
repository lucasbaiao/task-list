using System;
using System.Collections.Generic;
using TaskList.Global.Interfaces.Entities;

namespace TaskList.Global.Interfaces.Base
{
    public interface IBaseRepository<T> where T : IEntity
    {
        IEnumerable<T> GetAll();
        T Get(string id);
        T Update(T entity);
        T Insert(T entity);
        T Delete(T entity);
    }
}
