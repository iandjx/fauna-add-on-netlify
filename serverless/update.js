const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({
  secret: "fnAETujOfMACTD3yMQu7vmW6_u_Cnqq-7Ccm11rk",
});

exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */

  const data = JSON.parse(event.body);
  try {
    const response = await client.query(
      q.Update(q.Ref(q.Collection("notes"), "123"), {
        data,
      })
    );
    console.log(response);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
