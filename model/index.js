const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticatedUser");

class User {
  async createUser(req, res) {
    const detail = req.body;
    detail.userPass = await hash(detail.userPass, 15);

    const user = {
      userPass: detail.userPass,
      emailAdd: detail.emailAdd,
    };

    const strQry = `
        INSERT INTO Users
        SET ?
        `;
    db.query(strQry, [detail], (err) => {
      if (err) {
        request.status(401).json({ err });
      } else {
        const token = createToken(user);
        res.cookie("RightUser", token, {
          httpOnly: true,
          maxAge: 3600000,
        });
        request.status(200).json({ msg: "A new user has been created." });
      }
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const strQry = `
        SELECT userID, firstName, lastName, gender, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
    `;

    db.query(strQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect email address" });
      } else {
        await compare(userPass, data[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            userPass,
            emailAdd,
          });
          res.cookie("RightUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "Logged In",
              token,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "Incorrect Password, try again or register",
            });
          }
        });
      }
    });
  }
  updateUser(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Users 
        SET ?
        WHERE userID = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
  deleteUser(req, res) {
    const strQry = `
    DELETE FROM Users
    WHERE userID = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record has been deleted" });
    });
  }
  getUser(req, res) {
    const strQry = `
    SELECT userID, firstName, lastName, gender, cellphoneNum, emailAdd, userRole, userProfile, joinDate
    FROM Users
    WHERE userID = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getUsers(req, res) {
    const strQry = `
    SELECT userID, firstName, lastName, gender, cellphoneNum, emailAdd, userRole, userProfile, joinDate
    FROM Users;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
   forgotPassword(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Users 
        SET ?
        WHERE cellphoneNum = ? and emailAdd = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
}
class Product {
  addProduct(req, res) {
    const strQry = `
        INSERT INTO Products
        SET ?
        `;
    db.query(strQry, [req.body], (err) => {
      if (err) {
        res.status(400).json({ err: "Unable to add a new product" });
      } else {
        res.status(200).json({ msg: "Successfully added a new product" });
      }
    });
  }
  updateProduct(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Products
        SET ?
        WHERE id = ?;
        `;

    db.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ msg: "Unable to update the product" });
      } else {
        res.status(200).json({ msg: "A product has been updated" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
    DELETE FROM Products
    WHERE id = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A product has been deleted" });
    });
  }
  getProduct(req, res) {
    const strQry = `
    SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
    FROM Products
    WHERE id = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getProducts(req, res) {
    const strQry = `
    SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
    FROM Products;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
}

module.exports = {
  Product,
  User,
};
