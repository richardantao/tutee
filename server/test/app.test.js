const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const request = require("request");
const app = require("../app.js");

it("Home page rendered",(done) => {
    request("http://localhost:3001/home.html",(err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done(); 
    });
});