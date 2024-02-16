const mongodb = require("mongodb");

mongodb.MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db("test");
  const users = db.collection("users");

  const pipeline = [
    {
      $group: {
        _id: "$country",
        count: { $sum: 1 },
        avgAge: { $avg: "$age" },
      },
    },
    {
      $project: {
        country: "$_id",
        count: 1,
        avgAge: 1,
        _id: 0,
      },
    },
    {
      $sort: {
        country: 1,
      },
    },
  ];

  users.aggregate(pipeline, (err, cursor) => {
    if (err) {
      console.error(err);
      return;
    }

    cursor.forEach(
      (doc) => {
        console.log(doc);
      },
      () => {
        client.close();
      }
    );
  });
});
