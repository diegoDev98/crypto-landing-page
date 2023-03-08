const express = require("express");
const moment = require("moment");
const request = require("request");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  console.log("test");
  const uri = process.env.MONGODB_URI;
  //   console.log(uri);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // try {
  //   await client.connect();
  //   const database = client.db("users");
  //   const collection = database.collection("users");
  //   const data = await collection.find({}).toArray();
  //   console.log(data);
  //   res.json(data);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send("Error retrieving data");
  // } finally {
  //   await client.close();
  // }
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=24h";
  console.log("test");
  request(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve top 5 cryptocurrencies" });
    }

    const data = JSON.parse(body);
    const top5Cryptos = data.map((crypto) => {
      const chartData = crypto.sparkline_in_7d.price.map((price, index) => {
        const timestamp = moment()
          .subtract(7, "days")
          .add(index, "days")
          .unix();
        return [timestamp, price];
      });
      return {
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.current_price,
        priceChange24h: crypto.price_change_percentage_24h,
        chartData: chartData,
      };
    });
    console.log(top5Cryptos);
    res.json(top5Cryptos);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
