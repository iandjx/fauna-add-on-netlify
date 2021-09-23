const faunadb = require("faunadb");

/* configure faunaDB Client with our secret */

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnAETujOfMACTD3yMQu7vmW6_u_Cnqq-7Ccm11rk",
});

exports.handler = async (event, context) => {
  try {
    const response = await client.query(
      q.Delete(q.Ref(q.Collection('notes'), '123'))
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
    /* Error! return the error with statusCode 400 */
    return {
      statusCode: 422,
      body: JSON.stringify(error),
    };
  }
};
