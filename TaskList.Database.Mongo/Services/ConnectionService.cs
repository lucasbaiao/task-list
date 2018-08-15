using System;
using MongoDB.Driver;
using TaskList.Global.Interfaces.Services;

namespace TaskList.Database.Mongo.Services
{
    public class ConnectionService : IConnectionService
    {
        private const string _connectionString = "mongodb://127.0.0.1:27017/default";
        private MongoClient _client;
        private IMongoDatabase _db;

        public ConnectionService()
        {
            _client = new MongoClient(_connectionString);
            _db = _client.GetDatabase("default");
        }

        public static ConnectionService Create()
        {
            return new ConnectionService();
        }

        public object GetDatabase()
        {
            return _db;
        }
    }
}
