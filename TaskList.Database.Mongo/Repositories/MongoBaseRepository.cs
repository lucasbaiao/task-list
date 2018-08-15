using System.Collections.Generic;
using MongoDB.Driver;
using TaskList.Global.Interfaces.Base;
using TaskList.Global.Interfaces.Entities;
using System.Linq;
using MongoDB.Bson;
using System.Linq.Expressions;
using System;

namespace TaskList.Database.Mongo.Repositories
{
    public class MongoBaseRepository<T> : IBaseRepository<T> where T : IEntity
    {
        private string _collectionName;
        private IMongoCollection<T> _collection;
        private IMongoDatabase _database;

        public MongoBaseRepository(IMongoDatabase database, string collectionName)
        {
            _database = database;
            _collectionName = collectionName;
            _collection = database.GetCollection<T>(collectionName);
        }
         
        public virtual T Delete(T entity)
        {
            Expression<Func<T, bool>> filter = x => x.Id.Equals(ObjectId.Parse(entity.Id));
            _collection.DeleteOne(filter);
            return entity;
        }


        public virtual T Get(string id)
        {
            Expression<Func<T, bool>> filter = x => x.Id.Equals(ObjectId.Parse(id));
            return _collection.Find(filter).FirstOrDefault();
        }

        public virtual T Insert(T entity)
        {
            _collection.InsertOne(entity);
            return entity;
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _collection.Find(new BsonDocument()).ToList();
        }

        public virtual T Update(T entity)
        {
            Expression<Func<T, bool>> filter = x => x.Id.Equals(ObjectId.Parse(entity.Id));
            _collection.ReplaceOne(filter, entity);
            return entity;
        }
    }
}