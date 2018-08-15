using System.Collections.Generic;
using TaskList.Global.Interfaces.Base;
using TaskList.Global.Interfaces.Entities;

namespace TaskList.Database.SQL
{
    public class BaseRepository<T> : IBaseRepository<T> where T : IEntity
    {
        public T Delete(T entity)
        {
            throw new System.NotImplementedException();
        }

        public T Get(string id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new System.NotImplementedException();
        }

        public T Insert(T entity)
        {
            throw new System.NotImplementedException();
        }

        public T Update(T entity)
        {
            throw new System.NotImplementedException();
        }


    }
}