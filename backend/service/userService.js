const con = require("../db/database");

exports.getAllUsers = async (req, res, next) => {
  try {
    const sql = "SELECT * FROM users";
    // ใช้ promise().query เพื่อรองรับ async/await
    const [rows] = await con.promise().query(sql);

    res.status(200).json({
      status: "Success",
      data: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: "Failed !",
    });
  }
};

exports.createUsers = async (req, res, next) => {
  try {
    const { firstname, lastname, nickname, birthdate, age, gender } = req.body;
    console.log("🚀 ~ exports.createUsers= ~ body:", req.body);
    const sql =
      "INSERT INTO users (firstname,lastname,nickname,birthdate,age,gender) value(?,?,?,?,?,?);";
    const [result] = await con
      .promise()
      .query(sql, [firstname, lastname, nickname, birthdate, age, gender]);
    res
      .status(201)
      .json({ status: "Success", message: "User created !", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Failed to create user" });
  }
};

exports.getUserByID = async (req, res, next) => {
  try {
    let { id } = req.params;
    const sql = "SELECT * FROM users WHERE id = ?";
    const [result] = await con.promise().query(sql, [id]);
    res.status(200).json({ status: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Failed" });
  }
};

exports.updateUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { firstname, lastname, nickname, birthdate, age, gender } = req.body;

    const sql =
      "UPDATE users SET firstname = ?, lastname = ?, nickname = ?, birthdate = ?, age = ?, gender = ? WHERE id = ?";
    const [result] = await con
      .promise()
      .query(sql, [firstname, lastname, nickname, birthdate, age, gender, id]);

    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ status: 200, message: "User update success ", data: result });
    } else {
      res.status(404).json({
        status: "Failed",
        message: "User not found ",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Update failed" });
  }
};

exports.deleteUserByID = async (req, res, next) => {
  try {
    let { id } = req.params;
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await con.promise().query(sql, [id]);
    res
      .status(200)
      .json({ status: 200, message: "Delete user success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Delete user failed" });
  }
};
