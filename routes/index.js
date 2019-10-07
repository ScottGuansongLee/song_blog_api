import SqliteDB from "../utlis/sqlite3";
import user from "./user";

const file = "../user.db";
const sqliteDB = new SqliteDB(file);

const createTileTableSql =
  "create table if not exists tiles(level INTEGER, column INTEGER, row INTEGER, content BLOB);";
sqliteDB.createTable(createTileTableSql);

const index = function(req, res) {
  const querySql =
    "select * from tiles where level = 1 and column >= 10 and column <= 11 and row >= 10 and row <=11";

  sqliteDB.queryData(querySql, objects => {
    res.send(objects);
  });
};

export default { index, user };
